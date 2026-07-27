export interface TopicCategory {
  category: string;
  description: string;
  topics: string[];
}

export const TOPICS_DATA: TopicCategory[] = [
  {
    category: "Self & Self-Worth",
    description: "Rebuilding your relationship with yourself, honoring your needs, and establishing healthy boundaries.",
    topics: [
      "Self-confidence and self-worth",
      "People-pleasing and setting boundaries",
      "Reconnecting with your identity",
      "Overcoming self-doubt and guilt",
    ],
  },
  {
    category: "Relationships With Others",
    description: "Navigating marital, family, and social dynamics with clarity, dignity, and calm communication.",
    topics: [
      "Relationship and marriage challenges",
      "Communication and conflict resolution",
      "Breaking repetitive relationship patterns",
      "Expressing what you truly need without fear",
    ],
  },
  {
    category: "Mindset & Emotional Growth",
    description: "Reframing unhelpful internal narratives and building lasting emotional resilience.",
    topics: [
      "Overthinking and emotional overwhelm",
      "Positive mindset reframing through NLP",
      "Emotional resilience & stress management",
      "Healing from past emotional experiences",
    ],
  },
  {
    category: "Purpose & Direction",
    description: "Gaining clear perspective on your choices, decisions, and future path.",
    topics: [
      "Decision-making and self-trust",
      "Work-life balance & burnout relief",
      "Life direction and personal purpose",
      "Stepping into calm, authentic leadership",
    ],
  },
];
