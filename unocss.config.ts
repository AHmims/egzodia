import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['right-border', 'border-r-1 border-r-coal-L3 right-border-shadow-effect'],
    ['bottom-border', 'border-b-1 border-b-coal-L3 bottom-border-shadow-effect'],
  ],
  rules: [
    ['right-border-shadow-effect', { 'box-shadow': 'inset -2px 0 0 0 #000000' }],
    ['bottom-border-shadow-effect', { 'box-shadow': 'inset 0 -2px 0 0 #000000' }],
    ['wtf-shadow', { 'box-shadow': '0px 2px 4px rgba(0, 0, 0, 0.06), inset 0px -1px 4px rgba(0, 0, 0, 0.14), inset 0px 2px 2px rgba(79, 79, 79, 0.15), inset 0px 4px 6px rgba(255, 255, 255, 0.02)' }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'Manrope',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      coal: {
        L1: '#FEFFFF',
        L2: '#A3A6AD',
        L3: '#38393B',
        L4: '#323337',
        H1: '#222325',
        H2: '#151618',
        H3: '#121315',
        H4: '#000000',
      },
    },
    fontSize: {
      tiny: '10px',
    },
  },
});
