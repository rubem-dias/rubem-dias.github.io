import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useI18n } from '../i18n/i18n'
import { SOCIAL } from '../data/resume'
import { Reveal } from './ui/Reveal'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

export function Contact() {
  const { t, tr } = useI18n()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container container--wide">
        <Reveal className="contact__card panel">
          <div className="contact__main">
            <span className="eyebrow">{t('contact_eyebrow')}</span>
            <h2 className="contact__title">{t('contact_title')}</h2>
            <p className="contact__lead">{t('contact_lead')}</p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${SOCIAL.email}`}>
                {t('contact_email')}
                <ArrowUpRight size={16} strokeWidth={1.9} />
              </a>
              <button type="button" className="btn btn--ghost contact__copy" onClick={copyEmail}>
                {copied ? <Check size={15} strokeWidth={2} /> : <Copy size={15} strokeWidth={1.8} />}
                {copied ? t('contact_copied') : SOCIAL.email}
              </button>
            </div>
          </div>

          <ul className="contact__methods">
            <li>
              <a className="method" href={`mailto:${SOCIAL.email}`}>
                <span className="method__icon">
                  <Mail size={17} strokeWidth={1.7} />
                </span>
                <span className="method__text">
                  <span className="method__label mono">Email</span>
                  <span className="method__value">{SOCIAL.email}</span>
                </span>
                <ArrowUpRight className="method__arrow" size={15} strokeWidth={1.8} />
              </a>
            </li>
            <li>
              <a className="method" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
                <span className="method__icon">
                  <LinkedinIcon size={16} />
                </span>
                <span className="method__text">
                  <span className="method__label mono">LinkedIn</span>
                  <span className="method__value">/in/rubem-dias</span>
                </span>
                <ArrowUpRight className="method__arrow" size={15} strokeWidth={1.8} />
              </a>
            </li>
            <li>
              <a className="method" href={SOCIAL.github} target="_blank" rel="noreferrer">
                <span className="method__icon">
                  <GithubIcon size={16} />
                </span>
                <span className="method__text">
                  <span className="method__label mono">GitHub</span>
                  <span className="method__value">@{SOCIAL.githubUser}</span>
                </span>
                <ArrowUpRight className="method__arrow" size={15} strokeWidth={1.8} />
              </a>
            </li>
            <li>
              <a className="method" href={SOCIAL.phoneHref}>
                <span className="method__icon">
                  <Phone size={17} strokeWidth={1.7} />
                </span>
                <span className="method__text">
                  <span className="method__label mono">Phone</span>
                  <span className="method__value">{SOCIAL.phoneDisplay}</span>
                </span>
                <ArrowUpRight className="method__arrow" size={15} strokeWidth={1.8} />
              </a>
            </li>
            <li>
              <span className="method method--static">
                <span className="method__icon">
                  <MapPin size={17} strokeWidth={1.7} />
                </span>
                <span className="method__text">
                  <span className="method__label mono">Location</span>
                  <span className="method__value">{tr(SOCIAL.location)}</span>
                </span>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
