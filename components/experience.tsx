'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  BookOpen,
  CalendarHeart,
  Clapperboard,
  HeartPulse,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Utensils,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { track } from '@/lib/analytics'
import { assetPath, contact, roomOptions, siteConfig } from '@/lib/site-config'

gsap.registerPlugin(ScrollTrigger)

const amenities = [
  {
    title: 'Activities',
    detail: 'Celebrations, gentle movement and social time keep familiar faces part of every day.',
    image: 'activities.jpg',
    alt: 'Residents and staff celebrating together at Beyond60',
    icon: Sparkles,
  },
  {
    title: 'Library',
    detail: 'A quiet, light-filled place for books, reading and unhurried time.',
    image: 'library.jpg',
    alt: 'Beyond60 library with bookshelves and reading table',
    icon: BookOpen,
  },
  {
    title: 'Dining',
    detail: 'Planned daily meals, with personalized routines shaped around each resident.',
    image: 'dining.jpg',
    alt: 'Bright Beyond60 dining area with tables and chairs',
    icon: Utensils,
  },
  {
    title: 'Nursing',
    detail: 'Attentive support for daily monitoring, medicines and personal care routines.',
    image: 'nursing.jpg',
    alt: 'Beyond60 caregiver supporting a resident in her room',
    icon: HeartPulse,
  },
  {
    title: 'Entertainment area',
    detail: 'Television, games and comfortable seating for shared downtime.',
    image: 'entertainment.jpg',
    alt: 'Beyond60 entertainment lounge with television and seating',
    icon: Clapperboard,
  },
]

const reviews = [
  {
    quote: 'It is a comfortable place with adequate facilities and a clean environment. It is a home away from home and one feels included and cared for..',
    name: 'Rozina R',
    rating: '4 / 5',
  },
  {
    quote: 'My Aunt lives there and she is very happy to be there, I live in US and everytime I call, the Gentleman that answers is always so cordial and friendly.',
    name: 'Shaukat Wadiwalla',
    rating: '5 / 5',
  },
  {
    quote: 'Excellent place for the seniors. Had mum stay at Beyond 60 for around 18 months and were extremely happy. The care and treatment was top class and the food was healthy.',
    name: 'Amyn Nayani',
    rating: '5 / 5',
  },
  {
    quote: 'The place is well maintained and provides a perfect ambience for seniors to unwind and relax. The staff is courteous and prompt.',
    name: 'Melinda Arora',
    rating: '5 / 5',
  },
  {
    quote: 'Everyone at the facility took the utmost care of her tirelessly & with great compassion. Once again a big thank you to everyone at Beyond 60.',
    name: 'Sujata Simons',
    rating: '5 / 5',
  },
]

const sectionImage = (name: string) => assetPath(`/images/sectioned/${name}`)

