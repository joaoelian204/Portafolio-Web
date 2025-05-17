import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'pages',
          dest: ''
        },
        {
          src: 'assets',
          dest: ''
        },
        {
          src: 'assets/pdf_certificados/*.pdf',
          dest: 'assets/pdf_certificados'
        },
        {
          src: 'assets/CV/*.pdf',
          dest: 'assets/CV'
        }
      ]
    })
  ]
})


