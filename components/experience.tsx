'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, CircleCheck, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  admissionSteps,
  assetPath,
  careCategories,
  contact,
  gallery,
  qualitySignals,
  siteConfig,
  trustStrip,
} from '@/lib/site-config'
import { MagneticLink } from './magnetic-link'
import { ScrollStory } from './scroll-story'
import { AmbientBackground } from './ambient-background'

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Experience() {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const heroCopyY = useTransform(scrollYProgress, [0, 0.16], [0, 110])
  const heroVisualY = useTransform(scrollYProgress, [0, 0.16], [0, -90])
  const heroVisualRotate = useTransform(scrollYProgress, [0, 0.16], [0, 4])

  return (
    <main>
      <AmbientBackground />
      <motion.div className="global-progress" style={{ scaleX: progress }} />
      <nav className="nav shell">
        <a className="wordmark" href="#top" aria-label="Beyond60 home">
          <span className="wordmark-dot" />
          {siteConfig.brand}
        </a>
        <div className="nav-meta">
          <span>Manor, Palghar</span>
          <span className="live-dot">Admissions open</span>
        </div>
        <a className="nav-action" href={siteConfig.ctaHref}>
          {siteConfig.cta} <Phone size={16} />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <motion.div
          className="hero-copy"
          style={reduceMotion ? undefined : { y: heroCopyY }}
          initial={false}
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.12 }}
        >
          <motion.p className="kicker" variants={rise} transition={transition}>
            {siteConfig.eyebrow}
          </motion.p>
          <h1>
            {siteConfig.headline.map((line) => (
              <motion.span key={line} variants={rise} transition={transition}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p className="hero-description" variants={rise} transition={transition}>
            {siteConfig.description}
          </motion.p>
          <motion.div className="hero-actions" variants={rise} transition={transition}>
            <MagneticLink className="primary-cta" href={siteConfig.ctaHref}>
              {siteConfig.cta} <ArrowDownRight size={19} />
            </MagneticLink>
            <MagneticLink className="primary-cta inverse" href={siteConfig.secondaryCtaHref}>
              {siteConfig.secondaryCta} <MessageCircle size={18} />
            </MagneticLink>
          </motion.div>
          <motion.div className="trust-strip" variants={rise} transition={transition}>
            {trustStrip.map(([label, value]) => (
              <span key={label}>
                <strong>{value}</strong>
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={reduceMotion ? undefined : { y: heroVisualY, rotate: heroVisualRotate }}
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.25 }}
        >
          <div className="visual-label top-left">REAL RESIDENCE / MANOR</div>
          <div className="visual-label bottom-right">PALGHAR, MAHARASHTRA</div>
          <img className="hero-photo" src={assetPath('/images/gallery-2.jpg')} alt="Beyond60 residents smiling at the residence" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </motion.div>

        <div className="hero-index">01</div>
      </section>

      <div id="motion-lab">
        <ScrollStory />
      </div>

      <section className="signal-strip" aria-label="Beyond60 principles">
        <div className="signal-track">
          <span>FAMILY-LED CARE</span><i />
          <span>24-HOUR SUPERVISION</span><i />
          <span>VISIT BEFORE YOU DECIDE</span><i />
          <span>REAL RESIDENTS, REAL ROUTINES</span><i />
          <span>SAME-DAY RESPONSE</span><i />
        </div>
      </section>

      <section className="modules shell section" id="care">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rise}
          transition={transition}
        >
          <p className="kicker">CARE CATEGORIES</p>
          <h2>Three levels of care.<br />One priced clearly.</h2>
          <p>Choose by the level of support your family member actually needs — not a generic package.</p>
        </motion.div>

        <div className="module-list">
          {careCategories.map((category, index) => (
            <motion.article
              className="module-row"
              key={category.index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              variants={rise}
              transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.05 }}
            >
              <span className="module-index">{category.index}</span>
              <div>
                <h3>{category.title}</h3>
                <p>{category.detail}</p>
              </div>
              <span className="module-status status-core">{category.status}</span>
              <ArrowUpRight className="module-arrow" size={24} />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="gallery shell section" id="gallery" aria-label="Residence photos">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rise}
          transition={transition}
        >
          <p className="kicker">THE RESIDENCE</p>
          <h2>See it, before you visit it.</h2>
          <p>Real photos of the residence — the same ones you can verify in person on a visit.</p>
        </motion.div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <motion.div
              className="gallery-item"
              key={image.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={rise}
              transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.06 }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="principles section">
        <div className="shell principles-grid">
          <div className="manifesto">
            <p className="kicker">WHAT'S INCLUDED</p>
            <h2>No surprise costs.</h2>
            <p>
              Every package covers food, accommodation, housekeeping, laundry and use of amenities. Higher care levels add monitoring, medicine support and caretaker assistance — priced by room type, not hidden fees.
            </p>
          </div>
          <div className="quality-card">
            <div className="quality-head">
              <span>PACKAGE DETAILS</span>
              <CircleCheck size={20} />
            </div>
            {qualitySignals.map(([label, value]) => (
              <div className="quality-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deploy shell section" id="admission">
        <div className="deploy-icon"><MapPin size={32} /></div>
        <p className="kicker">HOW ADMISSION WORKS</p>
        <h2>Call → Visit → Decide → Move in</h2>
        <p>
          No pressure, no rushed decisions. Every family sees the residence in person before choosing a care package.
        </p>
        <div className="deploy-steps">
          {admissionSteps.map((step, index) => (
            <div key={step.title}><span>0{index + 1}</span><strong>{step.title}</strong><p>{step.detail}</p></div>
          ))}
        </div>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <MagneticLink className="primary-cta" href={siteConfig.ctaHref}>Call admissions <Phone size={18} /></MagneticLink>
          <MagneticLink className="primary-cta inverse" href={siteConfig.secondaryCtaHref}>WhatsApp us <MessageCircle size={18} /></MagneticLink>
        </div>
      </section>

      <footer className="footer shell contact-footer" id="contact">
        <div>
          <span className="wordmark"><span className="wordmark-dot" />{siteConfig.brand}</span>
          <p>{contact.address}</p>
        </div>
        <div className="footer-contact">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <span>PROTOTYPE — NOT LIVE © 2026</span>
      </footer>
    </main>
  )
}
