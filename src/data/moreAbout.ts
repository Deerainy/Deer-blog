// ============================================
//  More About Me — 修改这里更新兴趣板块
// ============================================

import type { CardColor } from 'animal-island-ui'

export interface Interest {
  emoji: string
  title: string
  description: string
  color: CardColor
}

export const interests: Interest[] = [
  {
    emoji: '🐈',
    title: 'Cats',
    description: 'Devoted cat admirer. Future cat parent in training.',
    color: 'app-pink',
  },
  {
    emoji: '📚',
    title: 'Books & Stories',
    description: 'Sci-fi, fantasy, and anything with a good narrative.',
    color: 'app-yellow',
  },
  {
    emoji: '🎬',
    title: 'Movies',
    description: 'From studio Ghibli to slow cinema — always looking for recommendations.',
    color: 'app-blue',
  },
  {
    emoji: '🎮',
    title: 'Games & Anime',
    description: 'Animal Crossing island life, JRPGs, and the occasional visual novel.',
    color: 'app-green',
  },
  {
    emoji: '✈️',
    title: 'Travel',
    description: 'Collecting places, foods, and small moments along the way.',
    color: 'app-teal',
  },
]
