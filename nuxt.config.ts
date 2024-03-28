// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["flowbite/dist/flowbite.css"],
  runtimeConfig: {
    appId: "",
    collection: "",
    db: "",
    serverApiKey: "",
  },
  app: {},
});
