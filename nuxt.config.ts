// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })
export default defineNuxtConfig({
  app: {
    head: {
      title:"My Nuxt App",
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }],
      script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"}]
    }
  },
  nitro:{
    plugins:["~/server/index"]
  },
  runtimeConfig:{
      mongo_full_uri:process.env.MONGODB_FULL_URI
  }
})

