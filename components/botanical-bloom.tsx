import { BotanicalMotif } from './botanical-motif'

type BotanicalBloomProps = {
  className?: string
}

// Signature "act break" between major sections — the corner botanical motif
// dramatically grows to fill more of the screen with a soft gold glow, then
// recedes to reveal the next section. Driven by scroll-scrubbed GSAP in
// experience.tsx (see `.bloom-transition` handling).
export function BotanicalBloom({ className = '' }: BotanicalBloomProps) {
  return (
    <div className={`bloom-transition ${className}`} aria-hidden="true">
      <div className="bloom-glow" />
      <div className="bloom-motif bloom-motif-a"><BotanicalMotif /></div>
      <div className="bloom-motif bloom-motif-b"><BotanicalMotif className="bloom-svg-mirror" /></div>
      <div className="bloom-motif bloom-motif-c"><BotanicalMotif className="bloom-svg-rotate" /></div>
    </div>
  )
}
