export type RGBA = [
  /** @description 0..255 */
  r: number,
  /** @description 0..255 */
  g: number,
  /** @description 0..255 */
  b: number,
  /** @description 0..1 */
  a: number,
]

export type HeatmapScheme = {
  low: RGBA
  middle: RGBA
  high: RGBA
}

export const heatmap_schemes = {
  red_green_blue: {
    low: [0, 0, 255, 1],
    middle: [0, 255, 0, 1],
    high: [255, 0, 0, 1],
  },
  red_transparent_blue: {
    low: [0, 0, 255, 1],
    middle: [0, 0, 0, 0],
    high: [255, 0, 0, 1],
  },
  hot_only: {
    low: [0, 0, 255, 0],
    middle: [0, 0, 0, 0],
    high: [255, 0, 0, 1],
  },
  cold_only: {
    low: [0, 0, 255, 1],
    middle: [0, 0, 0, 0],
    high: [255, 0, 0, 0],
  },
} satisfies Record<string, HeatmapScheme>

export function generate_heatmap_values(
  /** @description default is red_transparent_blue */
  scheme: HeatmapScheme = heatmap_schemes.red_transparent_blue,
) {
  let values: RGBA[] = new Array(256)
  for (let i = 0; i < 256; i++) {
    let value = i / 255
    let color: RGBA = [0, 0, 0, 0]
    let is_transparent = scheme.middle[3] == 0
    for (let i = 0; i < 4; i++) {
      if (value < 0.5) {
        let low = 1 - value * 2
        let middle = 1 - low
        let c =
          is_transparent && i != 3
            ? scheme.low[i]
            : scheme.low[i] * low + scheme.middle[i] * middle
        color[i] = i == 3 ? c : Math.floor(c)
      } else {
        let high = 2 * (value - 0.5)
        let middle = 1 - high
        let c =
          is_transparent && i != 3
            ? scheme.high[i]
            : scheme.high[i] * high + scheme.middle[i] * middle
        color[i] = i == 3 ? c : Math.floor(c)
      }
    }
    values[i] = color
  }
  return values
}
