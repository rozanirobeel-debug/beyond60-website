'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'

export function AmbientBackground() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.45 })

  const fieldY = useTransform(smooth, [0, 0.35, 0.72, 1], ['-6%', '18%', '-14%', '8%'])
  const fieldX = useTransform(smooth, [0, 0.4, 0.75, 1], ['18%', '-14%', '12%', '-8%'])
  const fieldRotate = useTransform(smooth, [0, 1], [0, 150])
  const fieldScale = useTransform(smooth, [0, 0.48, 1], [0.82, 1.28, 0.92])
  const haloX = useTransform(smooth, [0, 0.5, 1], ['-20%', '42%', '-8%'])
  const haloY = useTransform(smooth, [0, 0.5, 1], ['60%', '-18%', '20%'])
  const beamRotate = useTransform(smooth, [0, 1], [-18, 22])
  const gridY = useTransform(smooth, [0, 1], ['0%', '18%'])

  const staticStyle = reduceMotion ? undefined : { x: fieldX, y: fieldY, rotate: fieldRotate, scale: fieldScale }

  return (
    <div className="ambient-background" aria-hidden="true">
      <motion.div className="ambient-grid" style={reduceMotion ? undefined : { y: gridY }} />
      <motion.div className="ambient-field" style={staticStyle}>
        <span className="field-ring ring-a" />
        <span className="field-ring ring-b" />
        <span className="field-ring ring-c" />
        <span className="field-axis axis-x" />
        <span className="field-axis axis-y" />
        <span className="field-core" />
      </motion.div>
      <motion.div
        className="ambient-halo"
        style={reduceMotion ? undefined : { x: haloX, y: haloY }}
      />
      <motion.div
        className="ambient-beam"
        style={reduceMotion ? undefined : { rotate: beamRotate }}
      />
      <div className="ambient-vignette" />
      <div className="ambient-noise" />
    </div>
  )
}
