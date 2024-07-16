// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          async: true,
          type: "module",
          src: "https://unpkg.com/@material-tailwind/html/scripts/ripple.js",
        },
        {
          async: true,
          src: "https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js",
          type: "module",
        },
        {
          async: true,
          type: "module",
          src: "https://unpkg.com/@material-tailwind/html@latest/scripts/popover.js",
        }
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL,
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
  ],
})
