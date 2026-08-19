type BotanicalMotifProps = {
  className?: string
}

// A single reusable sprig of line-art foliage — the recurring "life still
// growing" motif. Positioned and sized by the parent via className.
export function BotanicalMotif({ className = '' }: BotanicalMotifProps) {
  return (
    <svg
      className={`botanical-motif ${className}`}
      width="220"
      height="290"
      viewBox="0 0 180 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 230C24 170 40 110 92 62C122 34 150 22 168 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60 150C74 138 88 132 110 130" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M110 130C114 116 122 106 138 98" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M45 185C60 176 72 172 88 172" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M88 172C93 160 102 152 116 146" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M92 62C82 76 78 92 82 110" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M120 46C112 58 110 70 114 84" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* filled leaf blades, echoing the logo's solid leaf accents */}
      <path d="M112 128C118 120 128 116 140 118C134 128 124 132 112 128Z" fill="currentColor" fillOpacity=".55" />
      <path d="M140 96C145 88 154 84 164 86C159 95 150 99 140 96Z" fill="currentColor" fillOpacity=".55" />
      <path d="M90 170C96 162 106 158 118 160C112 170 102 174 90 170Z" fill="currentColor" fillOpacity=".55" />
      <ellipse cx="112" cy="128" rx="9" ry="4.5" transform="rotate(-38 112 128)" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="140" cy="96" rx="8" ry="4" transform="rotate(-42 140 96)" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="90" cy="170" rx="8" ry="4" transform="rotate(-30 90 170)" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="118" cy="144" rx="7" ry="3.6" transform="rotate(-36 118 144)" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
