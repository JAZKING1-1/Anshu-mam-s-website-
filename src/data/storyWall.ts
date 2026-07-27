export interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: 'Inner Courage' | 'Relationship Clarity' | 'Mindset Shifts' | 'Self-Worth';
  excerpt: string;
  fullStory: string;
  quote: string;
  authorLabel: string;
  bgGradient: string;
  tagBadgeColor: string;
  iconSymbol: string;
}

export const STORY_WALL_DATA: StoryItem[] = [
  {
    id: 'story-1',
    title: 'The Day I Unlocked My Golden Cage',
    subtitle: 'Choosing Peace Over Constant Approval',
    tag: 'Inner Courage',
    excerpt: 'From the outside, my life looked complete. I was caring for everyone else, fulfilling every role. But inside, I was emotionally exhausted and silent...',
    fullStory: 'For years, I believed that being strong meant carrying everyone else’s emotional weight while ignoring my own voice. The turning point came when I realized: a cage is still a cage, even when made of gold. Unlocking that door meant learning to say "no" without guilt, honoring my boundaries, and stepping into my true identity with calm courage.',
    quote: '“A cage is still a cage, even when it is made of gold.”',
    authorLabel: 'Anshu’s Journey',
    bgGradient: 'from-[#FFF9F4] via-[#EFCBD5]/30 to-[#FFF9F4]',
    tagBadgeColor: 'bg-[#EFCBD5] text-[#9C536D]',
    iconSymbol: '🗝️',
  },
  {
    id: 'story-2',
    title: 'Setting Boundaries Without Guilt',
    subtitle: 'From People-Pleasing to Authentic Self-Respect',
    tag: 'Self-Worth',
    excerpt: 'I used to say "yes" to every request out of fear that people would think I was selfish or unloving. I was constantly drained...',
    fullStory: 'In 1:1 coaching, I learned that a boundary is not an act of rejection—it is an act of self-respect. When I started communicating what I truly needed with calm clarity, my relationships didn’t break; they became healthier, more honest, and far more fulfilling.',
    quote: '“Boundaries are the distance at which I can love you and me simultaneously.”',
    authorLabel: 'Client Story Beat',
    bgGradient: 'from-[#FFF9F4] via-[#D9E2C8]/30 to-[#FFF9F4]',
    tagBadgeColor: 'bg-[#D9E2C8] text-[#3F5648]',
    iconSymbol: '🌿',
  },
  {
    id: 'story-3',
    title: 'Breaking the Cycle of Overthinking',
    subtitle: 'Quieting the Loud Inner Critic',
    tag: 'Mindset Shifts',
    excerpt: 'Every conversation would replay in my mind for hours. I doubted every decision I made until I had zero trust in myself...',
    fullStory: 'Using Neuro-Linguistic Programming (NLP) reframing techniques, Anshu guided me to recognize that my overthinking was just a protective habit born of old fear. Reframing those thought loops allowed me to pause, breathe, and trust my intuition again.',
    quote: '“Your mind is a sacred garden. Stop allowing weeds of self-doubt to bloom.”',
    authorLabel: 'Mindset Transformation',
    bgGradient: 'from-[#FFF9F4] via-[#EFCBD5]/35 to-[#D9E2C8]/20',
    tagBadgeColor: 'bg-[#EFCBD5] text-[#9C536D]',
    iconSymbol: '✨',
  },
  {
    id: 'story-4',
    title: 'Reconnecting with Relationship Clarity',
    subtitle: 'Shifting from Emotional Reaction to Calm Communication',
    tag: 'Relationship Clarity',
    excerpt: 'Arguments with my partner used to leave me feeling unheard and misunderstood for days. I didn’t know how to bridge the emotional distance...',
    fullStory: 'Relationship coaching helped me understand our recurring emotional dynamics. Instead of reacting out of hurt, I learned to express my feelings with vulnerability, dignity, and calm self-awareness. It completely transformed how we listen to each other.',
    quote: '“Clarity in communication begins with emotional connection to yourself.”',
    authorLabel: 'Client Relationship Beat',
    bgGradient: 'from-[#FFF9F4] via-[#D9E2C8]/35 to-[#EFCBD5]/20',
    tagBadgeColor: 'bg-[#D9E2C8] text-[#3F5648]',
    iconSymbol: '🕊️',
  },
  {
    id: 'story-5',
    title: 'The Courage to Come Back to Yourself',
    subtitle: 'Rebuilding Unshakeable Self-Confidence',
    tag: 'Inner Courage',
    excerpt: 'I had forgotten who I was before responsibilities, fear, and expectations took over. I felt lost in my own life...',
    fullStory: 'The 3-Month Transformation journey was a complete reset. It gave me a safe, compassionate space to unpack old emotional patterns, discover my authentic desires, and step forward with quiet, unwavering confidence.',
    quote: '“Reclaiming yourself is the most courageous journey you will ever take.”',
    authorLabel: '3-Month Reset Reflection',
    bgGradient: 'from-[#FFF9F4] via-[#EFCBD5]/40 to-[#FFF9F4]',
    tagBadgeColor: 'bg-[#EFCBD5] text-[#9C536D]',
    iconSymbol: '🌸',
  },
];
