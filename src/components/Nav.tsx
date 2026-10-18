import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import type { DictKey } from '../i18n/i18n'
import { useScrollSpy } from '../lib/hooks'
import { SOCIAL } from '../data/resume'
import { LanguageSwitch, ThemeToggle } from './ui/Controls'

const SECTION_IDS = ['skills', 'experience', 'projects', 'contact']

const LINKS: { id: string; key: DictKey }[] = [
  { id: 'skills', key: 'nav_skills' },
  { id: 'experience', key: 'nav_experience' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'contact', key: 'nav_contact' },
]

function Monogram() {
  return (
    <a href="#top" className="brand" aria-label="Rubem Dias — home">
      <svg className="brand__mark" viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <rect x="4" y="18" width="4.5" height="9" rx="1.6" fill="currentColor" opacity="0.5" />
        <rect x="13.5" y="11" width="4.5" height="16" rx="1.6" fill="currentColor" opacity="0.78" />
        <rect x="23" y="5" width="4.5" height="22" rx="1.6" fill="currentColor" />
      </svg>
      <span className="brand__name">
        Rubem<span className="brand__dim"> Dias</span>
      </span>
    </a>
  )
}

export function Nav() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(SECTION_IDS)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner container container--wide">
          <Monogram />

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <LanguageSwitch />
            <ThemeToggle />
            <a className="btn btn--ghost btn--sm nav__cv" href={SOCIAL.cv} target="_blank" rel="noreferrer">
              {t('nav_resume')}
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
            <button
              type="button"
              className="iconbtn nav__burger"
              aria-label={open ? t('nav_close') : t('nav_menu')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
        <motion.div className="nav__progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobilemenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="mobilemenu__links" aria-label="Mobile">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="mobilemenu__link"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <span className="mobilemenu__index">0{i + 1}</span>
                  {t(link.key)}
                </motion.a>
              ))}
            </nav>
            <div className="mobilemenu__foot">
              <a className="btn btn--primary" href={SOCIAL.cv} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                {t('nav_resume')}
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
