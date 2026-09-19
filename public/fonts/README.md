# Self-hosted website fonts

These unmodified Latin WOFF2 subsets come from the Google Fonts CSS API. Fonts are served locally, without runtime requests to Google.

## Published typography

- **Fraunces** is the default Editorial heading font. Its substantial, expressive serif forms support the website’s warmer, more confident visual direction. Normal and italic files include variable weight (100–900) and optical size (9–144) axes.
- **DM Sans** is the body and interface font. The existing file includes a genuine variable weight axis (100–1000). The stylesheet declares that full range so medium and semibold text use the correct outlines.
- **Libre Baskerville** remains the Classic heading option, normal and italic at weight 400.
- **Georgia** remains the Timeless option through system fonts.
- **Cormorant Garamond** is retained as a fallback, normal and italic, variable weights 300–700.

The existing theme IDs (editorial, classic, timeless) are unchanged. Variable ranges were verified directly with fontTools against each WOFF2 file. Headline weight and optical sizing are controlled in the main site stylesheet.

## Download sources

Fraunces CSS (19 September 2026):

https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&display=swap

Google Fonts returned variable Latin files whose internal weight range is 100–900:

- Normal: https://fonts.gstatic.com/s/fraunces/v38/6NU78FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0KxC9TeA.woff2
- Italic: https://fonts.gstatic.com/s/fraunces/v38/6NU58FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChjeveQ.woff2

Previously downloaded family source:

https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@400;500;600&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap

## Upstream projects and licenses

- https://github.com/undercasetype/Fraunces — Fraunces design project.
- https://github.com/google/fonts/tree/main/ofl/fraunces — fraunces-OFL.txt.
- https://github.com/google/fonts/tree/main/ofl/cormorantgaramond — cormorantgaramond-OFL.txt.
- https://github.com/google/fonts/tree/main/ofl/dmsans — dmsans-OFL.txt.
- https://github.com/google/fonts/tree/main/ofl/librebaskerville — librebaskerville-OFL.txt.

All four downloaded families are provided under the SIL Open Font License 1.1. Preserve the included license notices when redistributing these assets.
