// ============================================
//  News / Updates — 修改这里更新 News 板块
// ============================================

export interface NewsItem {
  date: string
  content: string
  highlight?: boolean
}

export const newsList: NewsItem[] = [
  {
    date: 'Aug 2026',
    content: 'Starting my MPhil journey at HKUST(GZ).',
    highlight: true,
  },
  {
    date: 'Jun 2026',
    content: 'Graduated with a B.Eng. in Software Engineering.',
  },
  {
    date: '2025',
    content: 'Completed a full-stack / IT internship, working on real-world product features.',
  },
  {
    date: '2024 – 2025',
    content: 'Led and contributed to research projects on Knowledge Graphs, RAG, and Adaptive Learning.',
  },
]
