import { useCallback, useEffect, useRef, useState } from 'react'
import type { SkillItem } from '../data/resume'
import type { Bilingual } from '../i18n/i18n'

/* ---------- Count-up animation (fires once, when `run` is true) ---------- */

export function useCountUp(target: number, run: boolean, duration = 1500): number {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!run || started.current) return
    started.current = true

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    let raf = 0
    const t0 = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      setValue(target * easeOutCubic(p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])

  return value
}

/* ---------- Theme (dark | light) ---------- */

export type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  )

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', next === 'light' ? '#fbfbfa' : '#08090b')
  }, [])

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* ignore */
      }
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', next === 'light' ? '#fbfbfa' : '#08090b')
      return next
    })
  }, [])

  return { theme, setTheme, toggle }
}

/* ---------- Scroll spy (active section id) ---------- */

export function useScrollSpy(ids: string[], topOffset = 96): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ratios = new Map<string, number>()
    const observers: IntersectionObserver[] = []

    const recompute = () => {
      let best = ''
      let bestRatio = 0
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          best = id
        }
      })
      if (best) setActive(best)
    }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
          }
          recompute()
        },
        { rootMargin: `-${topOffset}px 0px -55% 0px`, threshold: [0, 0.2, 0.5, 0.8, 1] },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids, topOffset])

  return active
}

/* ---------- Media query ---------- */

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

/* ---------- Helpers ---------- */

export function skillText(item: SkillItem, tr: (value: Bilingual) => string): string {
  return typeof item === 'string' ? item : tr(item)
}

/* Years of experience — auto-increments each year on the start-date anniversary. */
const CAREER_START = new Date(2020, 9, 18) // 18 Oct 2020

export function yearsOfExperience(ref: Date = new Date()): number {
  let years = ref.getFullYear() - CAREER_START.getFullYear()
  const anniversary = new Date(ref.getFullYear(), CAREER_START.getMonth(), CAREER_START.getDate())
  if (ref < anniversary) years -= 1
  return years
}

export function formatCount(value: number, compact = false): string {
  if (compact) {
    return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
      .format(Math.round(value))
      .replace(/\.0([A-Z])/, '$1')
  }
  return Math.round(value).toLocaleString('en-US')
}
