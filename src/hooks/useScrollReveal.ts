import { useEffect } from 'react'

/**
 * Reveals elements carrying the `.reveal` class as they scroll into view.
 * Add `style={{ '--reveal-delay': '0.1s' }}` to stagger children.
 * Respects users without IntersectionObserver and prefers-reduced-motion
 * (the CSS short-circuits animations in that case).
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const collect = () => Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    const revealAll = () => collect().forEach((el) => el.classList.add('is-visible'))

    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    // Observe after paint so newly-mounted route content is present.
    const raf = requestAnimationFrame(() => {
      collect().forEach((el) => io.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])
}
