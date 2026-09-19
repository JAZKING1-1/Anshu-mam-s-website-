# Self-hosted website fonts

These unmodified Latin WOFF2 subsets were downloaded from the Google Fonts CSS API. The website loads these local files; it does not need to request fonts from Google at runtime.

Families and requested styles:

- Cormorant Garamond: normal and italic, weights 400 and 500.
- DM Sans: normal, weights 400, 500 and 600.
- Libre Baskerville: normal and italic, weight 400.

Google Fonts serves one file for multiple requested weights where the source is variable. Each local font file is shared by the applicable declarations in `src/font-face.css`.

CSS source:
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@400;500;600&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap

Upstream projects and licenses:

- https://github.com/google/fonts/tree/main/ofl/cormorantgaramond — `cormorantgaramond-OFL.txt`
- https://github.com/google/fonts/tree/main/ofl/dmsans — `dmsans-OFL.txt`
- https://github.com/google/fonts/tree/main/ofl/librebaskerville — `librebaskerville-OFL.txt`

All three families are provided under the SIL Open Font License 1.1. Preserve the included license notices when redistributing these assets.
