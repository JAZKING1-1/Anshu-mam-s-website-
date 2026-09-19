import { ArrowDown, ArrowUpRight, Flower2, HeartHandshake, Leaf, MoveUpRight } from 'lucide-react';
import { Botanical, Invitation, Questions } from '../components/SiteElements';
import { TestimonialsPreview } from './TestimonialsPage';

export const SUPPORT = [
  { number: '01', title: 'A kinder relationship with yourself', copy: 'Reconnect with your needs, quiet the self-doubt, and make room for the woman beneath all the roles you carry.', tag: 'SELF-WORTH & CONFIDENCE', icon: Flower2 },
  { number: '02', title: 'Connection without losing yourself', copy: 'Explore relationship patterns, communicate what matters, and practise boundaries that respect you as well as others.', tag: 'RELATIONSHIPS & BOUNDARIES', icon: HeartHandshake },
  { number: '03', title: 'A clearer way forward', copy: 'Make sense of the overthinking, reconnect with your values, and take small, intentional steps into your next chapter.', tag: 'CLARITY & PERSONAL GROWTH', icon: Leaf },
];
export function HomePage(_props: { onNavigate: (path: string) => void }) {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A LITTLE SPACE, JUST FOR YOU</p>
          <h1>Come home<br />to <em>yourself.</em></h1>
          <p className="hero-subtitle">Life & relationship coaching for women</p>
          <p className="hero-description">You’ve held so much for everyone else. Here is a space to hear your own voice, find clarity, and move forward with a little more trust in yourself.</p>
          <div className="hero-actions"><a href="/book" data-route className="button button-primary">Begin your next chapter <ArrowUpRight size={17} /></a><a href="/about" data-route className="text-link">Meet Anshu <ArrowUpRight size={16} /></a></div>
          <p className="hero-note"><span className="tiny-flower">✳</span> At your pace. In your own way.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" /><div className="hero-photo-frame"><img src="/images/anshu-hero.webp" alt="Anshu Sahani in a softly lit room, wearing a sage embroidered outfit" width="648" height="945" fetchPriority="high" /></div>
          <span className="portrait-vertical">COURAGE · CLARITY · CONFIDENCE</span>
          <div className="portrait-label"><span>A warm welcome,</span><strong>I’m Anshu.</strong><small>YOUR PARTNER IN PERSONAL GROWTH</small></div>
          <Botanical className="hero-botanical" />
          <div className="hero-sun" aria-hidden="true">✳</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>INDIVIDUAL COACHING · ONLINE, WHEREVER YOU ARE</span><a href="#a-place-for-you">A gentle place to begin <ArrowDown size={15} /></a></div>
    </section>

    <section id="a-place-for-you" className="welcome-strip"><div className="container"><span className="tiny-flower" aria-hidden="true">✳</span><p>You can be grateful for your life<br className="mobile-break" /> <em>and still want something to change.</em></p><span className="tiny-flower" aria-hidden="true">✳</span></div></section>

    <section className="container section support-section">
      <div className="section-heading"><div><p className="eyebrow">There is space for you here</p><h2>For the woman who is<br />ready to <em>choose herself.</em></h2></div><p>You don’t need to have all the answers.<br />We can begin with what’s on your mind.</p></div>
      <div className="support-grid">{SUPPORT.map(({ number, title, copy, tag, icon: Icon }) => <a data-route href="/coaching" className="support-card" key={number}><div className="support-card-top"><Icon size={32} strokeWidth={1} /><span>{number}</span></div><p className="micro-label">{tag}</p><h3>{title}</h3><p>{copy}</p><span className="support-card-link">Explore the work <MoveUpRight size={17} /></span></a>)}</div>
    </section>

    <section className="meet-section section"><div className="container meet-grid">
      <div className="meet-image"><img src="/images/anshu-flowers.webp" alt="Anshu pausing beside a vase of flowers" width="960" height="1280" loading="lazy" /><div className="meet-caption">A woman. A mother. A lifelong learner.</div></div>
      <div className="meet-copy"><p className="eyebrow">The woman behind the work</p><h2>I know what it feels like<br />to lose yourself<br /><em>in caring for everyone.</em></h2><p>For years, I knew how to be responsible, dependable, and strong. Learning to listen to my own needs was a different journey altogether.</p><p>My path from teaching and motherhood to personal growth led me to life coaching in 2022. Today, I offer women the space, thoughtful questions, and support I once needed myself.</p><a href="/about" data-route className="text-link">This is my story <ArrowUpRight size={18} /></a><div className="signature">Anshu<span>WITH WARMTH & UNDERSTANDING</span></div></div>
    </div></section>

    <section className="values-section section"><div className="container">
      <div className="values-heading"><p className="eyebrow">The heart of our work</p><h2>Softness and strength<br />can <em>belong together.</em></h2></div>
      <div className="values-grid"><article><span>01</span><h3>Courage</h3><p>To honour your needs.<br />To let your own voice matter.</p></article><article><span>02</span><h3>Clarity</h3><p>To understand your patterns.<br />To choose what feels true to you.</p></article><article><span>03</span><h3>Confidence</h3><p>To trust your decisions.<br />To take your next small step.</p></article></div>
    </div><Botanical /></section>

    <section className="container section journey-section"><div className="section-heading"><div><p className="eyebrow">Working together</p><h2>A gentle beginning.<br /><em>Meaningful steps.</em></h2></div><a href="/coaching" data-route className="text-link">Discover 1:1 coaching <ArrowUpRight size={18} /></a></div><div className="journey-grid">{[['Let’s meet', 'An introductory clarity call to share what brings you here and explore whether we’re a good fit.'], ['Make space', 'Thoughtful, personal conversations to understand your patterns, needs, and the changes you want to make.'], ['Move forward', 'Practical tools and small steps to carry your insights into everyday life, at a pace that respects you.']].map(([title, copy], i) => <article key={title}><span className="journey-number">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <TestimonialsPreview />
    <Questions />
    <Invitation />
  </>;
}
