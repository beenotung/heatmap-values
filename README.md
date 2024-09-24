# heatmap-values

Generate heatmap with RGBA from pre-built or custom color scheme.

[![npm Package Version](https://img.shields.io/npm/v/heatmap-values)](https://www.npmjs.com/package/heatmap-values)
[![Minified Package Size](https://img.shields.io/bundlephobia/min/heatmap-values)](https://bundlephobia.com/package/heatmap-values)
[![Minified and Gzipped Package Size](https://img.shields.io/bundlephobia/minzip/heatmap-values)](https://bundlephobia.com/package/heatmap-values)

Designed for class activation map of image classifier AI model visualization.

## Features

- Multiple built-in color scheme:
  - red-green-blue
  - red-transparent-blue
  - hot-only
  - cold-only
- Support custom color scheme
- Typescript support
- Isomorphic package: works in Node.js and browsers

## Installation

```bash
npm install heatmap-values
```

You can also install `heatmap-values` with [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [slnpm](https://github.com/beenotung/slnpm)

## Usage Example

```typescript
import { generate_heatmap_values, heatmap_schemes } from 'heatmap-values'

let values = generate_heatmap_values(heatmap_schemes.red_transparent_blue)

for (let i = 0; i < 256; i++) {
  let [r, g, b, a] = values[i]
  let color = `rgba(${r},${g},${b},${a})`
  console.log(i / 255, color)
}
```

Detail usage example see [demo.ts](./example/demo.ts) and [demo.html](./example/demo.html).

## Typescript Signature

```typescript
export function generate_heatmap_values(
  /** @description default is red_transparent_blue */
  scheme?: HeatmapScheme,
): RGBA[]

export type HeatmapScheme = {
  low: RGBA
  middle: RGBA
  high: RGBA
}

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

export const heatmap_schemes: {
  red_green_blue: HeatmapScheme
  red_transparent_blue: HeatmapScheme
  hot_only: HeatmapScheme
  cold_only: HeatmapScheme
}
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
