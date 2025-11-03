import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',             
        catalog: 'product_catalog.html' 
        //agg las otras 3
      }
    }
  }
})
