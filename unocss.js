import presetUno from 'https://esm.sh/@unocss/preset-uno@0.42.0'

export const UNOCSS_OPTS = {
  presets: [
    presetUno(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `.font-bold {font-weight: 800 !important;} p {font-weight: 600 !important;}`
    }
  ]
}