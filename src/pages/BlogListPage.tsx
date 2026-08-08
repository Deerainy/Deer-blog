import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'animal-island-ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  sortedPosts,
  formatDate,
  CATEGORY_COLORS,
} from '../data/blog'
import type { BlogCategory } from '../data/blog'
import { getAssetUrl } from '../utils'
import styles from './BlogListPage.module.css'

const CATEGORIES: (BlogCategory | 'All')[] = ['All', 'Research', 'Build', 'Life', 'Travel']

function BlogListPage() {
  useScrollReveal()
  const [filter, setFilter] = useState<BlogCategory | 'All'>('All')

  const visible = useMemo(
    () => (filter === 'All' ? sortedPosts : sortedPosts.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div className={styles.page}>
      <header className={`reveal ${styles.head}`}>
        <span className="section__eyebrow">
          <img src={getAssetUrl('/nook-phone/Property-Chat.svg')} alt="" className="section__eyebrow__svg" aria-hidden="true" /> notes
        </span>
        <h1 className={styles.title}>From my little corner</h1>
        <p className={styles.lede}>
          A growing collection of research thoughts, build logs, life notes, and
          travel journals. I write when something wants to be written.
        </p>

        <div className={styles.filters} role="tablist" aria-label="Filter posts by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`${styles.chip} ${filter === c ? styles.chipActive : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.list}>
        {visible.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className={`reveal ${styles.row}`}
            style={{ '--reveal-delay': `${i * 0.05}s` } as CSSProperties}
          >
            <div className={styles.rowCover} style={{ background: post.cover }} aria-hidden="true">
              <span className={styles.rowMark}>✶</span>
            </div>
            <div className={styles.rowBody}>
              <div className={styles.rowMeta}>
                <Tag color={CATEGORY_COLORS[post.category]} variant="soft" size="small">
                  {post.category}
                </Tag>
                <span className={styles.rowDate}>
                  {formatDate(post.date)} · {post.readingTime}
                </span>
              </div>
              <h2 className={styles.rowTitle}>{post.title}</h2>
              <p className={styles.rowExcerpt}>{post.excerpt}</p>
              <span className={styles.rowRead}>Read →</span>
            </div>
          </Link>
        ))}

        {visible.length === 0 && (
          <div className={`reveal ${styles.empty}`}>
            <img src={getAssetUrl('/nook-phone/Property-Helicopter.svg')} alt="" className={styles.emptyEmoji} aria-hidden="true" />
            <p className={styles.emptyTitle}>Notes coming soon</p>
            <p className={styles.emptyText}>
              I&rsquo;m still setting up this little corner. Research thoughts, build logs,
              and travel journals will live here — check back before long.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogListPage
