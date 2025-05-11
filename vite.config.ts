import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'pages', // carpeta que quieres copiar
          dest: ''      // se copia directamente dentro de dist/
        }
      ]
    })
  ]
})
