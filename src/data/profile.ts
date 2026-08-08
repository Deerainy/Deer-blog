// ============================================
//  个人信息 — 修改这里更新 Profile Sidebar
// ============================================

export interface ProfileData {
  name: string
  displayName: string
  profession: string
  affiliation: string
  avatarText: string
  avatarImage?: string
  tags: string[]
  emails: string[]
  github: string
  linkedin: string
  googleScholar?: string
  location: string
  slogan: string
}

export const profile: ProfileData = {
  name: 'LU Yuxin',
  displayName: 'Yuxin Lu',
  profession: 'Software Engineer',
  affiliation: 'HKUST(GZ)',
  avatarText: '',
  avatarImage: '/avatar.jpg',
  tags: ['Software Engineer', 'AI / Agents', 'HCI', 'Graph Learning'],
  emails: [
    'yuxinlu0410@gmail.com',
    'ylu901@connect.hkust-gz.edu.cn',
  ],
  github: 'https://github.com/Deerainy',
  linkedin: '',
  location: 'Guangzhou, China',
  slogan: 'Marvels happen everyday.',
}

export const aboutParagraphs: string[] = [
  "Hi, I'm Yuxin LU! 👋 I'm an incoming MPhil student at HKUST(GZ) with a background in Software Engineering. I'm interested in AI and intelligent systems, especially in building things that connect research ideas with real-world applications.",
  "I enjoy learning through projects and turning ideas into working systems. My previous work has involved knowledge graphs, RAG, graph learning, and data analysis, and I'm currently exploring AI agents and new ways of building useful AI systems.",
]

export const currentStatus: string = 'Currently exploring: AI Agents & HCI'

// ============================================
//  Education — 结构化展示信息，仅 CV 页面使用
// ============================================
export interface EducationStats {
  period: string
  school: string
  degree: string
  tags: string[]
  scores: { label: string; value: string }[]
  rank: string
  languages: { label: string; score: string }[]
  mainCourses: string[]
}

export const education: EducationStats = {
  period: 'Sep 2022 – Jul 2026',
  school: 'Hunan Normal University',
  degree: 'B.Eng. in Software Engineering',
  tags: ['Project 211 University', 'Double First-class Discipline University (China)'],
  scores: [
    { label: 'Average Score', value: '90.24 / 100' },
    { label: 'GPA', value: '4.34 / 5.0' },
  ],
  rank: '3rd out of 80 students · Top 4%',
  languages: [
    { label: 'TOEFL iBT', score: '102' },
    { label: 'CET-4', score: '597' },
    { label: 'CET-6', score: '528' },
    { label: 'Japanese JLPT N2', score: '126' },
  ],
  mainCourses: [
    'Data Structure',
    'Software Project Management',
    'Computer Network',
    'Database System',
    'Software Engineering',
    'Design and Analysis of Algorithms',
  ],
}
