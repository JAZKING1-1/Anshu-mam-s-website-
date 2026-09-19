import { ArrowDown, ArrowUpRight, Flower2, HeartHandshake, Leaf, MoveUpRight } from 'lucide-react';
import { Invitation, Questions } from '../components/SiteElements';
import { EnergyBloom, JourneyThread } from '../components/EnergyArt';
import { IntentionGuide } from '../components/IntentionGuide';
import { TestimonialsPreview } from './TestimonialsPage';

export const SUPPORT = [
  { number: '01', title: 'A kinder relationship with yourself', copy: 'Reconnect with your needs, quiet the self-doubt, and make room for the woman beneath all the roles you carry.', tag: 'SELF-WORTH & CONFIDENCE', icon: Flower2 },
  { number: '02', title: 'Connection without losing yourself', copy: 'Explore relationship patterns, communicate what matters, and practise boundaries that respect you as well as others.', tag: 'RELATIONSHIPS & BOUNDARIES', icon: HeartHandshake },
  { number: '03', title: 'A clearer way forward', copy: 'Make sense of the overthinking, reconnect with your values, and take small, intentional steps into your next chapter.', tag: 'CLARITY & PERSONAL GROWTH', icon: Leaf },
];
export function HomePage(_props: { onNavigate: (path: string) => void }) {
  return <>
    <section className="hero power-hero" data-scroll-art>
      <div className="hero-aura" aria-hidden="true" />
      <EnergyBloom className="hero-energy" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-entrance"><span /> LIFE & RELATIONSHIP COACHING FOR WOMEN</p>
          <h1 className="hero-entrance">Soft heart.<br />Strong voice.<br /><em>Your life.</em></h1>
          <p className="hero-description hero-entrance">Come home to the woman you are.<br />A space to feel deeply, stand firmly, and create a life that feels like yours.</p>
          <div className="hero-actions hero-entrance"><a href="/book" data-route className="button button-light">Find your next chapter <ArrowUpRight size={18} /></a><a href="/about" data-route className="text-link">Meet Anshu <ArrowUpRight size={17} /></a></div>
          <p className="hero-note hero-entrance"><span className="note-line" /> Rooted in you. Open to possibility.</p>
        </div>
        <div className="hero-visual hero-entrance">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="hero-photo-frame"><img src="/images/anshu-hero.webp" alt="Anshu Sahani in a softly lit room, wearing a sage embroidered outfit" width="648" height="945" fetchPriority="high" /></div>
          <span className="portrait-vertical">THE COURAGE TO BE YOURSELF</span>
          <div className="portrait-label"><span>Your story matters.</span><strong>I’m Anshu.</strong><small>LET’S MAKE SPACE FOR YOU.</small></div>
          <svg className="hero-petal" viewBox="0 0 120 170" fill="none" aria-hidden="true"><path d="M60 154C4 115 6 51 60 8c54 43 56 107 0 146Zm0 0C5 143-14 94 8 48c57 6 83 56 52 106Zm0 0c55-11 74-60 52-106-57 6-83 56-52 106Z" stroke="currentColor" strokeWidth="1.2"/><path d="M60 8v154" stroke="currentColor" strokeWidth=".7"/></svg>
        </div>
      </div>
      <div className="container hero-bottom"><span>PERSONAL COACHING · ONLINE, WHEREVER YOU ARE</span><a href="#a-place-for-you"><span className="scroll-cue"><ArrowDown size={15} /></span> A little space to explore</a></div>
    </section>
    <section id="a-place-for-you" className="welcome-strip power-manifesto" data-scroll-art>
      <div className="container"><span className="manifesto-star" aria-hidden="true">✳</span><p data-motion="rise">You are allowed to be <em>soft.</em><br />You are allowed to take up <em>space.</em></p><span className="manifesto-star" aria-hidden="true">✳</span></div>
      <span className="manifesto-foot">BOTH CAN BE TRUE. BOTH CAN BE YOU.</span>
    </section>
    <section className="container section support-section">
      <div className="section-heading" data-motion="rise"><div><p className="eyebrow">01 / Make room for yourself</p><h2>Your needs matter.<br /><em>Your voice does, too.</em></h2></div><p>You’ve held so much for everyone else.<br />This is where we make room for you.</p></div>
      <div className="support-grid">{SUPPORT.map(({ number, title, copy, tag, icon: Icon }) => <a data-route href="/coaching" className="support-card" key={number} data-motion="rise"><div className="support-card-top"><span className="support-icon"><Icon size={31} strokeWidth={1.25} /></span><span>{number}</span></div><p className="micro-label">{tag}</p><h3>{title}</h3><p>{copy}</p><span className="support-card-link">Explore the work <MoveUpRight size={19} /></span></a>)}</div>
    </section>
    <section className="meet-section section"><div className="container meet-grid">
      <div className="meet-image" data-motion="left"><div className="meet-photo-wrap"><img src="/images/anshu-flowers.webp" alt="Anshu pausing beside a vase of flowers" width="960" height="1280" loading="lazy" /></div><span className="image-corner-note">A NOTE FROM ANSHU</span><div className="meet-caption">A woman. A mother. A lifelong learner.</div></div>
      <div className="meet-copy" data-motion="right"><p className="eyebrow">02 / A real woman. A shared understanding.</p><h2>Before I held space<br />for others,<br /><em>I had to find my own.</em></h2><p>For years, I knew how to be responsible, dependable, and strong. Learning to listen to my own needs was a different journey altogether.</p><p>My path from teaching and motherhood to personal growth led me to life coaching in 2022. Today, I offer women the space, thoughtful questions, and support I once needed myself.</p><a href="/about" data-route className="text-link">Get to know my story <ArrowUpRight size={18} /></a><div className="signature">With warmth, Anshu<span>REAL CONVERSATIONS. ROOM TO GROW.</span></div></div>
    </div></section>
    <section className="values-section section power-values" data-scroll-art><EnergyBloom className="values-bloom" /><div className="container">
      <div className="values-heading" data-motion="rise"><p className="eyebrow">Softness is not the absence of strength</p><h2>Rooted in yourself.<br /><em>Ready to bloom.</em></h2><p>Warmth to feel. Clarity to choose. Courage to move.</p></div>
      <div className="values-grid"><article data-motion="rise"><span>01 / YOUR ROOTS</span><h3>Courage</h3><p>To honour your needs.<br />To let your own voice matter.</p></article><article data-motion="rise"><span>02 / YOUR CENTRE</span><h3>Clarity</h3><p>To understand your patterns.<br />To choose what feels true to you.</p></article><article data-motion="rise"><span>03 / YOUR EXPANSION</span><h3>Confidence</h3><p>To trust your decisions.<br />To take your next small step.</p></article></div>
    </div></section>
    <IntentionGuide />
    <section className="container section journey-section" data-scroll-art><div className="section-heading" data-motion="rise"><div><p className="eyebrow">04 / Small steps. A meaningful shift.</p><h2>A little space.<br /><em>A new beginning.</em></h2></div><a href="/coaching" data-route className="text-link">Discover 1:1 coaching <ArrowUpRight size={18} /></a></div><JourneyThread /><div className="journey-grid">{[['Let’s meet', 'An introductory clarity call to share what brings you here and explore whether we’re a good fit.'], ['Make space', 'Thoughtful, personal conversations to understand your patterns, needs, and the changes you want to make.'], ['Move forward', 'Practical tools and small steps to carry your insights into everyday life, at a pace that respects you.']].map(([title, copy], i) => <article key={title} data-motion="rise"><span className="journey-number">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <TestimonialsPreview />
    <Questions />
    <Invitation />
  </>;
}
