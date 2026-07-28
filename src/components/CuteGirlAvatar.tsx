import React, { useEffect, useMemo, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import * as adventurer from '@dicebear/adventurer';
import { ArrowRight, Heart, MessageCircle, RefreshCw, Sparkles, X } from 'lucide-react';

interface CuteGirlAvatarProps {
  onNavigate?: (path: string) => void;
}

const affirmations = [
  'You do not need to have it all figured out to take one brave step.',
  'Softness is not weakness. It is how you stay open without losing yourself.',
  'Your boundaries can be kind, clear, and completely valid.',
  'You are allowed to become someone your old life cannot contain.',
];

export const CuteGirlAvatar: React.FC<CuteGirlAvatarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState(0);
  const [reaction, setReaction] = useState<'idle' | 'happy' | 'love'>('idle');
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const avatar = useMemo(
    () =>
      createAvatar(adventurer, {
        seed: ['Maya'],
        backgroundColor: ['f6d8e7'],
        backgroundType: ['gradientLinear'],
        radius: 50,
        flip: false,
      }).toDataUri(),
    [],
  );

  useEffect(() => {
    const follow = (event: PointerEvent) => {
      setPointer({
        x: Math.max(-5, Math.min(5, (event.clientX / window.innerWidth - 0.5) * 10)),
        y: Math.max(-4, Math.min(4, (event.clientY / window.innerHeight - 0.5) * 8)),
      });
    };
    window.addEventListener('pointermove', follow, { passive: true });
    return () => window.removeEventListener('pointermove', follow);
  }, []);

  const react = (next: 'happy' | 'love') => {
    setReaction(next);
    window.setTimeout(() => setReaction('idle'), 900);
  };

  const navigate = (path: string) => {
    setIsOpen(false);
    onNavigate?.(path);
  };

  return (
    <aside className={`maya-guide ${isOpen ? 'is-open' : ''}`} aria-live="polite">
      {isOpen && (
        <div className="maya-card">
          <button className="maya-close" onClick={() => setIsOpen(false)} aria-label="Close Maya">
            <X size={17} />
          </button>

          <div className="maya-card-heading">
            <span className="maya-mini-avatar">
              <img src={avatar} alt="" />
            </span>
            <div>
              <p className="maya-kicker">your pocket hype-girl</p>
              <h3>Maya is here ✦</h3>
            </div>
          </div>

          <div className="maya-message">
            <Sparkles size={16} />
            <p>{affirmations[quote]}</p>
            <button
              onClick={() => setQuote((quote + 1) % affirmations.length)}
              aria-label="Show another affirmation"
            >
              <RefreshCw size={15} />
            </button>
          </div>

          <p className="maya-prompt">How are we feeling today?</p>
          <div className="maya-reactions">
            <button onClick={() => react('happy')}>✨ hopeful</button>
            <button onClick={() => react('love')}>💗 tender</button>
            <button onClick={() => setQuote((quote + 1) % affirmations.length)}>🌙 unsure</button>
          </div>

          <button className="maya-cta" onClick={() => navigate('/book')}>
            Let’s find your next step <ArrowRight size={16} />
          </button>
        </div>
      )}

      {!isOpen && <div className="maya-hello">hey lovely, need a little boost?</div>}

      <button
        className={`maya-avatar-button ${reaction}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Maya, your pocket hype-girl' : 'Talk to Maya, your pocket hype-girl'}
        style={{ '--look-x': `${pointer.x}px`, '--look-y': `${pointer.y}px` } as React.CSSProperties}
      >
        <span className="maya-orbit"><Heart size={14} fill="currentColor" /></span>
        <span className="maya-avatar-image">
          <img src={avatar} alt="Maya, an illustrated feminine wellbeing guide" />
        </span>
        <span className="maya-status" aria-hidden="true" />
        <span className="maya-chat-icon"><MessageCircle size={17} fill="currentColor" /></span>
      </button>
    </aside>
  );
};
