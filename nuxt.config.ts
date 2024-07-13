// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxt/eslint", "@nuxt/ui"]
});