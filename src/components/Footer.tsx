import { ArrowUpRight, Palette, Sparkles } from 'lucide-react';
import { BrandMark } from './SiteElements';
import { CONTACT_CONFIG } from '../config/contact';
export function Footer({ onTheme }: { onNavigate?: (path: string) => void; onTheme?: () => void }) {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><a data-route href="/" className="brand"><BrandMark /><span>Anshu Sahani<small>LIFE & RELATIONSHIP COACH</small></span></a><p>Life by choice,<br />not by chance.<br />Make room for your next chapter.</p></div>
    <div><p className="eyebrow">Explore</p><nav aria-label="Footer navigation"><a data-route href="/about">My story</a><a data-route href="/coaching">Work with me</a><a data-route href="/testimonials">Client stories</a><a data-route href="/contact">Contact</a>{CONTACT_CONFIG.socials.instagram && <a href={CONTACT_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>}</nav></div>
    <div className="footer-invite"><p className="eyebrow">Your next chapter</p><h3>Begin with a conversation.</h3><a data-route href="/book?offer=clarity-call" className="text-link">Explore a free Clarity Call <ArrowUpRight size={18} /></a><button className="appearance-link" onClick={onTheme}><Palette size={16} /> Choose your colours & type</button><button className="footer-ritual" onClick={() => window.dispatchEvent(new Event('anshu:replay-intro'))}><Sparkles size={14} /> Replay the welcome</button></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Anshu Sahani</span><p>Coaching supports personal growth. It does not replace mental health care.</p><div><a data-route href="/privacy">Privacy</a><a data-route href="/terms">Terms</a></div></div></footer>;
}
