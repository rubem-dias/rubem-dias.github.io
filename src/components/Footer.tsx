import { ArrowUp, Mail } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import { SOCIAL } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="brand" aria-label="Rubem Dias — top">
              <svg className="brand__mark" viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
                <rect x="4" y="18" width="4.5" height="9" rx="1.6" fill="currentColor" opacity="0.5" />
                <rect x="13.5" y="11" width="4.5" height="16" rx="1.6" fill="currentColor" opacity="0.78" />
                <rect x="23" y="5" width="4.5" height="22" rx="1.6" fill="currentColor" />
              </svg>
              <span className="brand__name">{SOCIAL.name}</span>
            </a>
            <p className="footer__built">{t('footer_built')}</p>
          </div>

          <div className="footer__cols">
            <div className="footer__meta">
              <span>{t('footer_education')}</span>
            </div>
            <div className="footer__social">
              <a className="iconbtn" href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={16} />
              </a>
              <a className="iconbtn" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a className="iconbtn" href={`mailto:${SOCIAL.email}`} aria-label="Email">
                <Mail size={17} strokeWidth={1.7} />
              </a>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer__bottom">
          <span className="footer__copy mono">
            © {year} {SOCIAL.name}. {t('footer_rights')}
          </span>
          <div className="footer__links">
            <a href="#top" className="footer__top-link">
              {t('footer_top')}
              <ArrowUp size={14} strokeWidth={1.9} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
