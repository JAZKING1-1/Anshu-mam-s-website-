import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { FAQSection } from '../components/FAQSection';

export const BookingPage: React.FC = () => {
  return (
    <div className="pt-6">
      <BookingForm />
      <FAQSection />
    </div>
  );
};
