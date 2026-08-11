'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import type { MouseEvent, ReactNode } from 'react'

type MagneticLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

export function MagneticLink({ href, className = '', children }: MagneticLinkProps) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 260, damping: 18, mass: 0.3 })
  const y = useSpring(rawY, { stiffness: 260, damping: 18, mass: 0.3 })

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - bounds.left - bounds.width / 2) * 0.16)
    rawY.set((event.clientY - bounds.top - bounds.height / 2) * 0.2)
  }

  const reset = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.a
      className={`magnetic-link ${className}`}
      href={href}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <span className="button-fill" />
      <span className="button-content">{children}</span>
    </motion.a>
  )
}
