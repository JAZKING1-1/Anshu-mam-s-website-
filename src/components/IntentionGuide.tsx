import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EnergyBloom } from './EnergyArt';
const intentions = [
  { label: 'I need room to breathe', title: 'You can make space for yourself.', copy: 'When you’re used to being there for everyone, your own needs can become an afterthought. We can begin with what you’re carrying, what matters to you, and the boundaries you want to practise.', note: 'A place to explore your needs & boundaries' },
  { label: 'I want to trust myself', title: 'Your voice deserves to be heard.', copy: 'You don’t need to have every answer to begin. Together, we can notice the self-doubt, reconnect with your values, and explore decisions that feel more like you.', note: 'A place to explore self-worth & confidence' },
  { label: 'I’m ready for a new chapter', title: 'A small step can be a beginning.', copy: 'Change can feel hopeful and uncertain at the same time. We can make room for both, find clarity about what you want, and turn your insights into practical next steps.', note: 'A place to explore clarity & personal growth' },
];
export function IntentionGuide() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return <section className="intention-section section" data-scroll-art><div className="container intention-layout">
    <div className="intention-heading" data-motion="left"><p className="eyebrow">03 / Come exactly as you are</p><h2>What’s on<br /><em>your heart?</em></h2><p>There’s no perfect place to start.<br />Just a place that feels like yours.</p><EnergyBloom className="intention-bloom" /></div>
    <div className="intention-interaction" data-motion="right"><div className="intention-tabs" role="tablist" aria-orientation="vertical" aria-label="What brings you here?">{intentions.map((item, i) => <button type="button" role="tab" key={item.label} id={`intention-tab-${i}`} aria-selected={active === i} aria-controls={`intention-panel-${i}`} tabIndex={active === i ? 0 : -1} ref={el => { tabs.current[i] = el; }} onClick={() => setActive(i)} onKeyDown={e => { let next = i; if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % intentions.length; else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i + intentions.length - 1) % intentions.length; else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = intentions.length - 1; else return; e.preventDefault(); setActive(next); tabs.current[next]?.focus(); }}><span>0{i + 1}</span>{item.label}<ArrowUpRight size={16} /></button>)}</div>
    {intentions.map((item, i) => <div key={item.label} role="tabpanel" tabIndex={0} id={`intention-panel-${i}`} aria-labelledby={`intention-tab-${i}`} hidden={active !== i} className="intention-panel"><p className="eyebrow">{item.note}</p><h3>{item.title}</h3><p>{item.copy}</p><a href="/book" data-route className="text-link">Let’s begin here <ArrowUpRight size={18} /></a></div>)}
    <p className="intention-private">A moment of reflection, just for you. Your choice isn’t sent anywhere.</p></div>
  </div></section>;
}
