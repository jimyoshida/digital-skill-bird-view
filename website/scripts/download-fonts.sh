#!/usr/bin/env bash
# Downloads the Noto fonts referenced by pdf/eng-theme.yml and pdf/cjk-theme.yml
# into fonts/. Fonts are gitignored, so run this once after cloning (or whenever
# a font is missing) before `make pdf` / `USE_CJK=1 make pdf`.
#
# Fetches static TTF instances straight from Google Fonts' CSS API rather than
# the variable fonts on GitHub, since asciidoctor-pdf's font embedding does not
# reliably support variable-font tables (fvar/gvar).
set -euo pipefail

cd "$(dirname "$0")/../fonts"

# A pre-woff2 user agent makes the CSS API return .ttf src URLs instead of .woff2.
UA="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)"

download() {
  local family="$1" weight="$2" outfile="$3" url
  url=$(curl -sL --max-time 20 -A "$UA" \
    "https://fonts.googleapis.com/css2?family=${family}:wght@${weight}" \
    | grep -oP '(?<=url\()[^)]+(?=\))')
  if [ -z "$url" ]; then
    echo "error: could not resolve download URL for $family weight $weight" >&2
    exit 1
  fi
  echo "Fetching $outfile <- $url"
  curl -sL --max-time 30 -o "$outfile" "$url"
}

download "Noto+Emoji" 400 NotoEmoji-Regular.ttf
download "Noto+Sans+JP" 400 NotoSansJP-Regular.ttf
download "Noto+Sans+JP" 700 NotoSansJP-Bold.ttf
download "Noto+Serif+JP" 400 NotoSerifJP-Regular.ttf
download "Noto+Serif+JP" 700 NotoSerifJP-Bold.ttf

echo "Fonts downloaded to $(pwd)"
