import { useEffect, useRef, useState } from 'react';
import { Check, RotateCcw, X } from 'lucide-react';
import { PALETTES, TYPEFACES } from '../config/theme';
type Appearance = { palette: string; font: string; accent: string };
const defaults: Appearance = { palette: PALETTES[0].id, font: TYPEFACES[0].id, accent: '' };
function readAppearance(): Appearance {
  try {
    const value = JSON.parse(localStorage.getItem('anshu-appearance') || '{}');
    return { palette: PALETTES.some(p => p.id === value.palette) ? value.palette : defaults.palette, font: TYPEFACES.some(f => f.id === value.font) ? value.font : defaults.font, accent: /^#[0-9a-f]{6}$/i.test(value.accent) ? value.accent : '' };
  } catch { return defaults; }
}
function luminance(hex: string) {
  const values = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
}
function contrastRatio(foreground: string, background: string) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + .05) / (values[1] + .05);
}
export function ThemeStudio({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [appearance, setAppearance] = useState(readAppearance);
  const [lessMotion, setLessMotion] = useState(() => { try { return localStorage.getItem('anshu-reduced-motion') === 'true'; } catch { return false; } });
  const changeMotion = (value: boolean) => {
    setLessMotion(value);
    try { localStorage.setItem('anshu-reduced-motion', String(value)); } catch { /* Optional preference storage. */ }
    window.dispatchEvent(new CustomEvent('anshu:motion-preference', { detail: { reduced: value } }));
  };
  const dialog = useRef<HTMLDialogElement>(null);
  const palette = PALETTES.find(p => p.id === appearance.palette) || PALETTES[0];
  const [accentDraft, setAccentDraft] = useState(appearance.accent || palette.tokens.accent);
  useEffect(() => { setAccentDraft(appearance.accent || palette.tokens.accent); }, [appearance.accent, palette]);
  useEffect(() => {
    Object.entries(palette.tokens).forEach(([key, value]) => document.documentElement.style.setProperty(`--${key}`, value));
    document.documentElement.style.setProperty('--serif', (TYPEFACES.find(f => f.id === appearance.font) || TYPEFACES[0]).family);
    const accent = appearance.accent || palette.tokens.accent;
    // Accent choices never replace body text or compromise the contrast of labels.
    const textAccent = [palette.tokens.paper, palette.tokens.surface, palette.tokens.soft, palette.tokens.sage].every(background => contrastRatio(accent, background) >= 4.5) ? accent : palette.tokens.ink;
    document.documentElement.style.setProperty('--accent-text', textAccent);
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-ink', contrastRatio('#ffffff', accent) >= contrastRatio('#000000', accent) ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--accent-on-deep', appearance.accent && contrastRatio(accent, palette.tokens.deep) >= 4.5 ? accent : palette.tokens['accent-on-deep']);
    try { localStorage.setItem('anshu-appearance', JSON.stringify(appearance)); } catch { /* Storage is optional. */ }
  }, [appearance, palette]);
  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal();
    if (!open && dialog.current?.open) dialog.current?.close();
  }, [open]);
  return <dialog ref={dialog} className="theme-dialog" aria-labelledby="theme-title" onCancel={onClose} onClose={onClose} onClick={e => { if (e.target === dialog.current) onClose(); }}><div className="theme-inner">
    <button className="icon-button dialog-close" onClick={onClose} aria-label="Close appearance settings"><X size={22} /></button>
    <p className="eyebrow">Your space, your mood</p><h2 id="theme-title">Make yourself<br /><em>at home.</em></h2><p className="muted">Choose the colours and lettering that feel like you.</p>
    <fieldset><legend>01 / A colour story</legend><div className="palette-options">{PALETTES.map(p => <button key={p.id} className={appearance.palette === p.id && !appearance.accent ? 'selected' : ''} aria-pressed={appearance.palette === p.id && !appearance.accent} onClick={() => setAppearance({ ...appearance, palette: p.id, accent: '' })}><span className="swatches">{p.colours.map(c => <i key={c} style={{ background: c }} />)}</span><strong>{p.name}</strong><small>{p.mood}</small>{appearance.palette === p.id && !appearance.accent && <Check className="palette-check" size={15} />}</button>)}</div></fieldset>
    <fieldset><legend>02 / Your lettering</legend><div className="font-options">{TYPEFACES.map(f => <button key={f.id} style={{ fontFamily: f.family }} aria-pressed={appearance.font === f.id} onClick={() => setAppearance({ ...appearance, font: f.id })}>{f.name}</button>)}</div></fieldset>
    <div className="custom-accent"><span>Or choose your own accent</span><div className="custom-accent-fields"><input className="accent-hex" aria-label="Accent hex code" type="text" spellCheck={false} maxLength={7} value={accentDraft} onChange={e => { setAccentDraft(e.target.value); if (/^#[0-9a-f]{6}$/i.test(e.target.value)) setAppearance({ ...appearance, accent: e.target.value }); }} onBlur={() => setAccentDraft(appearance.accent || palette.tokens.accent)} /><input aria-label="Custom accent colour" type="color" value={appearance.accent || palette.tokens.accent} onInput={e => setAppearance({ ...appearance, accent: e.currentTarget.value })} onChange={e => setAppearance({ ...appearance, accent: e.target.value })} /></div></div>
    <fieldset className="motion-preference"><legend>03 / Your pace</legend><label><input type="checkbox" checked={lessMotion} onChange={event => changeMotion(event.target.checked)} /><span>Use less motion<small>Skip the welcome animation and scroll effects.</small></span></label><p>Your device’s reduced-motion setting is always respected.</p></fieldset>
    <div className="theme-bottom"><small>Saved only in this browser.</small><button onClick={() => { setAppearance(defaults); changeMotion(false); }}><RotateCcw size={14} /> Reset</button></div>
  </div></dialog>;
}
