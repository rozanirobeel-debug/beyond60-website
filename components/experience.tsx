'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { ArrowDown, ArrowUpRight, MessageCircle, Phone, Star } from 'lucide-react'
import { assetPath, careCategories, careJourney, contact, siteConfig } from '@/lib/site-config'
import { track } from '@/lib/analytics'

const reviews = [
  { quote: 'It is a home away from home and one feels included and cared for.', name: 'Rozina R', rating: '4/5' },
  { quote: 'The care and treatment was top class and the food was healthy. We could see the happiness on mum’s face.', name: 'Amyn Nayani', rating: '5/5' },
  { quote: 'You can rest assured your loved one will be taken care of without any second thought.', name: 'Melinda Arora', rating: '5/5' },
]

const media = (name: string) => assetPath(`/story/${name}`)

export function Experience() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  const trackCall = (source: string) => {
    track('call_clicked', { source })
    track('qualified_lead_started', { channel: 'call', source })
  }

  const trackVisit = (source: string) => {
    track('visit_booked', { channel: 'whatsapp', source })
    track('qualified_lead_started', { channel: 'visit', source })
  }

  return (
    <main>
      <motion.div className="global-progress" style={{ scaleX: progress }} />

      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top"><span className="wordmark-dot" />{siteConfig.brand}</a>
        <span className="nav-place">Manor, Palghar</span>
        <a className="nav-action" href={contact.phoneHref} onClick={() => trackCall('header')}>Call admissions <Phone size={15} /></a>
      </nav>

      <section className="arrival scene" id="top">
        <img className="scene-media" src={media('gate.jpg')} alt="Beyond60 entrance gate in Manor" />
        <div className="scene-shade" />
        <div className="arrival-copy shell">
          <p className="eyebrow light">Your visit begins here</p>
          <h1>A warm welcome.<br />Every time.</h1>
          <p>Come in, meet the people who will know your family by name.</p>
        </div>
        <div className="staff-card">
          <img src={media('staff.jpg')} alt="Beyond60 care team gathered outside the residence" />
          <span>People first. Care always.</span>
        </div>
        <a className="scroll-cue" href="#welcome-home">Step inside <ArrowDown size={17} /></a>
      </section>

      <section className="hero scene" id="welcome-home">
        <video
          className="scene-media"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={media('pool-ambulance-poster.jpg')}
          aria-label="Beyond60 swimming pool and on-site ambulance"
        >
          <source src={media('pool-ambulance.mp4')} type="video/mp4" />
        </video>
        <div className="scene-shade hero-shade" />
        <div className="hero-copy shell">
          <p className="eyebrow light">Senior living, with reassurance built in</p>
          <h2>Peace of mind<br />feels like this.</h2>
          <p>A calm residential community with everyday companionship and support close at hand.</p>
          <a className="gold-cta" href={contact.visitWhatsappHref} onClick={() => trackVisit('hero')}>
            Book a visit <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="service-rail shell" aria-label="Services at a glance">
          <span><strong>24/7</strong> On-site supervision</span>
          <span><strong>Daily</strong> Meals & activities</span>
          <span><strong>Personal</strong> Care by need</span>
          <span><strong>Ready</strong> Ambulance support</span>
        </div>
      </section>

      <section className="building scene">
        <img className="scene-media" src={media('building.jpg')} alt="Main Beyond60 residential building beside the pool" loading="lazy" />
        <div className="scene-shade soft" />
        <div className="center-line shell">
          <p className="eyebrow light">A residence, not an institution</p>
          <h2>It feels like home.<br /><em>Because it is.</em></h2>
        </div>
      </section>

      <section className="activities scene">
        <video
          className="scene-media"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="none"
          poster={media('activities-poster.jpg')}
          aria-label="Residents enjoying outdoor activities at Beyond60"
        >
          <source src={media('activities.mp4')} type="video/mp4" />
        </video>
        <div className="scene-shade activities-shade" />
        <div className="activities-copy shell">
          <span className="scene-count">04 / THE DAY OPENS UP</span>
          <h2>Fresh air.<br />Familiar faces.<br />Something to do.</h2>
          <p>Morning movement, garden conversations and activities that keep the day connected.</p>
        </div>
      </section>

      <section className="reviews-section" aria-label="Google reviews">
        <div className="reviews-head shell">
          <div><p className="eyebrow">What families say</p><h2>Care you can feel<br />in their words.</h2></div>
          <div className="rating"><strong>4.6</strong><span><Star size={16} fill="currentColor" /> Google rating<br />63 public reviews</span></div>
        </div>
        <div className="review-window">
          <div className="review-track">
            {[...reviews, ...reviews].map((review, index) => (
              <blockquote className="review-card" key={`${review.name}-${index}`}>
                <p>“{review.quote}”</p>
                <footer>{review.name} <span>· {review.rating} on Google</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
        <p className="review-note shell">Verified excerpts from the public Google listing. Spelling lightly corrected only where needed for display.</p>
      </section>

      <section className="community shell section">
        <div className="section-intro">
          <p className="eyebrow">Life between the rooms</p>
          <h2>The lounge is<br />where the day meets.</h2>
          <p>TV, games and easy conversation lead the scene. Meals, reading and family conversations are always close by.</p>
        </div>
        <div className="community-grid">
          <figure className="community-lead"><img src={media('lounge.jpg')} alt="Beyond60 lounge with television and seating" loading="lazy" /><figcaption>Lounge · TV · Games</figcaption></figure>
          <figure><img src={media('dining.jpg')} alt="Beyond60 dining area" loading="lazy" /><figcaption>Dining</figcaption></figure>
          <figure><img src={media('library.jpg')} alt="Beyond60 library and reading table" loading="lazy" /><figcaption>Library</figcaption></figure>
          <figure><img src={media('office.jpg')} alt="Beyond60 office" loading="lazy" /><figcaption>Office</figcaption></figure>
        </div>
      </section>

      <section className="residential-ride" id="care">
        <div className="ride-intro shell">
          <p className="eyebrow light">Continue upstairs</p>
          <h2>One easy ride<br />to your own space.</h2>
        </div>
        <div className="ride-frames shell">
          <figure><img src={media('lobby.jpg')} alt="Beyond60 ground-floor lobby" loading="lazy" /><figcaption><span>01</span> Lobby</figcaption></figure>
          <figure className="fast-frame"><img src={media('elevator.jpg')} alt="Elevator entrance" loading="lazy" /><figcaption><span>02</span> Elevator</figcaption></figure>
          <figure><img src={media('floor.jpg')} alt="Residential floor corridor" loading="lazy" /><figcaption><span>03</span> Your floor</figcaption></figure>
        </div>
        <div className="doors shell" aria-label="Four residential plan doors">
          {['Independent', 'Semi-assisted', 'Full care', 'Whole apartment'].map((door, index) => (
            <div className="door" key={door}><span>0{index + 1}</span><strong>{door}</strong></div>
          ))}
        </div>
        <div className="plan-heading shell">
          <p className="eyebrow">Multiple residential plans</p>
          <h2>Choose the space.<br />Match the support.</h2>
          <p>No prices online. We’ll understand the resident’s needs first, then talk through the right room and care plan.</p>
        </div>
        <div className="care-cards shell">
          {careCategories.map((category, index) => (
            <article className="care-card" key={category.index}>
              <img src={media(category.image)} alt={category.imageAlt} loading="lazy" />
              <div className="care-card-copy">
                <span>{category.index}</span>
                <h3>{category.title}</h3>
                <p>{category.detail}</p>
                <a href={contact.whatsappHref} onClick={() => trackVisit(`care-${index + 1}`)}>Ask about this plan <MessageCircle size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="admission shell section" id="admission">
        <p className="eyebrow">A considered decision</p>
        <h2>Visit first.<br />Decide together.</h2>
        <div className="journey">
          {careJourney.map((step, index) => <div key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></div>)}
        </div>
        <div className="admission-actions">
          <a className="gold-cta dark" href={contact.visitWhatsappHref} onClick={() => trackVisit('admission')}>Book a visit <ArrowUpRight size={18} /></a>
          <a className="text-link" href={contact.phoneHref} onClick={() => trackCall('admission')}>Or call {contact.phone}</a>
        </div>
      </section>

      <footer className="footer shell">
        <div><span className="wordmark"><span className="wordmark-dot" />{siteConfig.brand}</span><p>{contact.address}</p></div>
        <div><a href={contact.phoneHref}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <span>FIRST-DRAFT PROTOTYPE · NOT LIVE</span>
      </footer>
    </main>
  )
}
