import { MapPin } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import { EXPERIENCE } from '../data/resume'
import { Reveal } from './ui/Reveal'

export function Experience() {
  const { t, tr } = useI18n()

  return (
    <section id="experience" className="section exp">
      <div className="container container--wide">
        <Reveal className="section__head section__head--bare">
          <span className="eyebrow">{t('exp_eyebrow')}</span>
        </Reveal>

        <ol className="exp__list">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} as="li" className="exp__item" delay={Math.min(i * 0.05, 0.2)}>
              <div className="exp__rail" aria-hidden="true">
                <span className={`exp__dot ${job.current ? 'is-current' : ''}`} />
              </div>

              <article className="exp__card panel">
                <header className="exp__top">
                  <div>
                    <h3 className="exp__company">
                      {job.company}
                      {job.current && <span className="exp__now">{t('exp_present')}</span>}
                    </h3>
                    <p className="exp__role">{tr(job.role)}</p>
                  </div>
                  <div className="exp__meta">
                    <span className="mono exp__period">{tr(job.period)}</span>
                    <span className="mono exp__loc">
                      <MapPin size={12} strokeWidth={1.8} />
                      {tr(job.location)}
                    </span>
                  </div>
                </header>

                <p className="exp__summary">{tr(job.summary)}</p>

                <ul className="exp__highlights">
                  {job.highlights.map((h) => (
                    <li key={h.en}>{tr(h)}</li>
                  ))}
                </ul>

                <footer className="exp__stack">
                  {job.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </footer>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
