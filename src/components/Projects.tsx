import { ArrowUpRight, Lock } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import { PROJECTS, SOCIAL } from '../data/resume'
import { Reveal } from './ui/Reveal'
import { GithubIcon } from './ui/BrandIcons'

export function Projects() {
  const { t, tr } = useI18n()

  return (
    <section id="projects" className="section projects">
      <div className="container container--wide">
        <Reveal className="section__head">
          <span className="eyebrow">{t('proj_eyebrow')}</span>
          <h2 className="section__title">{t('proj_title')}</h2>
          <p className="section__lead">{t('proj_lead')}</p>
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} className="project-cell" delay={Math.min(i * 0.05, 0.2)}>
              <article className={`project panel ${project.url ? 'is-link' : ''}`}>
                <div className="project__top">
                  <span className="project__year mono">{project.year}</span>
                  {project.url ? (
                    <span className="project__icon" aria-hidden="true">
                      <GithubIcon size={16} />
                    </span>
                  ) : (
                    <span className="project__private mono">
                      <Lock size={12} strokeWidth={1.8} />
                      {t('proj_private')}
                    </span>
                  )}
                </div>

                <h3 className="project__name">{project.name}</h3>
                <p className="project__desc">{tr(project.desc)}</p>

                <div className="project__stack">
                  {project.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <span className="project__cta">
                    {t('proj_view')}
                    <ArrowUpRight size={15} strokeWidth={1.9} />
                  </span>
                )}

                {project.url && (
                  <a
                    className="project__fulllink"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} — ${t('proj_view')}`}
                  />
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects__foot">
          <a className="btn btn--ghost" href={`${SOCIAL.github}?tab=repositories`} target="_blank" rel="noreferrer">
            <GithubIcon size={16} />
            {t('proj_all')}
            <ArrowUpRight size={15} strokeWidth={1.9} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
