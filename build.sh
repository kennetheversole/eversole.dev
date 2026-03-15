#!/usr/bin/env bash
set -euo pipefail

CONTENT_DIR="content/blog"
TEMP_DIR=".build_content"

# Clean up previous build artifacts
rm -rf "$TEMP_DIR"

# Copy content so we don't modify source files
cp -r "$CONTENT_DIR" "$TEMP_DIR"

# Replace Obsidian ![[*.excalidraw]] embeds with Zola shortcodes
find "$TEMP_DIR" -name '*.md' ! -name '*.excalidraw.md' -exec \
  sed -i '' -E 's/!\[\[([^]]+)\.excalidraw\]\]/{{ drawing(name="\1") }}/g' {} +

# Swap processed content in, build, then restore
mv "$CONTENT_DIR" "${CONTENT_DIR}.orig"
mv "$TEMP_DIR" "$CONTENT_DIR"

zola build "$@"
EXIT_CODE=$?

# Restore original content
rm -rf "$CONTENT_DIR"
mv "${CONTENT_DIR}.orig" "$CONTENT_DIR"

exit $EXIT_CODE
