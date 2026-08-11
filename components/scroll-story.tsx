'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, HeartHandshake, MousePointer2, ScanLine } from 'lucide-react'
import { useRef } from 'react'
import { MagneticLink } from './magnetic-link'
import { siteConfig } from '@/lib/site-config'
import { track } from '@/lib/analytics'

export function ScrollStory() {
  const storyRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%'])
  const turn = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section className={reduceMotion ? 'scroll-story reduce-motion' : 'scroll-story'} ref={storyRef}>
      <div className="story-sticky">
        <motion.div className="story-progress" style={{ scaleX: scrollYProgress }} />
        <motion.div className="story-track" style={reduceMotion ? undefined : { x }}>
          <article className="story-panel story-intro">
            <div className="story-number">01 / 03</div>
            <div>
              <p className="kicker">FOR FAMILIES, NOT JUST RESIDENTS</p>
              <motion.h2
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                A decision this big<br />deserves proof.
              </motion.h2>
            </div>
            <div className="scroll-cue"><MousePointer2 size={18} /> Keep scrolling</div>
          </article>

          <article className="story-panel story-depth">
            <div className="story-number">02 / 03</div>
            <div className="depth-copy">
              <p className="kicker">CARE THAT RESPONDS</p>
              <h2>Not one plan.<br /><em>Three, by need.</em></h2>
              <p>Self independent, semi dependent, or full bedridden/dementia care — the right level, not a one-size package.</p>
            </div>
            <motion.div className="depth-object" style={reduceMotion ? undefined : { rotate: turn }}>
              <HeartHandshake size={90} strokeWidth={0.9} />
              <span>3 CARE<br />LEVELS</span>
            </motion.div>
            <ScanLine className="scan-icon" size={34} />
          </article>

          <article className="story-panel story-actions">
            <div className="story-number">03 / 03</div>
            <div className="action-copy">
              <p className="kicker">SEE IT YOURSELF</p>
              <h2>Visit before<br />you decide.</h2>
              <p>Talk to admissions, ask every question, then see the residence in person — no pressure, no rushed sign-up.</p>
              <MagneticLink
                href={siteConfig.ctaHref}
                className="primary-cta story-cta"
                onClick={() => {
                  track('call_clicked', { source: 'scroll-story' })
                  track('qualified_lead_started', { channel: 'call', source: 'scroll-story' })
                }}
              >
                Call admissions <ArrowUpRight size={19} />
              </MagneticLink>
            </div>
            <div className="action-rings"><span /><span /><span /></div>
          </article>
        </motion.div>
      </div>
    </section>
  )
}
