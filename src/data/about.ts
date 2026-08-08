// ============================================
//  About page data — life, hobbies, aesthetics
// ============================================

export interface AboutHero {
  portrait: string
  greeting: string
  intro: string[]
}

export interface ArtWork {
  title: string
  level?: string
  image: string
  description: string
}

export interface LearningItem {
  title: string
  image: string
  status: string
  description: string
}

export const aboutHero: AboutHero = {
  portrait: '/travel.jpg',
  greeting: "Hi! I'm Deerainy.",
  intro: [
    "Here are some things I like, things I'm learning, and little pieces of my life. (:◎)≡",
  ],
}

export const artWorks: ArtWork[] = [
  {
    title: 'Brush Calligraphy',
    level: 'Level 10',
    image: '/calligraphy.jpg',
    description:
      "Started with pen calligraphy at level 9, then fell in love with brush. Calligraphy taught me patience — every stroke is a decision, and every decision is a practice.",
  },
  {
    title: 'Painting',
    image: '/painting.jpg',
    description:
      'Watercolor and ink illustrations. Occasionally make little merch — the Dungeon Deerainy plate above is one of my favorites.',
  },
  {
    title: 'Sketching',
    image: '/sketch.jpg',
    description:
      'Sketching helps me see the structure of things. I usually carry a small sketchbook when I travel.',
  },
]

export const learning: LearningItem[] = [
  {
    title: 'Bartending',
    image: '/cocktail.jpg',
    status: 'Learning',
    description:
      'Just started learning bartending at home. So far: classic cocktails, technique, and the art of balancing sweet / sour / strong.',
  },
  {
    title: 'Pour-over Coffee',
    image: '/coffee.jpg',
    status: 'Learning',
    description:
      "Exploring pour-over methods and single-origin beans. A good cup of coffee on a slow morning is one of life's great joys.",
  },
]

export const tom = {
  name: 'Tom',
  photo: '/tom.jpg',
  caption: 'Our little cat. Spends most of the day on the cat tree, judging the household.',
}

export interface InterestItem {
  emoji: string
  title: string
  text: string
}

export const interests: InterestItem[] = [
  {
    emoji: '🎬',
    title: 'Films',
    text: "I'm a genuine film lover. Some I love: 八仙, 给阿嬷的情书, La La Land, Howl's Moving Castle, Interstellar, Pride & Prejudice, The Grand Budapest Hotel, Spirited Away, Amélie, Inception, Before Sunrise, The Lord of the Rings, Call Me by Your Name.",
  },
  {
    emoji: '📺',
    title: 'TV Shows',
    text: 'Modern Family is my comfort show (watched it many times). The Big Bang Theory never gets old.',
  },
  {
    emoji: '🎌',
    title: 'Anime & Manga',
    text: 'Follow ongoing series, occasionally collect small merch.',
  },
  {
    emoji: '🎭',
    title: 'Musicals',
    text: "Big Hamilton fan. Musicals hold a special place in my heart.",
  },
  {
    emoji: '🚶',
    title: 'Travel & City Walk',
    text: 'Some of my best ideas come while walking in an unfamiliar neighborhood.',
  },
  {
    emoji: '🎮',
    title: 'Animal Crossing',
    text: 'Longtime player.',
  },
]
