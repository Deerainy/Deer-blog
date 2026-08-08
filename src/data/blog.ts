// ============================================
//  Blog / Notes — content lives here, not in components.
//
//  `content` is a list of structured blocks so the UI can render rich
//  posts without a markdown parser today. When you outgrow this, swap
//  the renderer in BlogPostPage for an MDX/markdown loader — the data
//  shape is the only contract.
//
//  To add a post: append an object to `posts` below.
//  ============================================

import type { TagColor } from 'animal-island-ui'

export type BlogCategory = 'Research' | 'Build' | 'Life' | 'Travel'

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'code'; lang?: string; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string // ISO-ish, used for sorting & display
  category: BlogCategory
  readingTime: string
  cover: string // gradient hint, replaced by a real image later
  content: ContentBlock[]
}

export const CATEGORY_COLORS: Record<BlogCategory, TagColor> = {
  Research: 'app-teal',
  Build: 'app-green',
  Life: 'app-pink',
  Travel: 'app-yellow',
}

export const CATEGORIES: BlogCategory[] = ['Research', 'Build', 'Life', 'Travel']

// Posts are intentionally empty for now — the structure is ready for
// future Markdown / MDX content. Add real posts here when ready.
export const posts: BlogPost[] = []

/** Posts sorted newest-first. */
export const sortedPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
)

/** The N most recent posts, for the homepage. */
export function recentPosts(n = 3): BlogPost[] {
  return sortedPosts.slice(0, n)
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
