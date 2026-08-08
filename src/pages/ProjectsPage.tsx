import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Card, Tag } from 'animal-island-ui'
import type { TagColor } from 'animal-island-ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import styles from './ProjectsPage.module.css'

const TAG_COLORS: TagColor[] = ['app-teal', 'app-blue', 'app-yellow', 'app-pink', 'app-green', 'purple']

function ProjectsPage() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <header className={`reveal ${styles.head}`}>
        <span className="section__eyebrow">
          <img src="/nook-phone/Property-Recipes.svg" alt="" className="section__eyebrow__svg" aria-hidden="true" /> things i&rsquo;ve built
        </span>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.lede}>
          Systems that turn research ideas into something usable — from knowledge
          graphs and RAG to flavor-graph reasoning and adaptive learning.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((p, i) => {
          const link = p.github ?? p.demo ?? p.details
          const num = parseInt(p.id, 10)
          return (
            <Card
              key={p.id}
              color={p.color}
              pattern={p.color}
              className={`reveal ${styles.card}`}
              style={{ '--reveal-delay': `${i * 0.06}s` } as CSSProperties}
            >
              <div className={styles.cardHead}>
                <span className={styles.num}>
                  {Number.isNaN(num) ? p.id : `0${num}`} / 0{projects.length}
                </span>
                <span className={styles.role}>{p.role}</span>
              </div>

              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.oneLiner}</p>

              <div className={styles.tags}>
                {p.tags.map((t, ti) => (
                  <Tag key={t} color={TAG_COLORS[ti % TAG_COLORS.length]} variant="soft" size="small">
                    {t}
                  </Tag>
                ))}
              </div>

              {link && (
                <a
                  className={styles.viewLink}
                  href={link}
                  target={p.github ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  View project
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsPage
