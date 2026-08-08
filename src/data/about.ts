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
    image: '/calligraphy.jpg',
    description:
      'I love brush calligraphy — every stroke is a decision, and every decision is a practice.',
  },
  {
    title: 'Painting',
    image: '/painting.jpg',
    description:
      'I love original paintings and black-and-white line art comics — there is something so honest about a clean line.',
  },
  {
    title: 'Sketching',
    image: '/sketch.jpg',
    description:
      "I love the feeling of clean lines and structural form — there's a quiet satisfaction in how a few strokes can bring something to life.",
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
  caption: 'Our little mischief. A bit of a troublemaker who loves sleeping in bed all day long.',
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
    text: "I'm a genuine film lover. Some I love: 八仙, 给阿嬷的情书, La La Land, Howl's Moving Castle, Minions, Forever Young (无问西东).",
  },
  {
    emoji: '📺',
    title: 'TV Shows',
    text: 'Modern Family is my comfort show (watched it many times). The Big Bang Theory never gets old.',
  },
  {
    emoji: '🎌',
    title: 'Anime & Manga',
    text: "I've loved Japanese anime and manga since I was little — especially drawn to strong storytelling and surreal stream-of-consciousness narratives.",
  },
  {
    emoji: '🎭',
    title: 'Musicals',
    text: "Big Hamilton fan. Musicals hold a special place in my heart.",
  },
  {
    emoji: '🚶',
    title: 'Travel & City Walk',
    text: "I love hiking and long walks through everyday local streets — there's nothing like feeling the rhythm of a place with my own feet.",
  },
  {
    emoji: '🎮',
    title: 'Animal Crossing',
    text: 'Longtime player.',
  },
]
