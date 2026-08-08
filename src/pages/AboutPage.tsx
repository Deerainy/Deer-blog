import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  aboutHero,
  artWorks,
  learning,
  tom,
  interests,
} from '../data/about'
import { getAssetUrl } from '../utils'
import styles from './AboutPage.module.css'

function AboutPage() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* --- Hero / Portrait --- */}
        <section className={`reveal ${styles.hero}`}>
          <div className={styles.heroText}>
            <span className={styles.sectionLabel}>About me</span>
            <h1 className={styles.heroTitle}>{aboutHero.greeting}</h1>
            {aboutHero.intro.map((p, i) => (
              <p key={i} className={styles.heroPara}>{p}</p>
            ))}
          </div>
          <div className={styles.heroPortrait}>
            <img src={getAssetUrl(aboutHero.portrait)} alt="Portrait" className={styles.portraitImg} />
          </div>
        </section>

        {/* --- Things I make --- */}
        <section className={styles.section}>
          <div className={`reveal ${styles.sectionLabel}`}>Things I make</div>
          <div className={styles.artGrid}>
            {artWorks.map((a, i) => (
              <article
                key={a.title}
                className={`reveal ${styles.artCard} ${i === 0 ? styles.artCardWide : ''}`}
                style={{ '--reveal-delay': `${i * 0.06}s` } as React.CSSProperties}
              >
                <img src={getAssetUrl(a.image)} alt={a.title} className={styles.artImg} />
                <div className={styles.artCaption}>
                  <h3 className={styles.artTitle}>
                    {a.title}
                    {a.level && <span className={styles.artLevel}>· {a.level}</span>}
                  </h3>
                  <p className={styles.artDesc}>{a.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Things I'm learning --- */}
        <section className={styles.section}>
          <div className={`reveal ${styles.sectionLabel}`}>Things I'm learning</div>
          <div className={styles.learnGrid}>
            {learning.map((l, i) => (
              <article
                key={l.title}
                className={`reveal ${styles.learnCard}`}
                style={{ '--reveal-delay': `${i * 0.08}s` } as React.CSSProperties}
              >
                <img src={getAssetUrl(l.image)} alt={l.title} className={styles.learnImg} />
                <div className={styles.learnBody}>
                  <span className={styles.learnStatus}>{l.status}</span>
                  <h3 className={styles.learnTitle}>{l.title}</h3>
                  <p className={styles.learnDesc}>{l.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Tom --- */}
        <section className={styles.section}>
          <div className={`reveal ${styles.tomBlock}`}>
            <div className={styles.tomText}>
              <span className={styles.sectionLabel}>A small cat named</span>
              <h2 className={styles.tomName}>{tom.name}</h2>
              <p className={styles.tomCaption}>{tom.caption}</p>
            </div>
            <div className={styles.tomPhotoWrap}>
              <img src={getAssetUrl(tom.photo)} alt={tom.name} className={styles.tomPhoto} />
            </div>
          </div>
        </section>

        {/* --- Things I love --- */}
        <section className={styles.section}>
          <div className={`reveal ${styles.sectionLabel}`}>Things I love</div>
          <div className={styles.interestList}>
            {interests.map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${styles.interestRow}`}
                style={{ '--reveal-delay': `${i * 0.05}s` } as React.CSSProperties}
              >
                <span className={styles.interestEmoji}>{item.emoji}</span>
                <div className={styles.interestContent}>
                  <span className={styles.interestTitle}>{item.title}</span>
                  <span className={styles.interestText}>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          <p className={`reveal ${styles.closing}`}>
            Still making things, still exploring. Marvels happen everyday. 🌱
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
