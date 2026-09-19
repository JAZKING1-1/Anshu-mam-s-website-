/** Decorative vector artwork, driven by the section's scroll progress. */
export function EnergyBloom({ className = '' }: { className?: string }) {
  return <svg className={`energy-bloom ${className}`} viewBox="0 0 600 600" fill="none" aria-hidden="true">
    <circle className="bloom-ring" cx="300" cy="300" r="274" stroke="currentColor" strokeWidth=".7" />
    <circle className="bloom-ring-inner" cx="300" cy="300" r="223" stroke="currentColor" strokeWidth=".5" strokeDasharray="2 12" />
    <g className="bloom-petals" stroke="currentColor" strokeWidth=".8">{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="300" cy="203" rx="65" ry="158" transform={`rotate(${i * 45} 300 300)`} />)}</g>
    <path d="M300 2v38m0 520v38M2 300h38m520 0h38" stroke="currentColor" />
    <circle cx="300" cy="300" r="7" fill="currentColor" />
  </svg>;
}
export function JourneyThread() {
  return <svg className="journey-thread" viewBox="0 0 1200 120" fill="none" aria-hidden="true" preserveAspectRatio="none"><path className="thread-base" d="M5 95C170-55 235 180 407 67S662 4 799 65s251 91 396-44" stroke="currentColor" strokeWidth="1.2" /><path className="thread-draw" pathLength="1" d="M5 95C170-55 235 180 407 67S662 4 799 65s251 91 396-44" stroke="currentColor" strokeWidth="2" /><circle cx="407" cy="67" r="5" fill="currentColor" /><circle cx="799" cy="65" r="5" fill="currentColor" /></svg>;
}
