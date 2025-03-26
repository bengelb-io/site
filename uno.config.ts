import { defineConfig } from 'unocss'
import { presetAttributify, presetWind4, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind4(),
    presetIcons()
  ]
})