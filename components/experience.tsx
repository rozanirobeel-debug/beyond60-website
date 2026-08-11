'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, CircleCheck, HeartHandshake, MapPin, MessageCircle, Phone, Users } from 'lucide-react'
import {
  assetPath,
  careCategories,
  careJourney,
  contact,
  gallery,
  qualitySignals,
  siteConfig,
  socialProof,
  trustSection,
  trustStrip,
} from '@/lib/site-config'
import { track } from '@/lib/analytics'
import { MagneticLink } from './magnetic-link'

const rise = {
  // Keep information readable even if reveal effects do not initialize on a
  // static host such as GitHub Pages.
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

export function Experience() {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const heroCopyY = useTransform(scrollYProgress, [0, 0.16], [0, 110])
  const heroVisualY = useTransform(scrollYProgress, [0, 0.3], ['0%', '14%'])

  const handleCallClick = () => {
    track('call_clicked', { source: 'hero' })
    track('qualified_lead_started', { channel: 'call' })
  }
  const handleWhatsappClick = (source: string) => {
    track('qualified_lead_started', { channel: 'whatsapp', source })
  }
  const handleVisitClick = (source: string) => {
    track('visit_booked', { channel: 'whatsapp', source })
    track('qualified_lead_started', { channel: 'visit', source })
  }

  return (
    <main>
      <motion.div className="global-progress" style={{ scaleX: progress }} />

      <section className="hero-full" id="top">
        <motion.div
          className="hero-bg"
          style={reduceMotion ? undefined : { y: heroVisualY, scale: 1.06 }}
          initial={false}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          <img
            className="hero-bg-photo"
            src={assetPath('/images/hero-residence.jpg')}
            alt="Beyond60 senior care residence in Manor, Palghar"
          />
          <div className="hero-bg-overlay" />
        </motion.div>

        <nav className="nav shell">
          <a className="wordmark" href="#top" aria-label="Beyond60 home">
            <span className="wordmark-dot" />
            {siteConfig.brand}
          </a>
          <div className="nav-meta">
            <span>Manor, Palghar</span>
            <span className="live-dot">Admissions open</span>
          </div>
          <a className="nav-action" href={siteConfig.ctaHref} onClick={handleCallClick}>
            {siteConfig.cta} <Phone size={16} />
          </a>
        </nav>

        <motion.div
          className="hero-copy shell"
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
            <MagneticLink className="primary-cta" href={siteConfig.ctaHref} onClick={handleCallClick}>
              {siteConfig.cta} <ArrowDownRight size={19} />
            </MagneticLink>
            <MagneticLink
              className="primary-cta inverse light"
              href={siteConfig.secondaryCtaHref}
              onClick={() => handleWhatsappClick('hero')}
            >
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

        <div className="visual-label bottom-right hero-full-label">REAL RESIDENCE / MANOR, PALGHAR</div>
      </section>

      <section className="intro-section shell section" id="about">
        <div className="intro-grid">
          <div>
            <p className="kicker">WHY BEYOND60</p>
            <h2>Care that families can see, understand and trust.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Beyond60 is a family-run assisted-living residence near Manor, Palghar. Families can visit the
              property, meet the care team and choose support according to the resident&apos;s actual needs.
            </p>
            <div className="intro-facts" aria-label="Beyond60 at a glance">
              <span><strong>24/7</strong>On-site supervision</span>
              <span><strong>3</strong>Clear care levels</span>
              <span><strong>~60 km</strong>From Borivali</span>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Beyond60 principles">
        <div className="signal-track">
          <span>FAMILY-LED CARE</span><i />
          <span>24-HOUR SUPERVISION</span><i />
          <span>VISIT BEFORE YOU DECIDE</span><i />
          <span>REAL RESIDENTS, REAL ROUTINES</span><i />
          <span>SAME-DAY RESPONSE</span><i />
        </div>
      </section>

      <section className="social-proof shell section" aria-label="Social proof">
        <div className="social-proof-grid">
          <motion.div
            className="social-proof-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rise}
            transition={transition}
          >
            <p className="kicker"><Users size={13} style={{ verticalAlign: '-2px', marginRight: 8 }} />{socialProof.kicker}</p>
            <h2>
              {socialProof.heading.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </h2>
            <p>{socialProof.body}</p>
          </motion.div>
          <div className="social-proof-images">
            {socialProof.images.map((image, index) => (
              <motion.div
                className="social-proof-image"
                key={image.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={rise}
                transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </motion.div>
            ))}
          </div>
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

      <section className="trust-section section" aria-label="Why families trust Beyond60">
        <div className="shell trust-grid">
          <motion.div
            className="trust-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={rise}
            transition={transition}
          >
            <img src={trustSection.image.src} alt={trustSection.image.alt} loading="lazy" />
          </motion.div>
          <motion.div
            className="trust-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rise}
            transition={transition}
          >
            <p className="kicker"><HeartHandshake size={13} style={{ verticalAlign: '-2px', marginRight: 8 }} />{trustSection.kicker}</p>
            <h2>
              {trustSection.heading.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </h2>
            <p>{trustSection.body}</p>
            <ul className="trust-points">
              {trustSection.points.map((point) => (
                <li key={point}><CircleCheck size={16} />{point}</li>
              ))}
            </ul>
          </motion.div>
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
        <p className="kicker">HOW IT WORKS</p>
        <h2>Appointment → Counselling → Follow-up</h2>
        <p>
          No pressure, no rushed decisions. Every family sees the residence in person and talks it through before choosing a care package.
        </p>
        <div className="deploy-steps">
          {careJourney.map((step, index) => (
            <div key={step.title}><span>0{index + 1}</span><strong>{step.title}</strong><p>{step.detail}</p></div>
          ))}
        </div>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <MagneticLink className="primary-cta" href={siteConfig.ctaHref} onClick={handleCallClick}>
            Call admissions <Phone size={18} />
          </MagneticLink>
          <MagneticLink
            className="primary-cta inverse"
            href={contact.visitWhatsappHref}
            onClick={() => handleVisitClick('admission-section')}
          >
            Book a visit <MessageCircle size={18} />
          </MagneticLink>
        </div>
      </section>

      <footer className="footer shell contact-footer" id="contact">
        <div>
          <span className="wordmark"><span className="wordmark-dot" />{siteConfig.brand}</span>
          <p>{contact.address}</p>
        </div>
        <div className="footer-contact">
          <a href={contact.phoneHref} onClick={handleCallClick}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <span>PROTOTYPE — NOT LIVE © 2026</span>
      </footer>
    </main>
  )
}
