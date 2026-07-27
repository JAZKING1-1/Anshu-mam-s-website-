import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Support Keyboard Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Story Wall', path: '/story-wall' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Free Clarity Call', path: '/book' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (path.startsWith('#')) {
      const elem = document.querySelector(path);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.pathname = path;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F4]/95 backdrop-blur-md shadow-soft border-b border-[#EFCBD5]/50 py-3'
          : 'bg-[#FFF9F4]/90 backdrop-blur-sm border-b border-[#EFCBD5]/30 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Elegant Text-Based Brand Lockup */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#9C536D] rounded-xl p-1 no-underline"
          >
            <div className="w-9 h-9 rounded-full bg-[#EFCBD5]/50 flex items-center justify-center border border-[#C3A36B]/40 group-hover:bg-[#EFCBD5] transition-colors">
              <Sparkles className="w-4 h-4 text-[#C3A36B]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#4A2E3B] block leading-tight">
                Anshu Sahani
              </span>
              <span className="text-[10px] text-[#9C536D] font-bold tracking-widest uppercase block mt-0.5">
                LIFE COACH FOR WOMEN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Above 900px / lg breakpoint) */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`text-sm font-medium transition-colors relative py-1 no-underline ${
                    isActive ? 'text-[#9C536D] font-semibold' : 'text-[#2D2729]/80 hover:text-[#9C536D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9C536D] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Header CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/book"
              onClick={(e) => handleLinkClick('/book', e)}
              className="inline-flex items-center gap-2 bg-[#9C536D] hover:bg-[#824259] text-white font-medium px-6 py-3 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 text-sm no-underline focus:outline-none focus:ring-2 focus:ring-[#9C536D]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Call</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Below 900px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-2xl text-[#4A2E3B] hover:bg-[#EFCBD5]/40 focus:outline-none focus:ring-2 focus:ring-[#9C536D] transition-colors cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Below 900px) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F4] border-b border-[#EFCBD5] px-4 pt-3 pb-6 space-y-2 animate-fade-up shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleLinkClick(link.path, e)}
              className="block px-4 py-3 text-base font-medium text-[#4A2E3B] rounded-2xl hover:bg-[#EFCBD5]/30 transition-colors no-underline"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="/book"
              onClick={(e) => handleLinkClick('/book', e)}
              className="w-full flex items-center justify-center gap-2 bg-[#9C536D] text-white font-medium px-5 py-3.5 rounded-2xl shadow-soft text-center text-sm no-underline"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Your Free Clarity Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
