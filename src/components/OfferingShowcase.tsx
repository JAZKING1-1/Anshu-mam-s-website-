import { ArrowUpRight, Flower2, Sparkles } from 'lucide-react';
import { OFFERINGS } from '../config/offerings';
import './offerings.css';

export function OfferingShowcase({ detailed = false }: { detailed?: boolean }) {
  return <section className={`offering-section section ${detailed ? 'offering-section-detailed' : ''}`} id="ways-to-work" aria-labelledby="offering-heading">
    <div className="container">
      <div className="section-heading offering-heading" data-reveal>
        <div><p className="eyebrow">Ways to work with Anshu</p><h2 id="offering-heading">Your next chapter.<br /><em>Choose your beginning.</em></h2></div>
        <p>Start with a conversation.<br />Explore personal support when you’re ready.</p>
      </div>
      <div className="offering-grid">{OFFERINGS.map((offer, i) => <article className={`offering-card offering-card-${i + 1}`} key={offer.id} id={offer.id} data-reveal>
        <div className="offering-topline"><span>{offer.number} / {offer.label}</span>{i === 0 ? <Sparkles size={27} strokeWidth={1.2} aria-hidden="true" /> : <Flower2 size={30} strokeWidth={1.1} aria-hidden="true" />}</div>
        <div className="offering-title"><h3>{offer.name}</h3><span className="offering-price">{offer.price}</span></div>
        <p className="offering-promise">{offer.headline}</p>
        <p className="offering-description">{offer.description}</p>
        {detailed && <div className="offering-detail"><p className="offering-audience">{offer.audience}</p><p className="eyebrow">What we can explore</p><ul>{offer.focus.map(item => <li key={item}><span aria-hidden="true">✳</span>{item}</li>)}</ul></div>}
        <div className="offering-card-bottom"><span className="offering-format">{offer.format}</span><a href={offer.href} data-route className={`button ${i === 0 ? 'button-primary' : 'button-light'}`}>{offer.cta}<ArrowUpRight size={17} aria-hidden="true" /></a>{detailed && <p className="offering-note">{offer.note}</p>}</div>
      </article>)}</div>
      {!detailed && <div className="offering-afterword" data-reveal><p>You don’t have to know exactly what you need to take the first step.</p><a data-route href="/coaching" className="text-link">Find out how we can work together <ArrowUpRight size={17} aria-hidden="true" /></a></div>}
    </div>
  </section>;
}
