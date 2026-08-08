// ============================================
//  CV extras — Skills & Awards
//  修改这里更新技能和奖项
// ============================================

export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript / JavaScript', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'AI / ML',
    items: ['PyTorch', 'Knowledge Graph', 'RAG', 'LLM Fine-tuning', 'GNN', 'Sentiment Analysis'],
  },
  {
    category: 'Engineering',
    items: ['Vue.js', 'React', 'Spring Boot', 'Node.js', 'Nginx', 'Docker', 'Git'],
  },
]

export interface Award {
  year: string
  title: string
  org?: string
}

export const awards: Award[] = [
  {
    year: '2025',
    title: 'Second Prize, Central South Regional Contest of the 18th Chinese Collegiate Computing Competition (Team Leader)',
  },
  {
    year: '2025',
    title: 'First Prize, 9th University-Level E-Commerce Competition',
  },
  {
    year: '2024',
    title: 'Third Prize, Hunan Division of the 15th Lanqiao Cup National Software and Information Technology Competition (C/C++, University Group A)',
  },
  {
    year: '2024',
    title: 'Third Prize, Hunan Division of the 2024 China Undergraduate Mathematical Contest in Modeling (CUMCM)',
  },
  {
    year: '2024',
    title: 'First Prize, University-Level Selection of the 14th "CP Cup" National College Student Market Survey and Analysis Competition',
  },
  {
    year: '2024 – 2025',
    title: 'First-Class Comprehensive Scholarship (Top 4%)',
  },
  {
    year: '2023 – 2024',
    title: 'First-Class Comprehensive Scholarship (Top 4%)',
  },
  {
    year: '2022 – 2023',
    title: 'Second-Class Comprehensive Scholarship & Outstanding Student (Top 10%)',
  },
  {
    year: '2024 – 2025',
    title: 'Bank of Changsha Progress Scholarship (Top 3%)',
  },
]
