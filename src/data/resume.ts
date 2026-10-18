import type { Bilingual } from '../i18n/i18n'

/* ------------------------------------------------------------------ */
/* Contact / social                                                    */
/* ------------------------------------------------------------------ */

export const SOCIAL = {
  name: 'Rubem Dias',
  shortName: 'Rubem Dias',
  email: 'rubemdias65@gmail.com',
  phoneDisplay: '+55 31 99363-4292',
  phoneHref: 'tel:+5531993634292',
  github: 'https://github.com/rubem-dias',
  githubUser: 'rubem-dias',
  linkedin: 'https://www.linkedin.com/in/rubem-dias',
  repo: 'https://github.com/rubem-dias/rubem-dias.github.io',
  cv: '/rubem-dias-cv.pdf',
  location: { en: 'Belo Horizonte, Brazil', pt: 'Belo Horizonte, Brasil' } as Bilingual,
}

/* Theme-reactive data-viz palette (CSS variables). */
export const VIZ = [
  'var(--viz-1)',
  'var(--viz-3)',
  'var(--viz-2)',
  'var(--viz-4)',
  'var(--viz-5)',
  'var(--viz-6)',
]

/* ------------------------------------------------------------------ */
/* Headline metrics                                                    */
/* ------------------------------------------------------------------ */

export interface Metric {
  id: string
  value: number
  prefix?: string
  suffix?: string
  compact?: boolean
  label: Bilingual
  detail: Bilingual
  trend: number[]
}

export const METRICS: Metric[] = [
  {
    id: 'speed',
    value: 240,
    suffix: '×',
    label: { en: 'Faster critical reports', pt: 'Relatórios críticos mais rápidos' },
    detail: { en: '12 min → 3 s', pt: '12 min → 3 s' },
    trend: [8, 10, 9, 14, 22, 40, 72, 120, 190, 240],
  },
  {
    id: 'years',
    value: 5,
    suffix: '+',
    label: { en: 'Years in production', pt: 'Anos em produção' },
    detail: { en: 'Since 2021', pt: 'Desde 2021' },
    trend: [1, 1.6, 2.2, 3, 3.8, 4.4, 5],
  },
  {
    id: 'stores',
    value: 90,
    suffix: '+',
    label: { en: 'Retail stores served', pt: 'Lojas de varejo atendidas' },
    detail: { en: 'Lojas Torra', pt: 'Lojas Torra' },
    trend: [20, 34, 48, 60, 72, 84, 90],
  },
  {
    id: 'customers',
    value: 1_000_000,
    suffix: '+',
    compact: true,
    label: { en: 'Monthly customers reached', pt: 'Clientes alcançados por mês' },
    detail: { en: 'National scale', pt: 'Escala nacional' },
    trend: [120, 240, 360, 520, 680, 840, 1000],
  },
]

/* ------------------------------------------------------------------ */
/* Charts                                                              */
/* ------------------------------------------------------------------ */

export interface RadarDatum {
  axis: Bilingual
  value: number
}

export const RADAR: RadarDatum[] = [
  { axis: { en: 'Backend / .NET', pt: 'Backend / .NET' }, value: 95 },
  { axis: { en: 'Frontend / React', pt: 'Frontend / React' }, value: 88 },
  { axis: { en: 'Databases / SQL', pt: 'Bancos / SQL' }, value: 90 },
  { axis: { en: 'Cloud / DevOps', pt: 'Cloud / DevOps' }, value: 80 },
  { axis: { en: 'Architecture', pt: 'Arquitetura' }, value: 85 },
  { axis: { en: 'Leadership', pt: 'Liderança' }, value: 84 },
]

export interface FocusDatum {
  key: string
  label: Bilingual
  value: number
}

