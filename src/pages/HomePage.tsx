import { Link, useNavigate } from 'react-router-dom'
import { Button, Footer, Title } from 'animal-island-ui'
import styles from './HomePage.module.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className={styles.home}>
      <main className={styles.stage}>
        <div className={styles.textCol}>
          <Title color="app-green" size="small" className={`${styles.badge} ${styles.in}`}>
            welcome to my little island
          </Title>

          <h1 className={`${styles.greeting} ${styles.in}`} style={{ animationDelay: '0.1s' }}>
            Hi, I&rsquo;m Deerainy! <span className={styles.sprout}>🙌</span>
          </h1>

          <p className={`${styles.tagline} ${styles.in}`} style={{ animationDelay: '0.2s' }}>
            Marvels happen everyday.
          </p>

          <div className={`${styles.ctaRow} ${styles.in}`} style={{ animationDelay: '0.3s' }}>
            <Button type="primary" size="large" onClick={() => navigate('/about')}>
              About me
            </Button>
            <Button size="large" onClick={() => navigate('/projects')}>
              Explore my work →
            </Button>
          </div>

          <nav className={`${styles.entries} ${styles.in}`} aria-label="Island entries">
            <Link className={styles.entry} to="/cv">CV</Link>
            <Link className={styles.entry} to="/projects">Projects</Link>
            <Link className={styles.entry} to="/blog">Blog</Link>
          </nav>
        </div>

        {/* 豆狸 (Tanuki twins) — the mascot of animal island, from the repo */}
        <div className={`${styles.iconCol} ${styles.in}`} style={{ animationDelay: '0.15s' }}>
          <img src="/animal_icon.png" alt="Animal island mascots" className={styles.heroIcon} />
        </div>
      </main>

      <div className={styles.footerArt}>
        <Footer type="tree" seamless />
      </div>
    </div>
  )
}

export default HomePage
