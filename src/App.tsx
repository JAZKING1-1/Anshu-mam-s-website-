import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoachingPage } from './pages/CoachingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ThemeStudio } from './components/ThemeStudio';
import { ArrowRight } from 'lucide-react';

const titles: Record<string, string> = {
  '/': 'Life & Relationship Coaching for Women', '/about': 'My Story',
  '/coaching': 'Coaching with Anshu', '/testimonials': 'Client Stories',
  '/story-wall': 'Client Stories', '/book': 'Your Clarity Call',
  '/contact': 'Let’s Connect', '/privacy': 'Privacy', '/terms': 'Coaching Terms',
};
export default function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');
  const [themeOpen, setThemeOpen] = useState(false);
  const navigateTo = (next: string) => {
    if (next === path) { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); return; }
    window.history.pushState({}, '', next); setPath(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  useEffect(() => {
    const handlePop = () => { setPath(window.location.pathname.replace(/\/$/, '') || '/'); window.scrollTo(0, 0); };
    const handleLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-route]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault(); navigateTo(url.pathname);
    };
    window.addEventListener('popstate', handlePop); document.addEventListener('click', handleLink);
    return () => { window.removeEventListener('popstate', handlePop); document.removeEventListener('click', handleLink); };
  }, [path]);
  useEffect(() => {
    document.title = (titles[path] || 'Page not found') + ' | Anshu Sahani';
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [path]);
  let page;
  switch (path) {
    case '/': page = <HomePage onNavigate={navigateTo} />; break;
    case '/about': page = <AboutPage onNavigate={navigateTo} />; break;
    case '/coaching': page = <CoachingPage onNavigate={navigateTo} />; break;
    case '/story-wall': case '/testimonials': page = <TestimonialsPage onNavigate={navigateTo} />; break;
    case '/book': page = <BookingPage />; break;
    case '/contact': page = <ContactPage />; break;
    case '/privacy': page = <PrivacyPage />; break;
    case '/terms': page = <TermsPage />; break;
    default: page = <section className="container section page-intro"><p className="eyebrow">A small detour</p><h1 className="page-heading">Let’s find your way back.</h1><p>This page isn’t here, but your next chapter can start at home.</p><a data-route href="/" className="button button-primary">Back to home <ArrowRight size={16} /></a></section>;
  }
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header currentPath={path} onNavigate={navigateTo} onTheme={() => setThemeOpen(true)} />
    <main id="main-content" tabIndex={-1} key={path}>{page}</main>
    <Footer onNavigate={navigateTo} onTheme={() => setThemeOpen(true)} />
    <ThemeStudio open={themeOpen} onClose={() => setThemeOpen(false)} />
  </div>;
}
