// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://unpkg.com/@material-tailwind/html/scripts/ripple.js",
        },
        {
          async: true,
          src: "https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js",
        },
        {
          async: true,
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
