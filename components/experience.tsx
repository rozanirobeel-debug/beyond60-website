'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Accessibility, Activity, ArrowUpRight, Brain, CalendarClock, HeartHandshake, HeartPulse, MessageCircle, Phone, Star, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardBody, CardMedia } from '@/components/ui/card'
import { BotanicalMotif } from '@/components/botanical-motif'
import { FloatingContact } from '@/components/floating-contact'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { admissionSteps, amenities, assetPath, contact, finalCta, hero, location, opening, ratingBreakdown, reviews, roomOptions, specializedCare } from '@/lib/site-config'

gsap.registerPlugin(ScrollTrigger)
const careIcons = { Brain, Activity, Accessibility, Stethoscope, HeartHandshake, HeartPulse, CalendarClock }

export function Experience() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 })
    const update = (time: number) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    const context = gsap.context(() => {
      gsap.fromTo('.opening-line', { autoAlpha: 0, y: 70, filter: 'blur(12px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power4.out', scrollTrigger: { trigger: '.opening-section', start: 'top 70%', once: true } })
      gsap.fromTo('.hero-portrait', { scale: 1.08 }, { scale: 1, duration: 1.8, ease: 'power2.out', scrollTrigger: { trigger: '.hero-section', start: 'top 80%', once: true } })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => gsap.fromTo(element, { autoAlpha: 0, y: 38 }, { autoAlpha: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
      gsap.utils.toArray<HTMLElement>('.amenity-story').forEach((item) => gsap.fromTo(item, { autoAlpha: 0, y: 55, scale: .985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 82%', once: true } }))
      if (window.matchMedia('(min-width: 769px)').matches) {
        gsap.fromTo('.location-media', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.location-section', start: 'top bottom', end: 'bottom top', scrub: 1.2 } })
        gsap.fromTo('.location-copy', { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, scrollTrigger: { trigger: '.location-section', start: 'top 45%', end: 'top 10%', scrub: 1 } })
      }
    })
    return () => { context.revert(); gsap.ticker.remove(update); lenis.destroy() }
  }, [])

  return <main id="top">
    <Nav />
    <section className="opening-section" aria-labelledby="opening-heading"><BotanicalMotif className="motif opening-motif" /><p className="section-index">01 / BEYOND60</p><h1 className="opening-line" id="opening-heading">{opening.line}</h1><span className="opening-rule" aria-hidden /></section>
    <section className="hero-section" aria-labelledby="hero-heading"><img className="hero-portrait" src={hero.image} alt={hero.imageAlt} /><div className="hero-overlay" /><div className="hero-content shell" data-reveal><p className="eyebrow light">{hero.eyebrow}</p><h2 id="hero-heading">{hero.headline}</h2><Button asChild><a href={contact.visitWhatsappHref}>Call / book a visit <ArrowUpRight size={16} /></a></Button></div></section>
    <section className="location-section" aria-labelledby="location-heading"><video className="location-media location-video" src={location.video} poster={location.poster} autoPlay muted loop playsInline aria-label="Aerial and ground-level views of Beyond60" /><img className="location-media location-poster" src={location.poster} alt={location.posterAlt} /><div className="location-shade" /><div className="location-copy shell"><p className="eyebrow light">{location.eyebrow}</p><h2 id="location-heading">{location.line}</h2></div></section>
    <section className="care-section section" id="care" aria-labelledby="care-heading"><BotanicalMotif className="motif motif-right" /><div className="shell"><p className="eyebrow" data-reveal>Thoughtful support</p><h2 className="display-heading" id="care-heading" data-reveal>{specializedCare.intro}</h2><div className="care-grid">{specializedCare.items.map((item) => { const Icon = careIcons[item.icon as keyof typeof careIcons]; return <Card className="care-card" key={item.title} data-reveal><CardBody><Icon size={24} /><h3>{item.title}</h3><p>{item.detail}</p></CardBody></Card> })}</div><p className="trust-line" data-reveal>{specializedCare.closing}</p></div></section>
    <section className="amenities-section section" id="amenities" aria-labelledby="amenities-heading"><div className="shell amenities-intro" data-reveal><p className="eyebrow">Daily life</p><h2 className="display-heading" id="amenities-heading">Spaces made for living, not just staying.</h2></div><div className="amenities-stack shell">{amenities.map((item, index) => <Card className="amenity-story" key={item.title}><CardMedia><img src={item.image} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} /></CardMedia><CardBody><span>{String(index + 1).padStart(2, '0')} / {item.label}</span><h3>{item.title}</h3><p>{item.detail}</p></CardBody></Card>)}</div></section>
    <section className="reviews-section section" id="reviews" aria-labelledby="reviews-heading"><BotanicalMotif className="motif reviews-motif" /><div className="shell"><div className="reviews-header" data-reveal><div><p className="eyebrow">Real family experiences</p><h2 className="display-heading" id="reviews-heading">Care, in their own words.</h2></div><div className="rating-total"><strong>{ratingBreakdown.average}</strong><div className="stars" aria-label="4.6 out of 5 stars">{[1,2,3,4,5].map((n) => <Star key={n} size={17} fill="currentColor" />)}</div><span>out of 5 · {ratingBreakdown.total} Google reviews</span></div></div><div className="reviews-layout"><div className="rating-breakdown" data-reveal>{ratingBreakdown.stars.map((row) => <div className="rating-row" key={row.label}><span>{row.label}</span><div><i style={{ width: `${(row.count / ratingBreakdown.total) * 100}%` }} /></div><strong>{row.count}</strong></div>)}</div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name} data-reveal><div className="review-stars">{Array.from({ length: review.rating }, (_, i) => <Star size={14} fill="currentColor" key={i} />)}</div><blockquote>“{review.quote}”</blockquote><footer>{review.name} · {review.rating}/5</footer></article>)}</div></div><p className="review-source">Public Google review excerpts · wording preserved as displayed</p></div></section>
    <section className="rooms-section section" id="rooms" aria-labelledby="rooms-heading"><div className="shell"><p className="eyebrow" data-reveal>Room & care-plan tiers</p><h2 className="display-heading" id="rooms-heading" data-reveal>A place that feels like theirs.</h2><div className="room-grid">{roomOptions.map((room, index) => <Card className={`room-card${room.image ? '' : ' no-image'}`} key={room.title} data-reveal>{room.image && <CardMedia><img src={assetPath(`/images/sectioned/${room.image}`)} alt={room.imageAlt} loading="lazy" /></CardMedia>}<CardBody><span>0{index + 1}</span><h3>{room.title}</h3><p>{room.detail}</p><a href={contact.phoneHref}>Talk through this option <ArrowUpRight size={15} /></a></CardBody></Card>)}</div></div></section>
    <section className="admissions-section section" id="admission" aria-labelledby="admission-heading"><BotanicalMotif className="motif motif-left" /><div className="shell"><p className="eyebrow" data-reveal>A simple beginning</p><h2 className="display-heading" id="admission-heading" data-reveal>Four steps, taken together.</h2><ol className="steps-grid">{admissionSteps.map((step, index) => <li key={step.title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></div></section>
    <section className="final-cta-section" aria-labelledby="final-heading"><BotanicalMotif className="motif final-motif" /><div className="shell" data-reveal><p className="eyebrow">Speak with us</p><h2 id="final-heading">{finalCta.headline}</h2><p>{finalCta.subline}</p><div className="final-actions"><Button asChild><a href={contact.phoneHref}><Phone size={17} /> {finalCta.button}</a></Button><a className="text-link" href={contact.whatsappHref}><MessageCircle size={17} /> WhatsApp</a></div></div></section>
    <Footer /><FloatingContact />
  </main>
}
