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
    month: "long",
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
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#121212",
        padding: "60px",
        fontFamily: "Josefin Sans",
      },
      children: [
        // Top: domain
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#0a00ff",
                  },
                },
              },
              {
                type: "span",
                props: {
                  style: {
                    fontSize: "24px",
                    color: "#999",
                    letterSpacing: "0.05em",
                  },
                  children: "eversole.dev",
                },
              },
            ],
          },
        },
        // Middle: title
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: "1",
              justifyContent: "center",
            },
            children: [
              {
                type: "h1",
                props: {
                  style: {
                    fontSize: post.title.length > 50 ? "42px" : "52px",
                    fontWeight: "700",
                    color: "#e0e0e0",
                    lineHeight: "1.2",
                    margin: "0",
                  },
                  children: post.title,
                },
              },
              // Tags
              ...(post.tags.length > 0
                ? [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap" as const,
                        },
                        children: post.tags.map((tag) => ({
                          type: "span",
                          props: {
                            style: {
                              fontSize: "16px",
                              color: "#888",
                              backgroundColor: "#1e1e1e",
                              padding: "4px 12px",
                              borderRadius: "4px",
                              border: "1px solid #333",
                            },
                            children: tag,
                          },
                        })),
                      },
                    },
                  ]
                : []),
            ],
          },
        },
        // Bottom: author + date
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            children: [
              {
                type: "span",
                props: {
                  style: {
                    fontSize: "22px",
                    color: "#999",
                    fontWeight: "600",
                  },
                  children: "Kenneth Eversole",
                },
              },
              {
                type: "span",
                props: {
                  style: {
                    fontSize: "20px",
                    color: "#666",
                  },
                  children: formatDate(post.date),
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
      fitTo: { mode: "width", value: WIDTH },
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
