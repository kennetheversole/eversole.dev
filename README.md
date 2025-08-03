# eversole.dev

Personal website and blog built with [Zola](https://www.getzola.org/), a fast static site generator written in Rust.

## Requirements

- Zola v0.15.3 or higher
- Node.js (for Cloudflare Pages deployment)

## Local Development

```bash
# Serve the site locally with live reload
zola serve

# Build the site
zola build
```

The site will be available at `http://127.0.0.1:1111`

## Structure

- `content/` - Markdown files for pages and blog posts
- `templates/` - HTML templates
- `sass/` - SCSS stylesheets
- `static/` - Static assets (fonts, images, JavaScript)
- `config.toml` - Site configuration

## Deployment

The site is deployed to Cloudflare Pages. Commits to the main branch trigger automatic deployments.

## License

All content and code are property of Kenneth Eversole unless otherwise noted.