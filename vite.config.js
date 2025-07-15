import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'devserver-preview--gae-construtora.netlify.app',
      'gae-construtora-novo.netlify.app',
      '.netlify.app'
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

