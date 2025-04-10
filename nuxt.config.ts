// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  alias: {
    "@/shared": "./shared",
    "@/entities": "./entities",
    "@/features": "./features",
    "@/widgets": "./widgets",
    "@/assets": "./assets",
  },
  css: ["@/assets/css/tailwind.css"],
})
