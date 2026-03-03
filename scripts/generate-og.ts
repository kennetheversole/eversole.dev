import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readdir, readFile, stat, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";

const CONTENT_DIR = join(import.meta.dir, "..", "content", "blog");
const OUTPUT_DIR = join(import.meta.dir, "..", "static", "og");
const FONTS_DIR = join(
  import.meta.dir,
  "..",
  "static",
  "fonts",
  "Josefin_Sans"
);

const WIDTH = 1200;
const HEIGHT = 630;

interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}

function parseFrontmatter(content: string): PostMeta | null {
  const match = content.match(/^\+\+\+\n([\s\S]*?)\n\+\+\+/);
  if (!match) return null;

  const fm = match[1];

  const title = fm.match(/^title\s*=\s*"(.+)"/m)?.[1] ?? "";
  const dateRaw = fm.match(/^date\s*=\s*(\S+)/m)?.[1] ?? "";
  const tagsMatch = fm.match(/^tags\s*=\s*\[([^\]]*)\]/m)?.[1] ?? "";
  const tags = tagsMatch
    .split(",")
    .map((t) => t.trim().replace(/"/g, ""))
    .filter(Boolean);

  return { title, date: dateRaw, tags, slug: "" };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function buildOgMarkup(post: PostMeta) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        padding: "32px",
        fontFamily: "Josefin Sans",
      },
      children: [
        // Inner card
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1",
              backgroundColor: "#1a1a1a",
              borderRadius: "24px",
              padding: "60px 64px",
            },
            children: [
              // Title
              {
                type: "div",
                props: {
                  style: {
                    fontSize: post.title.length > 50 ? "48px" : "56px",
                    fontWeight: "700",
                    color: "#ededed",
                    lineHeight: "1.25",
                  },
                  children: post.title,
                },
              },
              // Date
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "24px",
                    color: "#6b7b9e",
                    marginTop: "20px",
                  },
                  children: formatDate(post.date),
                },
              },
            ],
          },
        },
        // Bottom bar
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 8px 0 8px",
            },
            children: [
              // Pill badge with title | author
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    maxWidth: "70%",
                  },
                  children: [
                    {
                      type: "span",
                      props: {
                        style: {
                          fontSize: "18px",
                          color: "#ccc",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        children: `${post.title} | Kenneth Eversole`,
                      },
                    },
                  ],
                },
              },
              // Branding
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "22px",
                  },
                  children: [
                    {
                      type: "span",
                      props: {
                        style: { color: "#4a6cf7" },
                        children: "Kenneth Eversole",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        style: { color: "#555" },
                        children: "|",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        style: { color: "#ededed", fontWeight: "700" },
                        children: "Blog",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  const fontRegular = await readFile(join(FONTS_DIR, "JosefinSans-Regular.ttf"));
  const fontBold = await readFile(join(FONTS_DIR, "JosefinSans-Bold.ttf"));

  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(CONTENT_DIR);
  const mdFiles = files.filter((f) => f.endsWith(".md") && f !== "_index.md");

  let generated = 0;
  let skipped = 0;

  for (const file of mdFiles) {
    const slug = basename(file, ".md");
    const srcPath = join(CONTENT_DIR, file);
    const outPath = join(OUTPUT_DIR, `${slug}.png`);

    // Skip if PNG is newer than source
    try {
      const srcStat = await stat(srcPath);
      const outStat = await stat(outPath);
      if (outStat.mtimeMs > srcStat.mtimeMs) {
        skipped++;
        continue;
      }
    } catch {
      // Output doesn't exist, generate it
    }

    const content = await readFile(srcPath, "utf-8");
    const meta = parseFrontmatter(content);
    if (!meta) {
      console.warn(`  skip: ${file} (no frontmatter)`);
      continue;
    }
    meta.slug = slug;

    const markup = buildOgMarkup(meta);

    const svg = await satori(markup, {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Josefin Sans",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Josefin Sans",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    });

    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: WIDTH * 2 },
    });
    const png = resvg.render().asPng();

    await Bun.write(outPath, png);
    generated++;
    console.log(`  gen: ${slug}.png`);
  }

  console.log(
    `\nDone: ${generated} generated, ${skipped} skipped (up-to-date)`
  );
}

main().catch((err) => {
  console.error("OG generation failed:", err);
  process.exit(1);
});
