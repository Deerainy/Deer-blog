import type { CSSProperties } from 'react'
import { Tag } from 'animal-island-ui'
import type { TagColor } from 'animal-island-ui'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { profile, aboutParagraphs, education } from '../data/profile'
import { experiences } from '../data/experience'
import { projects } from '../data/projects'
import { skillGroups, awards } from '../data/cv'
import styles from './CVPage.module.css'

const SKILL_TAG_COLORS: TagColor[] = ['app-teal', 'app-blue', 'app-yellow', 'app-green', 'app-pink', 'purple']
const COURSE_TAG_COLORS: TagColor[] = ['app-blue', 'app-teal', 'app-green', 'app-yellow', 'app-pink', 'purple']

const lookupPeriod = (projectTitle: string): string | undefined => {
  const t = projectTitle.toLowerCase()
  return experiences.find((e) => {
    if (e.type !== 'research') return false
    const et = e.title.toLowerCase()
    const shared = ['public opinion', 'huxiang', 'tumbleweed', 'cocktail']
    return shared.some((w) => et.includes(w) && t.includes(w))
  })?.period
}

function CVPage() {
  useScrollReveal()

  const internships = experiences.filter((e) => e.type === 'internship')

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* ---- Sidebar ---- */}
        <aside className={`reveal ${styles.sidebar}`}>
          {profile.avatarImage ? (
            <div className={styles.avatarImgWrap}>
              <img src={profile.avatarImage} alt={`${profile.displayName} avatar`} className={styles.avatarImg} />
            </div>
          ) : (
            <div className={styles.avatar} aria-hidden="true">
              {profile.avatarText}
            </div>
          )}
          <div className={styles.sidebarInfo}>
            <h1 className={styles.name}>{profile.displayName}</h1>
            <p className={styles.role}>{profile.affiliation}</p>
            <p className={styles.dept}>{profile.location}</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactEmails}>
              <img src="/nook-phone/Property-Chat.svg" alt="" className={styles.contactSvg} aria-hidden="true" />
              <div className={styles.emailList}>
                {profile.emails.map((email) => (
                  <a key={email} className={styles.contactEmailLink} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <a className={styles.contactItem} href={profile.github} target="_blank" rel="noreferrer">
              <img src="/nook-phone/nook1.svg" alt="" className={styles.contactSvg} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </aside>

        {/* ---- Content ---- */}
        <div className={styles.content}>
          <section className={`reveal ${styles.block}`}>
            <h2 className={styles.blockTitle}>About</h2>
            {aboutParagraphs.map((p, i) => (
              <p key={i} className={styles.aboutText}>{p}</p>
            ))}
          </section>

          {/* ============ Education — clean and compact ============ */}
          <section className={`reveal ${styles.block}`} style={{ '--reveal-delay': '0.05s' } as CSSProperties}>
            <h2 className={styles.blockTitle}>Education</h2>
            <div className={styles.edu}>
              <div className={styles.eduHead}>
                <div className={styles.eduHeadMain}>
                  <div className={styles.eduSchool}>{education.school}</div>
                  <div className={styles.eduDegree}>{education.degree}</div>
                </div>
                <div className={styles.eduPeriod}>{education.period}</div>
              </div>
              <div className={styles.eduTags}>
                {education.tags.map((t) => (
                  <Tag key={t} color="app-green" variant="soft" size="small">{t}</Tag>
                ))}
              </div>

              <dl className={styles.eduFacts}>
                <div className={styles.eduFact}>
                  <dt>Average Score</dt>
                  <dd>{education.scores[0]?.value}</dd>
                </div>
                <div className={styles.eduFact}>
                  <dt>GPA</dt>
                  <dd>{education.scores[1]?.value}</dd>
                </div>
                <div className={styles.eduFact}>
                  <dt>Rank</dt>
                  <dd>{education.rank}</dd>
                </div>
                <div className={styles.eduFact}>
                  <dt>Languages</dt>
                  <dd>
                    {education.languages.map((l) => `${l.label} ${l.score}`).join(' · ')}
                  </dd>
                </div>
              </dl>

              <div className={styles.eduCourses}>
                <span className={styles.eduCoursesLabel}>Main courses:</span>
                {education.mainCourses.map((c, i) => (
                  <Tag key={c} color={COURSE_TAG_COLORS[i % COURSE_TAG_COLORS.length]} variant="soft" size="small">
                    {c}
                  </Tag>
                ))}
              </div>
            </div>
          </section>

          {/* Internship */}
          <section className={`reveal ${styles.block}`} style={{ '--reveal-delay': '0.1s' } as CSSProperties}>
            <h2 className={styles.blockTitle}>Internship</h2>
            {internships.map((e, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryPeriod}>{e.period}</div>
                <div>
                  <div className={styles.entryTitle}>{e.title}</div>
                  <div className={styles.entryOrg}>{e.organization}</div>
                  <p className={styles.entryDesc}>{e.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Research / Projects */}
          <section className={`reveal ${styles.block}`} style={{ '--reveal-delay': '0.15s' } as CSSProperties}>
            <h2 className={styles.blockTitle}>Research / Projects</h2>
            {projects.map((p) => {
              const period = lookupPeriod(p.title)
              return (
                <div key={p.id} className={styles.projectEntry}>
                  <div className={styles.projectNum}>0{parseInt(p.id, 10)}</div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectHead}>
                      <div className={styles.projectTitles}>
                        <div className={styles.entryTitle}>
                          {p.title}
                          {p.program && (
                            <Tag
                              className={styles.projectProgramTag}
                              color={p.program.color}
                              variant="soft"
                              size="small"
                            >
                              {p.program.name}
                            </Tag>
                          )}
                        </div>
                        <div className={styles.projectMetaRow}>
                          <span className={styles.projectMeta}>
                            <strong>{p.role}</strong>
                          </span>
                          {period && <span className={styles.projectMetaSep}>·</span>}
                          {period && <span className={styles.projectMeta}>{period}</span>}
                        </div>
                      </div>
                      {p.github && (
                        <a
                          className={styles.projectLink}
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.title} on GitHub`}
                        >
                          <img src="/nook-phone/nook1.svg" alt="" className={styles.projectLinkSvg} aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                    <p className={styles.entryDesc}>{p.oneLiner}</p>
                    <div className={styles.projectTags}>
                      {p.tags.map((s, i) => (
                        <Tag key={s} color={SKILL_TAG_COLORS[i % SKILL_TAG_COLORS.length]} variant="soft" size="small">
                          {s}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </section>

          <section className={`reveal ${styles.block}`} style={{ '--reveal-delay': '0.2s' } as CSSProperties}>
            <h2 className={styles.blockTitle}>Skills</h2>
            {skillGroups.map((g) => (
              <div key={g.category} className={styles.skillGroup}>
                <div className={styles.skillCategory}>{g.category}</div>
                <div className={styles.skillTags}>
                  {g.items.map((s, i) => (
                    <Tag key={s} color={SKILL_TAG_COLORS[i % SKILL_TAG_COLORS.length]} variant="soft" size="small">
                      {s}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className={`reveal ${styles.block}`} style={{ '--reveal-delay': '0.25s' } as CSSProperties}>
            <h2 className={styles.blockTitle}>Awards & Honors</h2>
            <ul className={styles.awardsGrid}>
              {awards.map((a, i) => (
                <li key={i} className={styles.awardItem}>
                  <span className={styles.awardYear}>{a.year}</span>
                  <span className={styles.awardText}>{a.title}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CVPage
