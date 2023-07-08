import presetUno from 'https://esm.sh/@unocss/preset-uno@0.42.0';

export const UNOCSS_OPTS = {
  presets: [
    presetUno()
  ],
  preflights: [{
    getCSS: ({ theme }) => `::-webkit-scrollbar {display: none;}`
  }]
}