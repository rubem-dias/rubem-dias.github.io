import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'pt'

export interface Bilingual {
  en: string
  pt: string
}

/* UI chrome strings. `en` is the source of truth; `pt` is forced to match its keys. */
const en = {
  // Nav
  nav_analytics: 'Analytics',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_skills: 'Stack',
  nav_contact: 'Contact',
  nav_resume: 'Resume',
  nav_menu: 'Menu',
  nav_close: 'Close',

  // Hero
  hero_status: 'Belo Horizonte, Brazil',
  hero_role: 'Senior Full Stack Engineer',
  hero_head_1: 'Building ',
  hero_head_accent: 'fast, scalable',
  hero_head_2: ' systems, leading the teams that ship them.',
  hero_sub:
    'Full stack engineer with {years}+ years in C#/.NET and React. I turn legacy platforms into fast, modern products.',
  cta_contact: 'Get in touch',
  cta_work: 'See the work',
  hero_scroll: 'Scroll to explore',
  hero_term_title: 'about.ts',

  // Metrics
  metrics_eyebrow: 'Impact by the numbers',

  // Dashboard
  dash_eyebrow: 'Career analytics',
  dash_title: 'A developer who builds dashboards, visualized as one.',
  dash_lead:
    'The clearest way to show what I do is to do it. Everything below is interactive and data-driven, built with React and Recharts.',
  panel_perf_title: 'Report processing time',
  panel_perf_sub: 'A real optimization delivered at HubCount',
  perf_before: 'Before',
  perf_after: 'After',
  perf_faster: 'faster',
  perf_method: 'How',
  panel_radar_title: 'Skill proficiency',
  panel_radar_sub: 'Across disciplines',
  panel_focus_title: 'Where the time goes',
  panel_focus_sub: 'Typical split on a project',
  dash_footnote: 'Proficiency and time-split figures are illustrative self-assessments.',

  // Experience
  exp_eyebrow: 'Experience',
  exp_title: 'Five years, shipping in production.',
  exp_lead: 'From startups to retail at national scale. Building, optimizing and leading.',
  exp_present: 'Present',
  exp_highlights: 'Highlights',
  exp_stack: 'Stack',

  // Projects
  proj_eyebrow: 'Selected projects',
  proj_title: 'Things I build for the craft.',
  proj_lead: 'Side projects where I explore distributed systems, performance and game logic.',
  proj_view: 'View on GitHub',
  proj_private: 'Private repo',
  proj_all: 'All repositories',

  // Skills
  skills_eyebrow: 'Toolbox',
  skills_title: 'The stack I reach for.',
  skills_lead: 'Battle-tested tools I use to design, build and ship across web and desktop.',
  skills_core: 'Core proficiency',

  // Contact
  contact_eyebrow: 'Contact',
  contact_title: "Let's build something that lasts.",
  contact_lead:
    'Open to senior full stack roles, freelance work and collaborations. I usually reply within a day.',
  contact_email: 'Email me',
  contact_copy: 'Copy',
  contact_copied: 'Copied',
  contact_elsewhere: 'Elsewhere',

  // Footer
  footer_built: 'Designed & built with React, TypeScript and Recharts.',
  footer_education: 'B.Sc. Computer Engineering · FUMEC-MG',
  footer_volunteer: 'Volunteer reader · Associação Louis Braille (2020–2021)',
  footer_rights: 'All rights reserved.',
  footer_source: 'Source',
  footer_top: 'Back to top',

  // Controls
  theme_toggle: 'Toggle theme',
  lang_label: 'Language',
} as const

export type DictKey = keyof typeof en

