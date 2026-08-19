import fs from 'node:fs/promises'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { chromium } = require('C:/Users/rozan/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright')
const base = 'http://127.0.0.1:4180/beyond60-website'
const out = 'C:/Users/rozan/Desktop/Obsidian Strategy/beyond60-website/artifacts'
const browser = await chromium.launch()

async function pinRange(page, selector) {
  return page.evaluate((target) => {
    const section = document.querySelector(target)
    if (!section) throw new Error(`Missing ${target}`)
    const dataStart = Number(section.dataset.scrollStart)
    const dataEnd = Number(section.dataset.scrollEnd)
    if (Number.isFinite(dataStart) && Number.isFinite(dataEnd) && dataEnd > dataStart) {
      return { start: dataStart, distance: dataEnd - dataStart }
    }
    const spacer = section.parentElement?.classList.contains('pin-spacer') ? section.parentElement : section
    const start = spacer.getBoundingClientRect().top + scrollY
    return { start, distance: Math.max(innerHeight, spacer.scrollHeight - section.clientHeight) }
  }, selector)
}

async function scrollProgress(page, selector, progress) {
  const range = await pinRange(page, selector)
  await page.evaluate((y) => scrollTo({ top: y, behavior: 'instant' }), range.start + range.distance * progress)
  await page.waitForTimeout(700)
}

async function inspect(viewport, label) {
  const page = await browser.newPage({ viewport, reducedMotion: 'no-preference' })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(900)

  const videoTimes = []
  let mobileFallback = null
  if (label === 'desktop') {
    for (const progress of [.14, .5, .86]) {
      await scrollProgress(page, '.location-section', progress)
      videoTimes.push(await page.locator('.location-video').evaluate((video) => ({
        time: video.currentTime,
        duration: video.duration,
        paused: video.paused,
        src: video.currentSrc,
      })))
    }
  } else {
    mobileFallback = await page.evaluate(() => ({
      video: getComputedStyle(document.querySelector('.location-video')).display,
      fallback: getComputedStyle(document.querySelector('.location-section .scroll-video-fallback')).display,
    }))
  }

  const sections = {}
  for (const selector of ['.care-section', '.amenities-section']) {
    sections[selector] = []
    for (const progress of [.18, .34, .5, .66, .82]) {
      await scrollProgress(page, selector, progress)
      sections[selector].push(await page.evaluate(({ selector, progress }) => {
        const section = document.querySelector(selector)
        const cards = [...section.querySelectorAll(selector === '.care-section' ? '.care-card' : '.amenity-story')]
        const visible = cards.map((card, index) => {
          const style = getComputedStyle(card)
          const rect = card.getBoundingClientRect()
          return { index, opacity: Number(style.opacity), rect: { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom } }
        }).filter((card) => card.opacity > .12)
        const backdrop = section.querySelector('.editorial-backdrop')
        const motif = section.querySelector('.editorial-motif')
        const viewport = section.querySelector('.editorial-viewport')
        return {
          progress,
          visible,
          layers: {
            backdrop: Number(getComputedStyle(backdrop).zIndex),
            motif: Number(getComputedStyle(motif).zIndex),
            content: Number(getComputedStyle(viewport).zIndex),
          },
        }
      }, { selector, progress }))
    }
  }

  await scrollProgress(page, '.amenities-section', .5)
  await page.screenshot({ path: `${out}/final-editorial-${label}-amenities.png`, fullPage: false })
  await scrollProgress(page, '.care-section', .5)
  await page.screenshot({ path: `${out}/final-editorial-${label}-care.png`, fullPage: false })

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  await page.close()
  return { viewport, errors, overflow, videoTimes, mobileFallback, sections }
}

const report = {
  desktop: await inspect({ width: 1440, height: 900 }, 'desktop'),
  mobile: await inspect({ width: 390, height: 844 }, 'mobile'),
}

for (const [label, result] of Object.entries(report)) {
  if (result.errors.length) throw new Error(`Page errors: ${result.errors.join('; ')}`)
  if (result.overflow > 1) throw new Error(`Horizontal overflow: ${result.overflow}px`)
  if (label === 'desktop') {
    if (!result.videoTimes.every((sample) => sample.paused && sample.src.includes('-hd.mp4'))) throw new Error('HD video is not paused/scroll-controlled')
    if (!(result.videoTimes[0].time < result.videoTimes[1].time && result.videoTimes[1].time < result.videoTimes[2].time)) throw new Error('Video time did not advance monotonically with scroll')
  } else if (result.mobileFallback.video !== 'none' || result.mobileFallback.fallback === 'none') {
    throw new Error('Mobile final-frame fallback is not active')
  }
  for (const snapshots of Object.values(result.sections)) {
    if (!snapshots.every((snapshot) => snapshot.layers.backdrop < snapshot.layers.motif && snapshot.layers.motif < snapshot.layers.content)) throw new Error('Layer order is incorrect')
    if (!snapshots.some((snapshot) => snapshot.visible.length > 0)) throw new Error('Editorial cards never became visible')
  }
}

await fs.writeFile(`${out}/final-editorial-qa.json`, JSON.stringify(report, null, 2))
console.log(JSON.stringify(report, null, 2))
await browser.close()
