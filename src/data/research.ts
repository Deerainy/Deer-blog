// ============================================
//  Research Interests — 修改这里更新研究方向
// ============================================

import type { CardColor } from 'animal-island-ui'

export interface ResearchInterest {
  title: string
  description: string
  emoji: string
  color: CardColor
}

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Intelligent Agents',
    description:
      'Designing agents that plan, act, and collaborate in open-ended environments — with a focus on reliability and structured tool use.',
    emoji: '🤖',
    color: 'app-teal',
  },
  {
    title: 'Human-AI Interaction',
    description:
      'Understanding how people interact with AI systems and building interfaces that make AI assistance feel natural and trustworthy.',
    emoji: '🤝',
    color: 'app-orange',
  },
  {
    title: 'Graph & Structured Reasoning',
    description:
      'Reasoning over graphs and structured data — combining GNNs, knowledge graphs, and LLMs for richer, more grounded intelligence.',
    emoji: '🕸️',
    color: 'purple',
  },
]

export const currentQuestion: string =
  'How can AI agents understand structured collaborative decision-making and intervene at the right time?'