export const FOCUS: FocusDatum[] = [
  { key: 'backend', label: { en: 'Backend / .NET', pt: 'Backend / .NET' }, value: 34 },
  { key: 'frontend', label: { en: 'Frontend / React', pt: 'Frontend / React' }, value: 24 },
  { key: 'data', label: { en: 'Data / SQL', pt: 'Dados / SQL' }, value: 18 },
  { key: 'devops', label: { en: 'Cloud / DevOps', pt: 'Cloud / DevOps' }, value: 13 },
  { key: 'lead', label: { en: 'Leadership', pt: 'Liderança' }, value: 11 },
]

export interface PerfData {
  beforeSeconds: number
  afterSeconds: number
  factor: number
  beforeLabel: Bilingual
  afterLabel: Bilingual
  methods: Bilingual[]
}

export const PERF: PerfData = {
  beforeSeconds: 720,
  afterSeconds: 3,
  factor: 240,
  beforeLabel: { en: '12 min', pt: '12 min' },
  afterLabel: { en: '3 sec', pt: '3 seg' },
  methods: [
    { en: 'SQL query restructuring', pt: 'Reestruturação de queries SQL' },
    { en: 'Dapper + EF Core tuning', pt: 'Ajuste de Dapper + EF Core' },
    { en: 'Indexed views', pt: 'Indexed views' },
    { en: 'Azure Blob caching', pt: 'Cache em Azure Blob' },
  ],
}

export interface TechBar {
  name: string
  value: number
}

export const TECH_BARS: TechBar[] = [
  { name: 'C# / .NET', value: 95 },
  { name: 'React / TypeScript', value: 88 },
  { name: 'Docker', value: 80 },
  { name: 'SQL · T-SQL / MySQL', value: 90 },
  { name: 'RabbitMQ', value: 78 },
  { name: 'Dapper / EF Core', value: 86 },
  { name: 'Azure', value: 76 },
  { name: 'ABP Framework', value: 82 },
]

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillItem = string | Bilingual

