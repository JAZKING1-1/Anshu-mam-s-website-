// First palette and typeface are the published defaults. Keep IDs stable for saved preferences.
export const PALETTES = [
  {
    "id": "rose",
    "name": "Rose & ritual",
    "mood": "Warm rose, rich plum, grounded gold",
    "colours": [
      "#301b2a",
      "#efd5d7",
      "#963c56"
    ],
    "tokens": {
      "paper": "#faf1e7",
      "surface": "#fffaf4",
      "ink": "#321e2b",
      "muted": "#69505a",
      "accent": "#963c56",
      "accent-ink": "#ffffff",
      "accent-on-deep": "#e8bf8d",
      "soft": "#efd5d7",
      "line": "#d8b7ba",
      "deep": "#301b2a",
      "on-deep": "#fff4e7",
      "sage": "#e4e4d3",
      "gold": "#916536",
      "gold-light": "#e8bf8d",
      "rust": "#a14832"
    }
  },
  {
    "id": "sage",
    "name": "Sage & ceremony",
    "mood": "Deep forest, soft sage, warm stone",
    "colours": [
      "#1d362b",
      "#d9e2d0",
      "#41634c"
    ],
    "tokens": {
      "paper": "#f3f1e5",
      "surface": "#fcfaf0",
      "ink": "#24372d",
      "muted": "#526456",
      "accent": "#41634c",
      "accent-ink": "#ffffff",
      "accent-on-deep": "#ddc591",
      "soft": "#d9e2d0",
      "line": "#b8c8b2",
      "deep": "#1d362b",
      "on-deep": "#f7f3e6",
      "sage": "#e9d9c3",
      "gold": "#886233",
      "gold-light": "#ddc591",
      "rust": "#8a492f"
    }
  },
  {
    "id": "lavender",
    "name": "Lavender & dusk",
    "mood": "Velvet violet, lilac, antique gold",
    "colours": [
      "#2b1837",
      "#e4d2e9",
      "#744788"
    ],
    "tokens": {
      "paper": "#f6eff7",
      "surface": "#fff9ff",
      "ink": "#33213e",
      "muted": "#67536e",
      "accent": "#744788",
      "accent-ink": "#ffffff",
      "accent-on-deep": "#dec3eb",
      "soft": "#e4d2e9",
      "line": "#c9b1d2",
      "deep": "#2b1837",
      "on-deep": "#fff4fd",
      "sage": "#e4dfcc",
      "gold": "#866237",
      "gold-light": "#dec3eb",
      "rust": "#a45345"
    }
  },
  {
    "id": "sand",
    "name": "Terracotta & gold",
    "mood": "Earthy rust, warm clay, sunlit cream",
    "colours": [
      "#43231e",
      "#f0d4c3",
      "#993d2c"
    ],
    "tokens": {
      "paper": "#faf0e4",
      "surface": "#fff9f1",
      "ink": "#42261f",
      "muted": "#735446",
      "accent": "#993d2c",
      "accent-ink": "#ffffff",
      "accent-on-deep": "#e8b883",
      "soft": "#f0d4c3",
      "line": "#d7b59d",
      "deep": "#43231e",
      "on-deep": "#fff3e5",
      "sage": "#dedec7",
      "gold": "#8a5b28",
      "gold-light": "#e8b883",
      "rust": "#993d2c"
    }
  }
] as const;
export const TYPEFACES = [
  { id: 'editorial', name: 'Editorial', family: '\"Fraunces\", \"Cormorant Garamond\", Georgia, serif' },
  { id: 'classic', name: 'Classic', family: '\"Libre Baskerville\", Georgia, serif' },
  { id: 'timeless', name: 'Timeless', family: 'Georgia, \"Times New Roman\", serif' },
] as const;
