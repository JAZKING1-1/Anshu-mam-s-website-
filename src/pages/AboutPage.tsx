import { ArrowUpRight } from 'lucide-react';
import { Botanical, Invitation } from '../components/SiteElements';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const chapters = [
  {
    number: '01',
    period: 'My beginnings',
    title: 'Learning to be the strong one.',
    paragraphs: [
      'I grew up in Haridwar, the eldest of four children, in a family rich in values and quiet sacrifice. Being the eldest meant setting an example. I became the dependable one, the peacekeeper, the person who made room for everyone else.',
      'Underneath that responsibility was a shy girl who wanted to see the world. In 2003, I left home to study in Dehradun. Living away from everything familiar taught me how to adapt and keep going. But learning to listen to myself would take longer.',
      'I went on to complete my Master’s and B.Ed and became a teacher. I was building a life and earning my own money, yet I still measured my worth by how much I could give. I knew how to meet expectations. I had rarely stopped to ask what I needed.',
    ],
  },
  {
    number: '02',
    period: 'Motherhood · 2011',
    title: 'A different kind of beginning.',
    paragraphs: [
      'When my daughter arrived, I felt a new sense of purpose. I wanted her to grow up with a voice, choices, and the freedom to be herself. I wanted her to know that her needs mattered.',
      'That wish invited a difficult question: how could I help her trust herself when I was still learning to do the same? On the outside, I was managing work and family. Inside, years of overgiving had left me disconnected from myself. Something needed to change.',
    ],
  },
  {
    number: '03',
    period: 'The turning point',
    title: 'Making space to hear myself.',
    paragraphs: [
      'The pandemic and a difficult chapter that followed brought me face to face with my emotional exhaustion. I began to notice the patterns I had carried for years: people pleasing, self-doubt, and the belief that being needed was the same as being valued.',
      'I asked for help. Through reading, meditation, spiritual reflection, and a self-development programme, I started questioning beliefs I had inherited without choosing. I made space for feelings I had spent so long setting aside.',
      'Change came through small, deliberate choices. I began to understand that I could care deeply and still have boundaries. I could honour my relationships and make room for myself within them.',
    ],
  },
  {
    number: '04',
    period: 'A new purpose · 2022',
    title: 'Turning experience into support.',
    paragraphs: [
      'In 2022, I completed my life coaching certification. I continued learning alongside teaching, motherhood, and my own personal growth. What began as a search for answers became a wish to offer the understanding and support I had once needed.',
      'Today, I coach women towards clarity, courage, confidence, and emotional maturity. My own experience shapes the care I bring to this work, while your experiences, values, and goals guide the conversation.',
      'There is no single timeline for finding your voice. We begin where you are, with warmth, honest reflection, and room to take the next step at your own pace.',
    ],
  },
];

export const AboutPage = ({ onNavigate }: AboutPageProps) => (
  <>
    <header className="page-intro container section">
      <p className="eyebrow">My story</p>
      <h1 className="page-heading">From silence<br />to <em>my own voice.</em></h1>
      <p>Before I supported other women in finding themselves,<br className="desktop-break" /> I began the journey of coming back to myself.</p>
    </header>

    <section className="story-intro container section" aria-labelledby="meet-anshu">
      <figure className="story-portrait">
        <img src="/images/anshu-hero.webp" width="648" height="945" alt="Anshu in a sage outfit, standing beside flowers in a warmly lit room" fetchPriority="high" />
        <figcaption className="photo-note">Anshu Sahani · Life coach for women</figcaption>
      </figure>
      <div className="prose">
        <p className="eyebrow">A little about me</p>
        <h2 id="meet-anshu">Hello, I’m Anshu.<br /><em>I’m glad you’re here.</em></h2>
        <p>I know what it can feel like to be the strong one. To be present for everyone, yet struggle to hear your own needs. To build a life that looks full, while feeling that something within you is missing.</p>
        <p>For a long time, that was my story, too. My path to coaching began with learning to make room for myself: my feelings, my choices, and the person I wanted to become.</p>
        <p>It is the heart of the space I offer today. A place to be heard, to understand yourself more clearly, and to explore what comes next.</p>
        <button type="button" className="text-link" onClick={() => onNavigate('/coaching')}>Explore working together <ArrowUpRight size={17} /></button>
      </div>
    </section>

    <section className="story-body container section" aria-labelledby="journey-heading">
      <div className="story-section-heading">
        <p className="eyebrow">The journey that brought me here</p>
        <h2 id="journey-heading">One choice.<br /><em>Then another.</em></h2>
      </div>
      {chapters.map((chapter) => (
        <article className="story-chapter" key={chapter.number}>
          <span className="story-chapter-number" aria-hidden="true">{chapter.number}</span>
          <div className="prose">
            <p className="eyebrow">{chapter.period}</p>
            <h3>{chapter.title}</h3>
            {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      ))}
    </section>

    <section className="section container" aria-labelledby="beyond-heading">
      <div className="story-section-heading">
        <p className="eyebrow">Beyond the sessions</p>
        <h2 id="beyond-heading">A few moments<br /><em>from my world.</em></h2>
        <p className="muted">Mountain views, flowers, and everyday moments.<br className="desktop-break" /> A glimpse of the woman behind the work.</p>
      </div>
      <div className="story-gallery">
        <figure>
          <img src="/images/anshu-mountains.webp" width="960" height="1280" alt="Anshu outdoors with snow-covered mountains behind her" loading="lazy" />
          <figcaption className="photo-note">Under an open sky</figcaption>
        </figure>
        <figure>
          <img src="/images/anshu-flowers.webp" width="960" height="1280" alt="Anshu standing beside an arrangement of pink and cream flowers" loading="lazy" />
          <figcaption className="photo-note">A moment with the flowers</figcaption>
        </figure>
        <figure>
          <img src="/images/anshu-personal.webp" width="686" height="1280" alt="Anshu smiling beside a window in a burgundy patterned outfit" loading="lazy" />
          <figcaption className="photo-note">A little everyday warmth</figcaption>
        </figure>
      </div>
    </section>

    <section className="story-closing section" aria-labelledby="story-closing-heading">
      <Botanical />
      <div className="container prose">
        <p className="eyebrow">Where we can begin</p>
        <h2 id="story-closing-heading">You can be there for others.<br /><em>And be here for yourself.</em></h2>
        <p>If you have always been the strong one, there is space here for you, too.</p>
      </div>
    </section>
    <Invitation />
  </>
);
