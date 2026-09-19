// First palette and typeface are the published defaults.
export const PALETTES = [
  { id: 'rose', name: 'Rose & ivory', mood: 'Warm, feminine, quietly confident', colours: ['#f9f6f0', '#eee0de', '#805054'], tokens: { paper: '#f9f6f0', surface: '#fffcf8', ink: '#352e30', muted: '#6d6261', accent: '#805054', 'accent-ink': '#ffffff', soft: '#eee0de', line: '#dcd0ca', deep: '#423336', 'on-deep': '#fcf8f2', sage: '#e3e6dc', gold: '#917445' } },
  { id: 'sage', name: 'Sage sanctuary', mood: 'Grounded, fresh, restorative', colours: ['#f6f7f0', '#e1e8dc', '#4a6554'], tokens: { paper: '#f6f7f0', surface: '#fdfef7', ink: '#2e3831', muted: '#5e6a60', accent: '#4a6554', 'accent-ink': '#ffffff', soft: '#e1e8dc', line: '#cdd6c8', deep: '#304738', 'on-deep': '#f5f8ef', sage: '#eee5d7', gold: '#857042' } },
  { id: 'lavender', name: 'Lavender dusk', mood: 'Soft, reflective, a little celestial', colours: ['#f8f5fa', '#e9e1ee', '#705778'], tokens: { paper: '#f8f5fa', surface: '#fffbff', ink: '#38303e', muted: '#6c6171', accent: '#705778', 'accent-ink': '#ffffff', soft: '#e9e1ee', line: '#d8cedd', deep: '#44374e', 'on-deep': '#fcf8ff', sage: '#e2e7e2', gold: '#89704b' } },
  { id: 'sand', name: 'Sand & gold', mood: 'Sunlit, understated, timeless', colours: ['#f9f5ee', '#ede3d3', '#805e3f'], tokens: { paper: '#f9f5ee', surface: '#fffaf2', ink: '#3d332a', muted: '#706254', accent: '#805e3f', 'accent-ink': '#ffffff', soft: '#ede3d3', line: '#dccdbb', deep: '#493a2d', 'on-deep': '#fff9ef', sage: '#e3e6d9', gold: '#896a38' } },
] as const;
export const TYPEFACES = [
  { id: 'editorial', name: 'Editorial', family: '"Cormorant Garamond", Georgia, serif' },
  { id: 'classic', name: 'Classic', family: '"Libre Baskerville", Georgia, serif' },
  { id: 'timeless', name: 'Timeless', family: 'Georgia, "Times New Roman", serif' },
] as const;
