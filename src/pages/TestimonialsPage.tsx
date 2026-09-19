import { ArrowUpRight } from 'lucide-react';
import { Invitation } from '../components/SiteElements';

interface TestimonialsPageProps {
  onNavigate?: (path: string) => void;
}

const REFLECTIONS = [
  { id: '01', duration: '2:18' },
  { id: '02', duration: '1:49' },
  { id: '03', duration: '0:56' },
  { id: '04', duration: '6:51' },
  { id: '05', duration: '0:44' },
];

function ReflectionCard({ id, duration }: (typeof REFLECTIONS)[number]) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <video
          controls
          playsInline
          preload="none"
          poster={`/testimonials/reflection-${id}.webp`}
          aria-label={`Client reflection ${id}, ${duration}`}
        >
          <source src={`/testimonials/reflection-${id}.mp4`} type="video/mp4" />
          Your browser does not support this video.{' '}
          <a href={`/testimonials/reflection-${id}.mp4`}>Open client reflection {id}</a>.
        </video>
      </div>
      <div className="video-copy">
        <h3>Client reflection {id}</h3>
        <span className="muted">In their own words <span aria-hidden="true">·</span> {duration}</span>
      </div>
    </article>
  );
}

export function TestimonialsPreview() {
  return (
    <section className="testimonials-section section" aria-labelledby="client-stories-heading"><div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Client stories</p>
          <h2 id="client-stories-heading">Every journey<br />has <em>a voice.</em></h2>
        </div>
        <p className="muted">Personal reflections on the experience of working with Anshu.</p>
      </div>
      <div className="video-grid">
        {REFLECTIONS.slice(0, 3).map((reflection) => <ReflectionCard key={reflection.id} {...reflection} />)}
      </div>
      <a href="/testimonials" data-route className="text-link testimonial-all">Explore client stories <ArrowUpRight size={17} /></a>
      <p className="video-note">Every experience is personal. Individual outcomes vary.</p>
      </div>
    </section>
  );
}

export function TestimonialsPage(_props: TestimonialsPageProps) {
  return (
    <>
      <section className="container section">
        <div className="page-intro testimonials-intro">
          <p className="eyebrow">Client stories</p>
          <h1 className="page-heading">Every journey<br />has <em>a voice.</em></h1>
          <p>Hear personal reflections from people who have worked with Anshu, shared in their own words and at their own pace.</p>
        </div>
        <div className="video-grid">
          {REFLECTIONS.map((reflection) => <ReflectionCard key={reflection.id} {...reflection} />)}
        </div>
        <p className="video-note">Every experience is personal. These reflections do not promise a particular outcome from coaching.</p>
      </section>
      <Invitation />
    </>
  );
}
