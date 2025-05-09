import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// TODO: add eslint-plugin-tailwindcss

export default withNuxt(antfu({
  vue: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single',
  },
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'ts/no-redeclare': 'off',
  },
}))
