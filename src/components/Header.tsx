import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Palette, X } from 'lucide-react';
import { BrandMark } from './SiteElements';
export function Header({ currentPath = '/', onTheme }: { currentPath?: string; onNavigate?: (path: string) => void; onTheme?: () => void }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [currentPath]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus(); } };
    window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key);
  }, [open]);
  const links = [['Home', '/'], ['My Story', '/about'], ['Coaching', '/coaching'], ['Client Stories', '/testimonials']];
  return <header className="site-header"><div className="container header-inner">
    <a href="/" data-route className="brand" aria-label="Anshu Sahani, home"><BrandMark /><span>Anshu Sahani<small>LIFE & RELATIONSHIP COACH</small></span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} data-route href={href} aria-current={currentPath === href ? 'page' : undefined}>{label}</a>)}</nav>
    <div className="header-actions"><button className="icon-button theme-toggle" onClick={onTheme} aria-label="Choose colours and typography" title="Choose your colours"><Palette size={19} strokeWidth={1.4} /></button><a href="/book" data-route className="button button-primary header-cta">Let’s connect <ArrowUpRight size={16} /></a><button ref={toggleRef} className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={23} /> : <Menu size={23} />}</button></div>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} data-route href={href} onClick={() => setOpen(false)} aria-current={currentPath === href ? 'page' : undefined}>{label}<ArrowUpRight size={16} /></a>)}<a href="/book" data-route onClick={() => setOpen(false)}>Let’s connect <ArrowUpRight size={16} /></a></nav>}</header>;
}
