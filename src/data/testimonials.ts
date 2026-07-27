export interface Testimonial {
  id: string;
  clientLabel: string;
  journeyType: string;
  quote: string;
  duration?: string;
  featured: boolean;
  videoUrl?: string; // Path to video testimonial file if available
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-video-1",
    clientLabel: "Client, 1:1 Emotional Growth Journey",
    journeyType: "1:1 Personal Coaching",
    quote: "Working with Anshu Ma'am helped me shift from feeling constantly overwhelmed and emotionally reactive to experiencing true inner calm, self-awareness, and clarity in my relationships.",
    duration: "1:1 Coaching",
    featured: true,
    videoUrl: "/TESTMONIALS/T1.mp4",
  },
  {
    id: "t-video-2",
    clientLabel: "Client, Relationship Clarity Journey",
    journeyType: "Relationship Coaching",
    quote: "I used to struggle with people-pleasing and setting boundaries without guilt. Anshu's sessions gave me the courage and language to communicate what I truly need.",
    duration: "Personalized Support",
    featured: true,
    videoUrl: "/TESTMONIALS/T2.mp4",
  },
  {
    id: "t-video-3",
    clientLabel: "Client, 3-Month Transformation Journey",
    journeyType: "3-Month Journey",
    quote: "This 3-month journey helped me reset, refresh, and restart my life. Change is possible when you have a safe, compassionate, and non-judgemental guide by your side.",
    duration: "3-Month Reset",
    featured: true,
    videoUrl: "/TESTMONIALS/T3.mp4",
  },
  {
    id: "t-video-4",
    clientLabel: "Client, Mindset & NLP Reframing",
    journeyType: "NLP & Mindset",
    quote: "I discovered abilities inside myself I had forgotten existed. Rebuilding my self-worth gave me the confidence to make decisions without being ruled by fear or approval.",
    duration: "Mindset Reframing",
    featured: false,
    videoUrl: "/TESTMONIALS/T4.mp4",
  },
  {
    id: "t-video-5",
    clientLabel: "Client, Personal Confidence Journey",
    journeyType: "1:1 Coaching",
    quote: "Anshu created a safe space where I could speak my truth without judgment. I finally feel connected to my own voice and identity again.",
    duration: "1:1 Coaching",
    featured: false,
    videoUrl: "/TESTMONIALS/T5.mp4",
  },
  {
    id: "t-text-1",
    clientLabel: "Client, 1:1 Coaching Journey",
    journeyType: "1:1 Personal Coaching",
    quote: "Before coaching, I was unhappy and unsatisfied with my life. I used to get angry easily and was going through many emotional ups and downs.\n\nAfter starting 1:1 sessions with Anshu, I began feeling calmer, more grounded, and confident. She helped me discover my abilities, rebuild my self-esteem, and gain genuine peace of mind.",
    duration: "1:1 Coaching",
    featured: true,
    beforeAfter: {
      before: "Emotionally exhausted, quick to anger, feeling unsatisfied and stuck in overthinking.",
      after: "Calm, grounded, self-aware, with rebuilt self-esteem and peace of mind.",
    },
  },
  {
    id: "t-text-2",
    clientLabel: "Client, 3-Month Coaching Journey",
    journeyType: "3-Month Transformation",
    quote: "Before working with Anshu Ma’am, my biggest struggle was understanding how to handle relationships and my own emotions.\n\nDuring the sessions, I realized that happiness begins with self-awareness. My mindset changed, and I started feeling more relaxed, satisfied, and emotionally connected with myself. This journey helped me reset, refresh, and restart my life.",
    duration: "3-Month Transformation",
    featured: true,
    beforeAfter: {
      before: "Unsure how to handle emotional friction, relationship patterns, and self-doubt.",
      after: "Relaxed, emotionally connected with self, clear communication, refreshed mindset.",
    },
  },
];