export interface SkillGroup {
  title: Bilingual
  items: SkillItem[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: { en: 'Languages', pt: 'Linguagens' },
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Go'],
  },
  {
    title: { en: 'Backend & Architecture', pt: 'Backend & Arquitetura' },
    items: ['.NET Core', 'ABP Framework', 'Entity Framework', 'Dapper', 'RabbitMQ', 'REST APIs'],
  },
  {
    title: { en: 'Frontend & Desktop', pt: 'Frontend & Desktop' },
    items: ['React', 'Next.js', 'Electron'],
  },
  {
    title: { en: 'Data & Storage', pt: 'Dados & Armazenamento' },
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'DuckDB', 'Azure Blob'],
  },
  {
    title: { en: 'Cloud & DevOps', pt: 'Cloud & DevOps' },
    items: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: { en: 'AI & Tooling', pt: 'IA & Ferramentas' },
    items: ['GitHub Copilot', 'Visual Studio', 'VS Code', 'Git'],
  },
  {
    title: { en: 'Leadership', pt: 'Liderança' },
    items: [
      { en: 'Squad leadership', pt: 'Liderança de squad' },
      { en: '1:1s', pt: '1:1s' },
      { en: 'Sprint planning', pt: 'Planejamento de sprints' },
      { en: 'Technical direction', pt: 'Direção técnica' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Experience {
  company: string
  role: Bilingual
  period: Bilingual
  location: Bilingual
  current?: boolean
  summary: Bilingual
  highlights: Bilingual[]
  stack: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'HubCount',
    role: { en: 'Tech Lead · Full Stack Engineer', pt: 'Tech Lead · Engenheiro Full Stack' },
    period: { en: 'Sep 2023 — Present', pt: 'Set 2023 — Atual' },
    location: { en: 'Remote', pt: 'Remoto' },
    current: true,
    summary: {
      en: 'BI and data integration platform with AI-assisted automation. Promoted from Full Stack Engineer to Tech Lead.',
      pt: 'Plataforma de BI e integração de dados com automação assistida por IA. Promovido de Engenheiro Full Stack a Tech Lead.',
    },
    highlights: [
      {
        en: 'Cut critical report processing from 12 min to 3 s (≈240×) via SQL restructuring, Dapper/EF tuning, indexed views and Azure Blob caching.',
        pt: 'Reduzi o processamento de relatórios críticos de 12 min para 3 s (≈240×) com reestruturação de SQL, ajuste de Dapper/EF, indexed views e cache em Azure Blob.',
      },
      {
        en: 'Led migration of a legacy ASP.NET 4.7 / Angular platform to .NET 9 and React.',
        pt: 'Liderei a migração de uma plataforma legada ASP.NET 4.7 / Angular para .NET 9 e React.',
      },
      {
        en: 'Lead a squad of 2 engineers: 1:1s, sprint planning and technical direction across web and desktop.',
        pt: 'Lidero um squad de 2 engenheiros: 1:1s, planejamento de sprints e direção técnica em web e desktop.',
      },
      {
        en: 'Own CI/CD and releases with GitHub Actions and Azure, including milestone versioning and release notes.',
        pt: 'Sou responsável por CI/CD e releases com GitHub Actions e Azure, incluindo versionamento por milestones e notas de versão.',
      },
      {
        en: 'Integrate Claude via Azure to automate internal workflows and accelerate the team.',
        pt: 'Integro o Claude via Azure para automatizar fluxos internos e acelerar o time.',
      },
    ],
    stack: ['.NET 9', 'ABP Framework', 'React', 'Electron', 'SQL Server', 'Azure', 'GitHub Actions', 'Claude'],
  },
  {
    company: 'Lojas Torra',
    role: { en: 'Full Stack Engineer · Freelance', pt: 'Engenheiro Full Stack · Freelance' },
    period: { en: 'Dec 2025 — Jul 2026', pt: 'Dez 2025 — Jul 2026' },
    location: { en: 'Remote', pt: 'Remoto' },
    summary: {
      en: 'One of Brazil’s largest fashion retailers, with 90+ stores and 1M+ customers a month.',
      pt: 'Uma das maiores redes de moda do Brasil, com 90+ lojas e 1M+ clientes por mês.',
    },
    highlights: [
      {
        en: 'Built backend integrations and automation pipelines with .NET, RabbitMQ and Docker.',
        pt: 'Construí integrações de backend e pipelines de automação com .NET, RabbitMQ e Docker.',
      },
      {
        en: 'Designed and consumed REST APIs across the VTEX e-commerce ecosystem, keeping data consistent between systems.',
        pt: 'Projetei e consumi APIs REST no ecossistema de e-commerce VTEX, mantendo consistência de dados entre sistemas.',
      },
      {
        en: 'Containerized services with Docker for reliable deploys and dev/prod parity.',
        pt: 'Containerizei serviços com Docker para deploys confiáveis e paridade entre dev e produção.',
      },
    ],
    stack: ['.NET', 'RabbitMQ', 'Docker', 'VTEX', 'REST'],
  },
  {
    company: 'BiomTech',
    role: { en: 'Full Stack Engineer', pt: 'Engenheiro Full Stack' },
    period: { en: 'Jan 2023 — Sep 2023', pt: 'Jan 2023 — Set 2023' },
    location: { en: 'Belo Horizonte, BR', pt: 'Belo Horizonte, MG' },
    summary: {
      en: 'Management systems for the legal and education sectors.',
      pt: 'Sistemas de gestão para os setores jurídico e educacional.',
    },
    highlights: [
      {
        en: 'Built microservice features with .NET and Go, focused on scalable service-to-service communication.',
        pt: 'Desenvolvi funcionalidades de microsserviços com .NET e Go, com foco em comunicação escalável entre serviços.',
      },
      {
        en: 'Integrated a microservice to sync state-school databases using .NET and React.',
        pt: 'Integrei um microsserviço para sincronizar bancos de escolas estaduais usando .NET e React.',
      },
      {
        en: 'Maintained and fixed a judicial case-management system for reliability.',
        pt: 'Mantive e corrigi um sistema de gestão de processos jurídicos para garantir confiabilidade.',
      },
    ],
    stack: ['.NET', 'Go', 'React', 'JavaScript', 'Bootstrap'],
  },
  {
    company: 'Capys',
    role: { en: 'Backend Engineer', pt: 'Engenheiro Backend' },
    period: { en: 'Aug 2022 — Jan 2023', pt: 'Ago 2022 — Jan 2023' },
    location: { en: 'Belo Horizonte, BR', pt: 'Belo Horizonte, MG' },
    summary: {
      en: 'Full cycle real estate management platform.',
      pt: 'Plataforma de gestão imobiliária de ciclo completo.',
    },
    highlights: [
      {
        en: 'Wrote optimized SQL Server stored procedures for data-heavy internal processes.',
        pt: 'Desenvolvi stored procedures otimizadas no SQL Server para processos internos com alto volume de dados.',
      },
      {
        en: 'Fixed bugs across modules spanning the full customer cycle, from acquisition to post-build handover.',
        pt: 'Corrigi bugs em módulos cobrindo todo o ciclo do cliente, da aquisição à entrega pós-obra.',
      },
    ],
    stack: ['.NET', 'SQL Server'],
  },
  {
    company: 'LeverPro',
    role: { en: 'Software Development Intern', pt: 'Estagiário de Desenvolvimento' },
    period: { en: 'Dec 2021 — Jul 2022', pt: 'Dez 2021 — Jul 2022' },
    location: { en: 'Belo Horizonte, BR', pt: 'Belo Horizonte, MG' },
    summary: {
      en: 'Accounting solutions integrated with corporate ERPs.',
      pt: 'Soluções contábeis integradas a ERPs corporativos.',
    },
    highlights: [
      {
        en: 'Onboarded clients by building accounting reports integrated with Protheus, Sapiens and TOTVS ERPs.',
        pt: 'Fiz onboarding de clientes construindo relatórios contábeis integrados aos ERPs Protheus, Sapiens e TOTVS.',
      },
      {
        en: 'Optimized database queries to each client’s specific reporting requirements.',
        pt: 'Otimizei queries de banco conforme os requisitos de relatório de cada cliente.',
      },
    ],
    stack: ['SQL', 'ERP', 'Reporting'],
  },
]

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string
  url?: string
  stack: string[]
  desc: Bilingual
  year: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Poker Game',
    url: 'https://github.com/rubem-dias/poker-game',
    stack: ['Next.js', 'TypeScript', 'Realtime'],
    desc: {
      en: 'A complete multiplayer poker game with real-time gameplay, hand evaluation and an interactive table UI.',
      pt: 'Um jogo de poker multiplayer completo com gameplay em tempo real, avaliação de mãos e mesa interativa.',
    },
    year: '2024',
  },
  {
    name: 'Carsties',
    url: 'https://github.com/rubem-dias/Carsties',
    stack: ['.NET', 'MongoDB', 'React', 'RabbitMQ'],
    desc: {
      en: 'Event-driven auction microservices communicating through a message broker.',
      pt: 'Microsserviços de leilão orientados a eventos, comunicando-se via message broker.',
    },
    year: '2024',
  },
  {
    name: 'DuckDB Data Tool',
    stack: ['.NET', 'DuckDB'],
    desc: {
      en: 'High-performance tool for manipulating large datasets with DuckDB’s in-process analytical engine.',
      pt: 'Ferramenta de alta performance para manipular grandes volumes de dados com o motor analítico in-process do DuckDB.',
    },
    year: '2025',
  },
  {
    name: 'Steam Seller',
    stack: ['.NET', 'SQL Server'],
    desc: {
      en: 'Automates selling items on the Steam marketplace, built to expand into other platform features.',
      pt: 'Automatiza a venda de itens no marketplace da Steam, projetado para expandir para outros recursos.',
    },
    year: '2026',
  },
  {
    name: 'LeetCodeStudies',
    stack: ['C#', 'Algorithms'],
    desc: {
      en: 'Optimized C# solutions to algorithm and data structure challenges. Continuous practice.',
      pt: 'Soluções otimizadas em C# para desafios de algoritmos e estruturas de dados. Prática contínua.',
    },
    year: 'Ongoing',
  },
]