export function Experience() {
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 })
    const updateLenis = (time: number) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })
    })

    const reviewTimer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length)
    }, 6000)

    return () => {
      window.clearInterval(reviewTimer)
      context.revert()
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

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
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Beyond60 home">
          <span className="wordmark-dot" />
          {siteConfig.brand}
        </a>
        <span className="nav-place">Senior living · Manor, Palghar</span>
      </nav>

      <section className="hero-section" id="top" aria-labelledby="hero-heading">
        <img
          className="hero-image"
          src={assetPath('/images/sectioned/hero-senior-portrait.jpg')}
          alt="Smiling senior resident at Beyond60, wrapped in a white dupatta with festival colour on her cheek"
        />
        <div className="hero-wash" />
        <div className="hero-content shell">
          <p className="eyebrow light">Reassurance for your family. A fuller life for them.</p>
          <h1 id="hero-heading">A place that feels<br />cared for — and like home.</h1>
          <p className="hero-summary">Calm senior living with companionship, daily rhythm and thoughtful support in a residential setting.</p>
          <Button asChild>
            <a href={contact.visitWhatsappHref} onClick={() => trackVisit('hero')}>
              Book a visit <ArrowUpRight size={18} />
            </a>
          </Button>
        </div>
        <div className="hero-location shell"><Trees size={17} /> Manor, Palghar</div>
      </section>

      <section className="reassurance-section" aria-label="Reassurance at a glance">
        <div className="reassurance shell" data-reveal>
          <div className="reassurance-photo">
            <img src={assetPath('/story/pool-ambulance-poster.jpg')} alt="Beyond60 residence courtyard viewed from above" />
          </div>
          <div className="reassurance-intro">
            <p className="eyebrow">Peace of mind, simply stated</p>
            <h2>Support that stays close.</h2>
          </div>
          <div className="reassurance-facts">
            <div><ShieldCheck size={21} /><span><strong>On-call ambulance</strong>Support when it is needed</span></div>
            <div><Trees size={21} /><span><strong>Residential setting</strong>Open air and familiar routines</span></div>
            <div><CalendarHeart size={21} /><span><strong>Daily reassurance</strong>Care, meals and companionship</span></div>
          </div>
        </div>
      </section>

      <section className="amenities-section section shell" id="life" aria-labelledby="amenities-heading">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Everyday life at Beyond60</p>
          <h2 id="amenities-heading">Everything that makes<br />a day feel complete.</h2>
          <p>Five essentials, designed around comfort, connection and an easy daily rhythm.</p>
        </div>
        <div className="amenity-grid">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <article className="amenity-card" key={amenity.title} data-reveal>
                <div className="amenity-image"><img src={sectionImage(amenity.image)} alt={amenity.alt} loading="lazy" /></div>
                <div className="amenity-copy">
                  <Icon size={20} />
                  <h3>{amenity.title}</h3>
                  <p>{amenity.detail}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-heading">
        <div className="reviews-layout shell" data-reveal>
          <div className="reviews-summary">
            <p className="eyebrow light">Public Google reviews</p>
            <h2 id="reviews-heading">Care, in families’ own words.</h2>
            <div className="rating"><strong>4.6</strong><span><Star size={15} fill="currentColor" /> from 63 public reviews</span></div>
          </div>
          <div className="quote-strip">
            <blockquote key={reviews[activeReview].name}>
              <p>“{reviews[activeReview].quote}”</p>
              <footer>{reviews[activeReview].name}<span>{reviews[activeReview].rating} on Google</span></footer>
            </blockquote>
            <div className="quote-controls" aria-label="Choose a review">
              {reviews.map((review, index) => (
                <button
                  type="button"
                  key={review.name}
                  className={index === activeReview ? 'active' : ''}
                  aria-label={`Show review from ${review.name}`}
                  aria-pressed={index === activeReview}
                  onClick={() => setActiveReview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rooms-section section shell" id="rooms" aria-labelledby="rooms-heading">
        <div className="section-heading rooms-heading" data-reveal>
          <p className="eyebrow">Room privacy options</p>
          <h2 id="rooms-heading">Choose how much<br />space feels right.</h2>
          <p>The room option sets the level of privacy. Support is discussed separately around the resident’s needs.</p>
        </div>
        <div className="room-grid">
          {roomOptions.map((room, index) => (
            <article className={`room-card${room.image ? '' : ' no-image'}`} key={room.title} data-reveal>
              {room.image && <img src={sectionImage(room.image)} alt={room.imageAlt} loading="lazy" />}
              <div className="room-copy">
                <span>0{index + 1}</span>
                <h3>{room.title}</h3>
                <p>{room.detail}</p>
                <a href={contact.whatsappHref} onClick={() => trackVisit(`room-${index + 1}`)}>
                  Ask about this room <MessageCircle size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-section" id="admission" aria-labelledby="admissions-heading">
        <div className="admissions shell" data-reveal>
          <div>
            <p className="eyebrow light">Admissions, without pressure</p>
            <h2 id="admissions-heading">Visit first.<br />Decide together.</h2>
          </div>
          <div className="admissions-detail">
            <p>Start with a call or WhatsApp message. We’ll arrange a visit, walk you through the residence and discuss the right room privately.</p>
            <div className="admissions-actions">
              <Button asChild>
                <a href={contact.visitWhatsappHref} onClick={() => trackVisit('admission')}>
                  Book a visit <ArrowUpRight size={18} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={contact.phoneHref} onClick={() => trackCall('admission')}>
                  Call {contact.phone} <Phone size={17} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <footer className="footer shell">
          <span className="wordmark"><span className="wordmark-dot" />{siteConfig.brand}</span>
          <p>{contact.address}</p>
          <span>Review prototype · not deployed</span>
        </footer>
      </section>

      <div className="floating-contact" aria-label="Contact Beyond60">
        <a href={contact.phoneHref} onClick={() => trackCall('floating')} aria-label={`Call Beyond60 at ${contact.phone}`}>
          <Phone size={19} /><span>Call</span>
        </a>
        <a href={contact.whatsappHref} onClick={() => trackVisit('floating')} aria-label="Message Beyond60 on WhatsApp">
          <MessageCircle size={20} /><span>WhatsApp</span>
        </a>
      </div>
    </main>
  )
}