const pt: Record<DictKey, string> = {
  nav_analytics: 'Analytics',
  nav_experience: 'Experiência',
  nav_projects: 'Projetos',
  nav_skills: 'Stack',
  nav_contact: 'Contato',
  nav_resume: 'Currículo',
  nav_menu: 'Menu',
  nav_close: 'Fechar',

  hero_status: 'Belo Horizonte, Brasil',
  hero_role: 'Engenheiro Full Stack Sênior',
  hero_head_1: 'Construindo sistemas ',
  hero_head_accent: 'rápidos e escaláveis',
  hero_head_2: ', liderando os times que os entregam.',
  hero_sub:
    'Engenheiro full stack com mais de {years} anos em C#/.NET e React. Transformo plataformas legadas em produtos rápidos e modernos.',
  cta_contact: 'Vamos conversar',
  cta_work: 'Ver o trabalho',
  hero_scroll: 'Role para explorar',
  hero_term_title: 'sobre.ts',

  metrics_eyebrow: 'Impacto em números',

  dash_eyebrow: 'Analytics de carreira',
  dash_title: 'Um dev que cria dashboards, visualizado como um.',
  dash_lead:
    'A forma mais clara de mostrar o que faço é fazendo. Tudo abaixo é interativo e orientado a dados, feito com React e Recharts.',
  panel_perf_title: 'Tempo de processamento de relatórios',
  panel_perf_sub: 'Uma otimização real entregue na HubCount',
  perf_before: 'Antes',
  perf_after: 'Depois',
  perf_faster: 'mais rápido',
  perf_method: 'Como',
  panel_radar_title: 'Proficiência por área',
  panel_radar_sub: 'Entre disciplinas',
  panel_focus_title: 'Para onde vai o tempo',
  panel_focus_sub: 'Divisão típica em um projeto',
  dash_footnote: 'Proficiência e divisão de tempo são autoavaliações ilustrativas.',

  exp_eyebrow: 'Experiência',
  exp_title: 'Cinco anos entregando em produção.',
  exp_lead: 'De startups ao varejo em escala nacional. Construindo, otimizando e liderando.',
  exp_present: 'Atual',
  exp_highlights: 'Destaques',
  exp_stack: 'Stack',

  proj_eyebrow: 'Projetos selecionados',
  proj_title: 'Coisas que construo pelo ofício.',
  proj_lead: 'Projetos paralelos onde exploro sistemas distribuídos, performance e lógica de jogos.',
  proj_view: 'Ver no GitHub',
  proj_private: 'Repo privado',
  proj_all: 'Todos os repositórios',

  skills_eyebrow: 'Ferramentas',
  skills_title: 'A stack que eu uso.',
  skills_lead: 'Ferramentas testadas em produção para projetar, construir e entregar em web e desktop.',
  skills_core: 'Proficiência principal',

  contact_eyebrow: 'Contato',
  contact_title: 'Vamos construir algo que dure.',
  contact_lead:
    'Aberto a posições full stack sênior, trabalhos freela e colaborações. Costumo responder em até um dia.',
  contact_email: 'Enviar email',
  contact_copy: 'Copiar',
  contact_copied: 'Copiado',
  contact_elsewhere: 'Em outros lugares',

  footer_built: 'Projetado e construído com React, TypeScript e Recharts.',
  footer_education: 'Bacharelado em Engenharia da Computação · FUMEC-MG',
  footer_volunteer: 'Voluntário leitor · Associação Louis Braille (2020–2021)',
  footer_rights: 'Todos os direitos reservados.',
  footer_source: 'Código',
  footer_top: 'Voltar ao topo',

  theme_toggle: 'Alternar tema',
  lang_label: 'Idioma',
}

const dict: Record<Lang, Record<DictKey, string>> = { en, pt }

interface I18nValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  t: (key: DictKey) => string
  tr: (value: Bilingual) => string
}

const I18nContext = createContext<I18nValue | null>(null)

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === 'en' ? 'pt' : 'en'
      try {
        localStorage.setItem('lang', next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: (key) => dict[lang][key] ?? en[key],
      tr: (value) => value[lang],
    }),
    [lang, setLang, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
