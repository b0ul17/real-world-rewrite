import { createRandom } from './random'

export function createPaperTexture(seed: number): string {
  const random = createRandom(seed)

  const gradients: string[] = []
  const folds: string[] = []
  const foldCount = random(4, 9)

  for (let index = 0; index < foldCount; index++) {
    const x = random(30, 450)
    const y = random(30, 570)
    const angle = random(0, 359) * Math.PI / 180
    const dx = Math.cos(angle)
    const dy = Math.sin(angle)
    const length = random(100, 420)
    const width = random(12, 42)
    const point = (along: number, across = 0) =>
      `${Math.round(x + dx * along - dy * across)} ${Math.round(y + dy * along + dx * across)}`

    // Shade across each crease, not across a repeated set of polygon faces.
    gradients.push(`<linearGradient id="fold-${index}" gradientUnits="userSpaceOnUse"
      x1="${x + dy * width}" y1="${y - dx * width}" x2="${x - dy * width}" y2="${y + dx * width}">
      <stop offset="0" stop-color="#756b59" stop-opacity="0"/>
      <stop offset="0.35" stop-color="#756b59" stop-opacity="0.02"/>
      <stop offset="0.49" stop-color="#756b59" stop-opacity="${random(10, 20) / 100}"/>
      <stop offset="0.51" stop-color="#ffffff" stop-opacity="${random(35, 65) / 100}"/>
      <stop offset="0.7" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>`)
    folds.push(`<path d="M${point(-length)}L${point(length)}" fill="none"
      stroke="url(#fold-${index})" stroke-width="${width * 2}" stroke-linecap="round"/>`)
  }

  const marks = Array.from({ length: random(8, 22) }, () => {
    const x = random(15, 465)
    const y = random(15, 585)
    const angle = random(0, 359) * Math.PI / 180
    const length = random(12, 70)
    const dx = Math.round(Math.cos(angle) * length)
    const dy = Math.round(Math.sin(angle) * length)
    return `M${x} ${y}q${Math.round(dx / 2) + random(-8, 8)} ${Math.round(dy / 2) + random(-8, 8)} ${dx} ${dy}`
  }).join(' ')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="600" viewBox="0 0 480 600" preserveAspectRatio="none">
  <defs>
    <filter id="paper-relief" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="${random(10, 24) / 1000} ${random(12, 28) / 1000}" numOctaves="3" seed="${random(1, 65535)}" result="noise"/>
      <feDiffuseLighting in="noise" surfaceScale="${random(10, 18)}" diffuseConstant="1" lighting-color="#ffffff">
        <feDistantLight azimuth="${random(0, 359)}" elevation="${random(40, 60)}"/>
      </feDiffuseLighting>
    </filter>
    <filter id="wrinkles" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="${random(18, 35) / 1000}" numOctaves="2" seed="${random(1, 65535)}" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="${random(7, 12)}" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    ${gradients.join('\n    ')}
  </defs>
  <rect width="480" height="600" filter="url(#paper-relief)" opacity="0.18"/>
  <g filter="url(#wrinkles)">
    ${folds.join('\n    ')}
    <g fill="none" stroke-linecap="round">
      <path d="${marks}" stroke="#887b65" stroke-opacity="0.08" stroke-width="0.8"/>
      <path d="${marks}" transform="translate(1 1)" stroke="#ffffff" stroke-opacity="0.4" stroke-width="0.8"/>
    </g>
  </g>
</svg>`

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}
