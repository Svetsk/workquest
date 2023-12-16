export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
