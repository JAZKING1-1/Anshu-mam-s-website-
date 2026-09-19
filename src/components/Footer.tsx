import { ArrowUpRight, Palette, Sparkles } from 'lucide-react';
import { BrandMark } from './SiteElements';
export function Footer({ onTheme }: { onNavigate?: (path: string) => void; onTheme?: () => void }) {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><a data-route href="/" className="brand"><BrandMark /><span>Anshu Sahani<small>LIFE & RELATIONSHIP COACH</small></span></a><p>A little more courage.<br />A little more clarity.<br />A life that feels like yours.</p></div>
    <div><p className="eyebrow">Explore</p><nav aria-label="Footer navigation"><a data-route href="/about">My story</a><a data-route href="/coaching">Work with me</a><a data-route href="/testimonials">Client stories</a><a data-route href="/contact">Contact</a></nav></div>
    <div className="footer-invite"><p className="eyebrow">Your next chapter</p><h3>Begin with a conversation.</h3><a data-route href="/book" className="text-link">Explore a clarity call <ArrowUpRight size={18} /></a><button className="appearance-link" onClick={onTheme}><Palette size={16} /> Choose your colours & type</button><button className="footer-ritual" onClick={() => window.dispatchEvent(new Event('anshu:replay-intro'))}><Sparkles size={14} /> Replay the welcome</button></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Anshu Sahani</span><p>Coaching supports personal growth. It does not replace mental health care.</p><div><a data-route href="/privacy">Privacy</a><a data-route href="/terms">Terms</a></div></div></footer>;
}
