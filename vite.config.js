import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '5173-iyqyusbjnji92o9gojdje-f9324127.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

