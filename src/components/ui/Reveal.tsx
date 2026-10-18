import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'section'
}

const EASE = [0.22, 0.61, 0.36, 1] as const

export function Reveal({ children, className, delay = 0, y = 20, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    if (as === 'li') return <li className={className}>{children}</li>
    if (as === 'section') return <section className={className}>{children}</section>
    return <div className={className}>{children}</div>
  }

  const props = {
    className,
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration: 0.62, ease: EASE, delay },
  } as const

  if (as === 'li') return <motion.li {...props}>{children}</motion.li>
  if (as === 'section') return <motion.section {...props}>{children}</motion.section>
  return <motion.div {...props}>{children}</motion.div>
}
