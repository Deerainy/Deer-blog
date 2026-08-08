import { Link, useParams } from 'react-router-dom'
import { Tag } from 'animal-island-ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getPost, sortedPosts, formatDate, CATEGORY_COLORS } from '../data/blog'
import type { ContentBlock } from '../data/blog'
import styles from './BlogPostPage.module.css'

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className={styles.h2}>{block.text}</h2>
    case 'p':
      return <p key={i} className={styles.p}>{block.text}</p>
    case 'quote':
      return (
        <blockquote key={i} className={styles.quote}>
          {block.text}
        </blockquote>
      )
    case 'ul':
      return (
        <ul key={i} className={styles.ul}>
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre key={i} className={styles.code}>
          <code>{block.text}</code>
        </pre>
      )
    default:
      return null
  }
}

function BlogPostPage() {
  useScrollReveal()
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <div className={styles.page}>
        <div className={styles.missing}>
          <span className={styles.missingEmoji} aria-hidden="true">🌱</span>
          <h1 className={styles.missingTitle}>This note wandered off</h1>
          <p className={styles.missingText}>
            I couldn&rsquo;t find the note you&rsquo;re looking for. It may have moved
            or not been written yet.
          </p>
          <Link to="/blog" className={styles.back}>
            ← Back to all notes
          </Link>
        </div>
      </div>
    )
  }

  const idx = sortedPosts.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? sortedPosts[idx - 1] : undefined
  const next = idx < sortedPosts.length - 1 ? sortedPosts[idx + 1] : undefined

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <Link to="/blog" className={styles.back}>
          ← All notes
        </Link>

        <header className={`reveal ${styles.head}`}>
          <div className={styles.meta}>
            <Tag color={CATEGORY_COLORS[post.category]} variant="solid" size="small">
              {post.category}
            </Tag>
            <span className={styles.date}>
              {formatDate(post.date)} · {post.readingTime}
            </span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.cover} style={{ background: post.cover }} aria-hidden="true" />
        </header>

        <div className={styles.content}>
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        <nav className={styles.footNav} aria-label="More notes">
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className={styles.footLink}>
              <span className={styles.footLabel}>← Previous</span>
              <span className={styles.footTitle}>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/blog/${next.slug}`} className={`${styles.footLink} ${styles.footRight}`}>
              <span className={styles.footLabel}>Next →</span>
              <span className={styles.footTitle}>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  )
}

export default BlogPostPage
