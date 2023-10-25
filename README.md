# CMOR Client Vue

## Installation

Add it to your package:

    #> npm install @beegoodit/cmor-client-vue

Import and use it:

    /* src/main.js */
    import cmorClientVue from '@beegoodit/cmor-client-vue';
    import '@beegoodit/cmor-client-vue/dist/style.css'

    const app = createApp(App).use(cmorClientVue, {
      api: {
        baseUrl: import.meta.env.VITE_BACKEND_BASE_URL,
        token: import.meta.env.VITE_BACKEND_API_TOKEN
      }
    })

## Usage

