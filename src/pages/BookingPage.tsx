import { BookingForm } from '../components/BookingForm';

export const BookingPage = () => (
  <div className="container">
    <header className="page-intro">
      <p className="eyebrow">Connect with Anshu</p>
      <h1 className="page-heading">A gentle first step.</h1>
      <p>A little curiosity. An open conversation. A space to explore what you need next.</p>
    </header>
    <BookingForm />
  </div>
);
