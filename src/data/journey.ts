// ============================================
//  My Journey — a path walked so far.
//  Edit/extend here to update the journey timeline.
// ============================================

export type JourneyKind = 'education' | 'internship' | 'research' | 'milestone'

export interface JourneyStep {
  year: string
  title: string
  place: string
  note: string
  kind: JourneyKind
}

export const journey: JourneyStep[] = [
  {
    year: '2022',
    title: 'Started B.Eng. in Software Engineering',
    place: 'Hunan Normal University',
    note: 'Began undergraduate study — algorithms, systems, databases, and the first sparks of AI.',
    kind: 'education',
  },
  {
    year: '2024 – 2025',
    title: 'Student Researcher',
    place: 'Hunan Normal University',
    note: 'Dived into Knowledge Graphs, RAG, LLM fine-tuning, GNN-based flavor reasoning, and adaptive learning systems.',
    kind: 'research',
  },
  {
    year: '2025',
    title: 'Full-stack / IT Intern',
    place: 'Industry',
    note: 'Shipped real product features and internal tooling with cross-functional teams.',
    kind: 'internship',
  },
  {
    year: '2026',
    title: 'Graduated',
    place: 'B.Eng. in Software Engineering',
    note: 'Wrapped up four years of building, learning, and growing.',
    kind: 'milestone',
  },
  {
    year: '2026',
    title: 'Starting my MPhil',
    place: 'HKUST (Guangzhou)',
    note: 'Exploring AI Agents, Human-AI Interaction, and Graph & Structured Reasoning.',
    kind: 'education',
  },
]
