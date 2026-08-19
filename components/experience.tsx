'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { Accessibility, Activity, ArrowUpRight, Brain, CalendarClock, HeartHandshake, HeartPulse, MessageCircle, Phone, Star, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardBody, CardMedia } from '@/components/ui/card'
import { BotanicalMotif } from '@/components/botanical-motif'
import { BotanicalBloom } from '@/components/botanical-bloom'
import { FloatingContact } from '@/components/floating-contact'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { admissionSteps, amenities, amenitiesBackdrop, assetPath, contact, finalCta, hero, location, opening, ratingBreakdown, reviews, roomOptions, scenic, specializedCare } from '@/lib/site-config'

gsap.registerPlugin(ScrollTrigger, CustomEase)
const careIcons = { Brain, Activity, Accessibility, Stethoscope, HeartHandshake, HeartPulse, CalendarClock }

// duration/ease tokens lifted from the Son Daven reference's computed motion values
const DUR = { fast: 0.4, medium: 0.6, slow: 1.2 }

export function Experience() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const easeInOut = CustomEase.create('son-ease-in-out', '0.76, 0, 0.24, 1')
    const easeOut = CustomEase.create('son-ease-out', '0.25, 1, 0.5, 1')
    const easeWrite = CustomEase.create('son-ease-write', '0.333, 0, 0.667, 1')
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 })
    const update = (time: number) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    const isDesktop = window.matchMedia('(min-width: 769px)').matches
    const context = gsap.context(() => {
      // opening title card — the one genuine first-entrance moment; a single reveal is intentional here
      gsap.fromTo('.opening-line', { autoAlpha: 0, y: 70, filter: 'blur(12px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: DUR.slow, ease: easeInOut, scrollTrigger: { trigger: '.opening-section', start: 'top 70%', once: true } })

      // hero — continuous scroll-scrubbed parallax across the whole hero scroll range: portrait and copy drift at different rates instead of a one-time zoom-and-stop
      gsap.timeline({ scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 } })
        .fromTo('.hero-portrait', { scale: 1.16, yPercent: -5 }, { scale: 1.04, yPercent: 5, ease: 'none' }, 0)
        .fromTo('.hero-content', { autoAlpha: 0, y: 46 }, { autoAlpha: 1, y: 0, duration: .3, ease: easeOut }, 0)
        .to('.hero-content', { y: -70, ease: 'none' }, .3)

      // generic reveals for everything not given bespoke choreography below
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => gsap.fromTo(element, { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: DUR.medium, ease: easeOut, scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))

      // amenity collage tiles — gentle reveal plus a small internal parallax that stays within the
      // image's scaled headroom (tiles are compact bento cells now, not full-bleed panels, so drift
      // is kept modest to avoid the cover image running out of edge to pan)
      gsap.utils.toArray<HTMLElement>('.amenity-story').forEach((item, i) => {
        const media = item.querySelector<HTMLElement>('.ui-card-media img')
        const body = item.querySelector<HTMLElement>('.ui-card-body')
        const dir = i % 2 === 0 ? 1 : -1
        const drift = 8 + (i % 3) * 5
        const tl = gsap.timeline({ scrollTrigger: isDesktop ? { trigger: item, start: 'top 90%', end: 'bottom top', scrub: 1 } : { trigger: item, start: 'top 88%', once: true } })
        if (media) tl.fromTo(media, { autoAlpha: 0, xPercent: dir * 6, scale: 1.14 }, { autoAlpha: 1, xPercent: 0, scale: 1.06, duration: .35, ease: easeOut }, 0)
        if (body) tl.fromTo(body, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .35, ease: easeOut }, .05)
        if (isDesktop && media) tl.to(media, { y: -drift, ease: 'none' }, .35)
      })

      // specialized-care cards — staggered sequential reveal instead of every card appearing at once
      gsap.fromTo('.care-card', { autoAlpha: 0, y: 42 }, { autoAlpha: 1, y: 0, duration: DUR.medium, ease: easeOut, stagger: .1, scrollTrigger: { trigger: '.care-grid', start: 'top 82%', once: true } })

      // reviews — staggered card reveal plus scroll-linked rating bar fill instead of a static appearance
      gsap.fromTo('.review-card', { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: DUR.medium, ease: easeOut, stagger: .08, scrollTrigger: { trigger: '.review-grid', start: 'top 85%', once: true } })
      gsap.utils.toArray<HTMLElement>('.rating-row i').forEach((bar, i) => gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left center', duration: DUR.slow, ease: easeWrite, delay: i * .05, scrollTrigger: { trigger: '.rating-breakdown', start: 'top 85%', once: true } }))

      // drone sequence — video plays normally (rich moving visual) while the DRAMATIC motion
      // comes from a scroll-linked Ken Burns pan/zoom on the video element itself: scale eases
      // down toward 1 and drifts slightly as you scroll through the pinned range, settling into
      // its resting position/frame by the end of the section instead of seeking exact timestamps.
      // desktop only: mobile shows the static final-frame fallback (see the isDesktop=false branch below).
      const playSettled = (video: HTMLVideoElement | null) => { video?.play().catch(() => {}) }

      if (isDesktop) {
        const locationVideo = document.querySelector<HTMLVideoElement>('.location-video')
        playSettled(locationVideo)
        gsap.timeline({
          scrollTrigger: { trigger: '.location-section', start: 'top top', end: '+=140%', scrub: 1, pin: true, onLeaveBack: () => locationVideo?.pause(), onEnter: () => playSettled(locationVideo) },
        })
          .fromTo('.location-video', { scale: 1.22, yPercent: -6, xPercent: 2 }, { scale: 1, yPercent: 0, xPercent: 0, ease: 'none' }, 0)
          .fromTo('.location-copy', { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: .25, ease: easeOut }, .05)

        const scenicVideo = document.querySelector<HTMLVideoElement>('.scenic-video')
        playSettled(scenicVideo)
        gsap.timeline({
          scrollTrigger: { trigger: '.scenic-section', start: 'top top', end: '+=160%', scrub: 1, pin: true, onLeaveBack: () => scenicVideo?.pause(), onEnter: () => playSettled(scenicVideo) },
        }).fromTo('.scenic-video', { scale: 1.3, yPercent: 8, xPercent: -3 }, { scale: 1, yPercent: 0, xPercent: 0, ease: 'none' }, 0)
      } else {
        gsap.utils.toArray<HTMLElement>('.scroll-video-fallback').forEach((img) => gsap.fromTo(img, { autoAlpha: 0 }, { autoAlpha: 1, duration: DUR.slow, ease: easeOut, scrollTrigger: { trigger: img, start: 'top 80%', once: true } }))
      }

      // botanical bloom — signature "act break" between major sections: the sage line-art motif
      // grows to fill more of the frame with a following gold glow, then recedes to reveal the
      // next section. Scroll-scrubbed across each transition element's own (short) scroll range.
      gsap.utils.toArray<HTMLElement>('.bloom-transition').forEach((bloom) => {
        const glow = bloom.querySelector('.bloom-glow')
        const motifs = bloom.querySelectorAll('.bloom-motif')
        const branches = bloom.querySelectorAll<SVGGeometryElement>('.bloom-motif [stroke]')
        const leaves = bloom.querySelectorAll<SVGGeometryElement>('.bloom-motif path[fill]')
        gsap.timeline({ scrollTrigger: { trigger: bloom, start: 'top bottom', end: 'bottom top', scrub: 1 } })
          .fromTo(motifs, { autoAlpha: 0, scale: .3 }, { autoAlpha: 1, scale: 1.65, stagger: .1, ease: 'none' }, 0)
          .fromTo(branches, { strokeDasharray: 1000, strokeDashoffset: 1000 }, { strokeDashoffset: 0, stagger: .015, ease: 'none' }, .02)
          .fromTo(leaves, { autoAlpha: 0, scale: .25, transformOrigin: 'center' }, { autoAlpha: 1, scale: 1, stagger: .025, ease: 'none' }, .12)
          .fromTo(glow, { autoAlpha: 0, scale: .45 }, { autoAlpha: 1, scale: 1.3, ease: 'none' }, .05)
          .to(glow, { autoAlpha: 0, scale: 1.55, ease: 'none' }, .6)
          .to(motifs, { autoAlpha: 0, scale: 1.9, stagger: .06, ease: 'none' }, .58)
      })
    })
    return () => { context.revert(); gsap.ticker.remove(update); lenis.destroy() }
  }, [])

  return <main id="top">
    <Nav />
    <section className="opening-section" aria-labelledby="opening-heading"><BotanicalMotif className="motif opening-motif" /><p className="section-index">01 / BEYOND60</p><h1 className="opening-line" id="opening-heading">{opening.line}</h1><span className="opening-rule" aria-hidden /></section>
    <BotanicalBloom />
    <section className="hero-section" aria-labelledby="hero-heading"><img className="hero-portrait" src={hero.image} alt={hero.imageAlt} /><div className="hero-overlay" /><div className="hero-content shell"><p className="eyebrow light">{hero.eyebrow}</p><h2 id="hero-heading">{hero.headline}</h2><Button asChild><a href={contact.visitWhatsappHref}>Call / book a visit <ArrowUpRight size={16} /></a></Button></div></section>
    <BotanicalBloom className="bloom-dark" />
    <section className="location-section" aria-labelledby="location-heading"><video className="location-media scroll-video location-video" src={location.video} poster={location.poster} muted autoPlay playsInline preload="auto" aria-hidden="true" /><img className="location-media scroll-video-fallback" src={location.finalFrame} alt={location.posterAlt} /><div className="location-shade" /><div className="location-copy shell"><p className="eyebrow light">{location.eyebrow}</p><h2 id="location-heading">{location.line}</h2></div></section>
    <BotanicalBloom className="bloom-dark" />
    <section className="care-section section video-backdrop" id="care" aria-labelledby="care-heading"><div className="section-backdrop" aria-hidden="true"><img src={specializedCare.backdrop} alt="" /></div><div className="section-content"><BotanicalMotif className="motif motif-right" /><div className="shell"><p className="eyebrow" data-reveal>Thoughtful support</p><h2 className="display-heading" id="care-heading" data-reveal>{specializedCare.intro}</h2><div className="care-grid">{specializedCare.items.map((item) => { const Icon = careIcons[item.icon as keyof typeof careIcons]; return <Card className="care-card" key={item.title}><CardBody><Icon size={24} /><h3>{item.title}</h3><p>{item.detail}</p></CardBody></Card> })}</div><p className="trust-line" data-reveal>{specializedCare.closing}</p></div></div></section>
    <BotanicalBloom className="bloom-dark" />
    <section className="scenic-section" aria-hidden="true"><video className="scenic-media scroll-video scenic-video" src={scenic.video} poster={scenic.poster} muted autoPlay playsInline preload="auto" /><img className="scenic-media scroll-video-fallback" src={scenic.finalFrame} alt={scenic.posterAlt} /></section>
    <BotanicalBloom className="bloom-dark" />
    <section className="amenities-section section video-backdrop" id="amenities" aria-labelledby="amenities-heading"><div className="section-backdrop" aria-hidden="true"><img src={amenitiesBackdrop.image} alt="" /></div><div className="section-content"><BotanicalMotif className="motif motif-amenities" /><div className="shell amenities-intro" data-reveal><p className="eyebrow">Daily life</p><h2 className="display-heading" id="amenities-heading">Spaces made for living, not just staying.</h2></div><div className="amenities-collage shell">{amenities.map((item, index) => <Card className="amenity-story" key={item.title}><CardMedia><img src={item.image} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} /><span className="amenity-tag">{item.label}</span></CardMedia><CardBody><span>{String(index + 1).padStart(2, '0')} / {item.label}</span><h3>{item.title}</h3><p>{item.detail}</p></CardBody></Card>)}</div></div></section>
    <BotanicalBloom className="bloom-dark" />
    <section className="reviews-section section" id="reviews" aria-labelledby="reviews-heading"><BotanicalMotif className="motif reviews-motif" /><div className="shell"><div className="reviews-header" data-reveal><div><p className="eyebrow">Real family experiences</p><h2 className="display-heading" id="reviews-heading">Care, in their own words.</h2></div><div className="rating-total"><strong>{ratingBreakdown.average}</strong><div className="stars" aria-label="4.6 out of 5 stars">{[1,2,3,4,5].map((n) => <Star key={n} size={17} fill="currentColor" />)}</div><span>out of 5 · {ratingBreakdown.total} Google reviews</span></div></div><div className="reviews-layout"><div className="rating-breakdown" data-reveal>{ratingBreakdown.stars.map((row) => <div className="rating-row" key={row.label}><span>{row.label}</span><div><i style={{ width: `${(row.count / ratingBreakdown.total) * 100}%` }} /></div><strong>{row.count}</strong></div>)}</div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-stars">{Array.from({ length: review.rating }, (_, i) => <Star size={14} fill="currentColor" key={i} />)}</div><blockquote>“{review.quote}”</blockquote><footer>{review.name} · {review.rating}/5</footer></article>)}</div></div><p className="review-source">Public Google review excerpts · wording preserved as displayed</p></div></section>
    <section className="rooms-section section" id="rooms" aria-labelledby="rooms-heading"><BotanicalMotif className="motif motif-rooms" /><div className="shell"><p className="eyebrow" data-reveal>Room & care-plan tiers</p><h2 className="display-heading" id="rooms-heading" data-reveal>A place that feels like theirs.</h2><div className="room-grid">{roomOptions.map((room, index) => <Card className={`room-card${room.image ? '' : ' no-image'}`} key={room.title} data-reveal>{room.image && <CardMedia><img src={assetPath(`/images/sectioned/${room.image}`)} alt={room.imageAlt} loading="lazy" /></CardMedia>}<CardBody><span>0{index + 1}</span><h3>{room.title}</h3><p>{room.detail}</p><a href={contact.phoneHref}>Talk through this option <ArrowUpRight size={15} /></a></CardBody></Card>)}</div></div></section>
    <section className="admissions-section section" id="admission" aria-labelledby="admission-heading"><BotanicalMotif className="motif motif-left" /><div className="shell"><p className="eyebrow" data-reveal>A simple beginning</p><h2 className="display-heading" id="admission-heading" data-reveal>Four steps, taken together.</h2><ol className="steps-grid">{admissionSteps.map((step, index) => <li key={step.title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></div></section>
    <section className="final-cta-section" aria-labelledby="final-heading"><BotanicalMotif className="motif final-motif" /><div className="shell" data-reveal><p className="eyebrow">Speak with us</p><h2 id="final-heading">{finalCta.headline}</h2><p>{finalCta.subline}</p><div className="final-actions"><Button asChild><a href={contact.phoneHref}><Phone size={17} /> {finalCta.button}</a></Button><a className="text-link" href={contact.whatsappHref}><MessageCircle size={17} /> WhatsApp</a></div></div></section>
    <Footer /><FloatingContact />
  </main>
}
