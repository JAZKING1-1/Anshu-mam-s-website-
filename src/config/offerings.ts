// Confirmed in owner-authored Leaders arena material. Commercial details that
// were not supplied (session duration, package counts, fees) stay off the site.
export const OFFERINGS = [
  {
    id: 'clarity-call', number: '01', name: 'Clarity Call', label: 'A first conversation',
    price: 'Complimentary', format: 'Explore your next step',
    headline: 'A little clarity. A place to begin.',
    description: 'Something feels ready to change, but you’re not sure where to start. Bring your questions and explore whether working with Anshu feels right for you.',
    audience: 'For you if you’re curious about coaching or unsure what support you need.',
    focus: ['Share what brings you here', 'Talk through the support you’re looking for', 'Ask about working together and your next step'],
    cta: 'Enquire about a free Clarity Call', href: '/book?offer=clarity-call',
    note: 'Start by sending CLARITY to Anshu on Instagram.',
  },
  {
    id: 'personal-coaching', number: '02', name: '1:1 Coaching', label: 'Personal support with Anshu',
    price: 'Enquire for details', format: 'Individual sessions',
    headline: 'Make room for the life you choose.',
    description: 'Personal conversations to explore self-worth, guilt, boundaries, and the choices that shape your life. A space to understand your patterns and practise a different way forward.',
    audience: 'For you if you want personal support with the patterns or decisions you’re navigating.',
    focus: ['Reconnect with your needs and values', 'Explore boundaries, self-trust, and conscious choices', 'Find practical steps that feel right for your life'],
    cta: 'Enquire about 1:1 coaching', href: '/book?offer=personal-coaching',
    note: 'Discuss the focus, format, availability, and fees with Anshu before you decide.',
  },
] as const;
