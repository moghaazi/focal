import { vitePreprocess } from '@sveltejs/kit/vite'

export default {
  preprocess: vitePreprocess([
    postcss({ plugins: { tailwindcss: {}, autoprefixer: {} } }),
  ]),
}
