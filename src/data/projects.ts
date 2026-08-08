// ============================================
//  Projects — 修改这里更新项目卡片
// ============================================

import type { CardColor, TagColor } from 'animal-island-ui'

export interface Project {
  id: string
  title: string
  oneLiner: string
  role: string
  tags: string[]
  color: CardColor
  github?: string
  demo?: string
  details?: string
  imagePlaceholder?: string
  /** 项目所属的课题/基金/计划标签（CV 里显示在项目名旁边） */
  program?: {
    name: string
    color: TagColor
  }
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Digital-Intelligent Dissemination System of Huxiang Culture',
    oneLiner:
      'A semantic knowledge graph + RAG system for Huxiang cultural resources: integrated semantic search, knowledge-grounded Q&A, and personalized recommendation.',
    role: 'Team Leader / Lead Developer',
    tags: ['Knowledge Graph', 'RAG', 'LLM Fine-tuning', 'Cultural AI'],
    color: 'app-green',
    github: 'https://github.com/Deerainy/HX_cultural_transmission_sys',
    program: {
      name: 'Hunan Provincial Key Lab · Student Research Innovation Project',
      color: 'app-green',
    },
  },
  {
    id: '02',
    title: 'International Public Opinion Analysis & Early Warning System',
    oneLiner:
      'Multi-dimensional sentiment + trend analysis on international political, economic, and cultural contexts; user clustering, influential-figure profiling, and relationship graph modeling.',
    role: 'Core Developer',
    tags: ['NLP', 'Sentiment Analysis', 'Knowledge Graph', 'Early Warning'],
    color: 'app-blue',
    program: {
      name: 'Provincial College Student Innovation & Entrepreneurship Training Program',
      color: 'app-blue',
    },
  },
  {
    id: '03',
    title: 'Tumbleweed Travel: Cross-regional Residence Community Analysis',
    oneLiner:
      'Web-based accommodation recommendation prototype with database design, full-stack development, and map API integration for cross-regional traveler communities.',
    role: 'Team Leader / Full-stack Developer',
    tags: ['Full-stack', 'Map API', 'Recommendation', 'Vue.js'],
    color: 'app-yellow',
    program: {
      name: 'Comprehensive Course Research Project',
      color: 'app-yellow',
    },
  },
  {
    id: '04',
    title: 'Graph Structure Optimization-Based Cocktail Flavor Combination Generation',
    oneLiner:
      'Graph-based system modeling ingredient flavors, functional roles, and recipe co-occurrence; generates and evaluates novel cocktail combinations via GNN over a flavor graph.',
    role: 'Researcher / Developer',
    tags: ['Flavor Graph', 'GNN', 'Graph Reasoning', 'Recipe Generation'],
    color: 'app-pink',
    github: 'https://github.com/Deerainy/cocktail_gnn',
    program: {
      name: 'Outstanding Undergraduate Thesis (Independent Project)',
      color: 'app-pink',
    },
  },
]
