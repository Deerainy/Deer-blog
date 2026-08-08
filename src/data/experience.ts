// ============================================
//  Experience — 修改这里更新 Experience 时间线
// ============================================

export type ExperienceType = 'education' | 'internship' | 'research'

export interface ExperienceItem {
  type: ExperienceType
  period: string
  title: string
  organization: string
  description: string
}

export const experiences: ExperienceItem[] = [
  {
    type: 'education',
    period: 'Sep 2022 – Jul 2026',
    title: 'B.Eng. in Software Engineering',
    organization: 'Hunan Normal University (Project 211 & Double First-class)',
    description:
      'Average Score: 90.24/100 (4.34/5.0). Academic Rank: 3rd out of 80 students (Top 4%).\nLanguage: TOEFL 102, CET-4 597, CET-6 528, Japanese JLpt-N2 126.\nMain courses: Data Structure, Software Project Management, Computer Network, Database System, Software Engineering, Design and Analysis of Algorithm.',
  },
  {
    type: 'internship',
    period: 'Jul 2025 – Oct 2025',
    title: 'Full-Stack Web Development & Cloud Deployment Intern',
    organization: 'Maicheng International Trade Co., Ltd. · Suzhou',
    description:
      'Developed internal and client-facing web management systems using Vue.js and Element Plus, implementing reusable components, data tables, forms, modal editing, and CRUD workflows through integration with Spring Boot RESTful APIs.\nParticipated in production deployment, including domain and DNS configuration, Nginx reverse proxy setup, cloud storage, and DNS/CDN integration to improve resource delivery and system availability.',
  },
  {
    type: 'research',
    period: 'Mar 2024 – May 2025',
    title: 'International Public Opinion Analysis System',
    organization: 'Provincial College Student Innovation & Entrepreneurship Training Program',
    description:
      'Analyzed discourse and behavioral patterns of influential figures in international political, economic, and cultural contexts; applied multi-dimensional sentiment and trend analysis to identify attitudes toward China and detect emerging public opinion risks. Developed user clustering, influential-figure profiling, and relationship graph modeling methods.',
  },
  {
    type: 'research',
    period: 'Oct 2024 – May 2026',
    title: 'Digital-Intelligent Dissemination System of Huxiang Culture',
    organization: 'Hunan Provincial Key Laboratory of Philosophy and Social Sciences on AI & Precision International Communication',
    description:
      'Team Leader. Built a semantic knowledge graph for Huxiang cultural resources, integrated semantic search, knowledge-grounded Q&A, and personalized recommendation. Led end-to-end project planning: system architecture, database design, sentiment analysis, LLM fine-tuning, and knowledge-grounded QA.',
  },
  {
    type: 'research',
    period: 'Jun 2024 – Sep 2024',
    title: 'Tumbleweed Travel: Cross-regional Residence Community Analysis',
    organization: 'Comprehensive Course Research Project',
    description:
      'Team Leader. Led the development of a web-based accommodation recommendation prototype, completing database design, front-end and back-end development, map API integration, and basic recommendation functions.',
  },
  {
    type: 'research',
    period: 'Jan 2026 – May 2026',
    title: 'Graph Structure Optimization-Based Cocktail Flavor Combination Generation',
    organization: 'Outstanding Undergraduate Thesis',
    description:
      'Designed and implemented the end-to-end system: graph data modeling, recipe generation, relationship visualization, and ingredient-question answering. Built a cocktail flavor graph to model ingredient flavors, functional roles, and recipe co-occurrence; developed graph-based methods for recipe evaluation and ingredient substitution.',
  },
]
