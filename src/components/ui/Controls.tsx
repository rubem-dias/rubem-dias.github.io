import { Moon, Sun } from 'lucide-react'
import { useI18n } from '../../i18n/i18n'
import { useTheme } from '../../lib/hooks'

export function LanguageSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="langswitch" role="group" aria-label={t('lang_label')}>
      <span className="langswitch__thumb" data-lang={lang} aria-hidden="true" />
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'pt' ? 'is-active' : ''}
        aria-pressed={lang === 'pt'}
        onClick={() => setLang('pt')}
      >
        PT
      </button>
    </div>
  )
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()
  return (
    <button type="button" className="iconbtn" onClick={toggle} aria-label={t('theme_toggle')} title={t('theme_toggle')}>
      {theme === 'dark' ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
    </button>
  )
}
