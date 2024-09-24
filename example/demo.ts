import { generate_heatmap_values, heatmap_schemes } from '..'

let values = generate_heatmap_values(heatmap_schemes.red_transparent_blue)
Object.assign(window, { values })
