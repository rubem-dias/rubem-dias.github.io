import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n/i18n'
import { SKILL_GROUPS, TECH_BARS } from '../data/resume'
import { skillText } from '../lib/hooks'
import { Reveal } from './ui/Reveal'

const EASE = [0.22, 0.61, 0.36, 1] as const

function ProficiencyBar({ name, value, index }: { name: string; value: number; index: number }) {
  const reduce = useReducedMotion()
  return (
    <div className="bar">
      <div className="bar__label">
        <span className="bar__name">{name}</span>
        <span className="bar__val mono">{value}</span>
      </div>
      <div className="bar__track">
        <motion.div
          className="bar__fill"
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 + index * 0.06 }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const { t, tr } = useI18n()

  return (
    <section id="skills" className="section skills">
      <div className="container container--wide">
        <Reveal className="section__head">
          <span className="eyebrow">{t('skills_eyebrow')}</span>
          <h2 className="section__title">{t('skills_title')}</h2>
          <p className="section__lead">{t('skills_lead')}</p>
        </Reveal>

        <div className="skills__layout">
          <Reveal className="skills__bars panel">
            <span className="skills__sub mono">{t('skills_core')}</span>
            <div className="bars">
              {TECH_BARS.map((bar, i) => (
                <ProficiencyBar key={bar.name} name={bar.name} value={bar.value} index={i} />
              ))}
            </div>
          </Reveal>

          <div className="skills__groups">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal key={group.title.en} className="skillgroup" delay={Math.min(i * 0.04, 0.2)}>
                <h3 className="skillgroup__title">{tr(group.title)}</h3>
                <div className="skillgroup__tags">
                  {group.items.map((item) => {
                    const label = skillText(item, tr)
                    return (
                      <span key={label} className="tag">
                        {label}
                      </span>
                    )
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
