import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import { SOCIAL } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

const EASE = [0.22, 0.61, 0.36, 1] as const

/* Subtle "metrics line" drawn behind the hero — a chart as ambient texture. */
function HeroMotif() {
  const reduce = useReducedMotion()
  const line =
    'M0 232 L90 224 L180 236 L270 205 L360 212 L450 170 L540 182 L630 150 L720 158 L810 118 L900 128 L990 86 L1080 96 L1170 54 L1200 60'
  const area = `${line} L1200 300 L0 300 Z`
  return (
    <svg className="hero__motif" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#heroArea)"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: EASE, delay: 0.1 }}
      />
    </svg>
  )
}

function ProfileCard() {
  const { tr } = useI18n()
  const focus = tr({ en: 'performance & scale', pt: 'performance e escala' })
  const based = tr({ en: 'Belo Horizonte, BR', pt: 'Belo Horizonte, BR' })

  return (
    <div className="codecard panel">
      <div className="codecard__bar">
        <span className="codecard__dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="codecard__file mono">rubem.ts</span>
        <span className="codecard__branch mono">main</span>
      </div>
      <pre className="codecard__body" aria-hidden="true">
        <code>
          <span className="cl">
            <span className="tok-kw">const</span> <span className="tok-var">rubem</span>{' '}
            <span className="tok-op">=</span> <span className="tok-punc">{'{'}</span>
          </span>
          <span className="cl">
            {'  '}
            <span className="tok-prop">role</span>
            <span className="tok-punc">:</span> <span className="tok-str">"Senior Full Stack"</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="cl">
            {'  '}
            <span className="tok-prop">stack</span>
            <span className="tok-punc">:</span>{' '}
            <span className="tok-punc">[</span>
            <span className="tok-str">".NET"</span>
            <span className="tok-punc">,</span> <span className="tok-str">"React"</span>
            <span className="tok-punc">,</span> <span className="tok-str">"Azure"</span>
            <span className="tok-punc">]</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="cl">
            {'  '}
            <span className="tok-prop">focus</span>
            <span className="tok-punc">:</span> <span className="tok-str">"{focus}"</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="cl">
            {'  '}
            <span className="tok-prop">based</span>
            <span className="tok-punc">:</span> <span className="tok-str">"{based}"</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="cl">
            {'  '}
            <span className="tok-prop">years</span>
            <span className="tok-punc">:</span> <span className="tok-num">5</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="cl">
            <span className="tok-punc">{'}'}</span>
          </span>
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.66, ease: EASE } },
  }

  return (
    <section id="top" className="hero">
      <HeroMotif />
      <div className="hero__inner container container--wide">
        <motion.div
          className="hero__intro"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.span className="hero__status" variants={item}>
            <span className="hero__pulse" aria-hidden="true" />
            {t('hero_status')}
          </motion.span>

          <motion.span className="eyebrow hero__role" variants={item}>
            {t('hero_role')}
          </motion.span>

          <motion.h1 className="hero__name" variants={item}>
            Rubem Dias
          </motion.h1>

          <motion.p className="hero__headline" variants={item}>
            {t('hero_head_1')}
            <span className="hero__accent">{t('hero_head_accent')}</span>
            {t('hero_head_2')}
          </motion.p>

          <motion.p className="hero__sub" variants={item}>
            {t('hero_sub')}
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <a className="btn btn--primary" href="#contact">
              {t('cta_contact')}
              <ArrowUpRight size={16} strokeWidth={1.9} />
            </a>
            <a className="btn btn--ghost" href="#experience">
              {t('cta_work')}
            </a>
            <div className="hero__social">
              <a className="iconbtn" href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a className="iconbtn" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a className="iconbtn" href={`mailto:${SOCIAL.email}`} aria-label="Email">
                <Mail size={18} strokeWidth={1.7} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__aside"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
        >
          <ProfileCard />
        </motion.div>
      </div>

      <a className="hero__scroll" href="#skills" aria-label={t('hero_scroll')}>
        <span className="mono">{t('hero_scroll')}</span>
        <ArrowDown size={15} strokeWidth={1.8} className="hero__scroll-icon" />
      </a>
    </section>
  )
}
