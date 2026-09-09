export function createRandom(seed: number) {
  if (!Number.isFinite(seed))
    throw new TypeError('Texture seed must be a finite number')

  let state = seed >>> 0
  return (min: number, max: number) => {
    state = (state + 0x6D2B79F5) >>> 0
    let value = Math.imul(state ^ (state >>> 15), state | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return Math.round(min + (((value ^ (value >>> 14)) >>> 0) / 4294967296) * (max - min))
  }
}
