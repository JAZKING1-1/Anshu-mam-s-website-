import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { MobileQuickBar } from './components/MobileQuickBar';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoachingPage } from './pages/CoachingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/coaching':
        return <CoachingPage onNavigate={navigateTo} />;
      case '/testimonials':
        return <TestimonialsPage onNavigate={navigateTo} />;
      case '/book':
        return <BookingPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#2D2729] font-sans selection:bg-[#EFCBD5] selection:text-[#4A2E3B] flex flex-col justify-between pb-16 sm:pb-0">
      <div>
        <Header currentPath={currentPath} onNavigate={navigateTo} />
        <main>{renderPage()}</main>
      </div>

      <Footer onNavigate={navigateTo} />
      <Chatbot onNavigate={navigateTo} />
      <MobileQuickBar onNavigate={navigateTo} />
    </div>
  );
};

export default App;
