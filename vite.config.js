import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //Permite que aparelhos externos acessem o programa (Celular no mesmo WI-FI)
    port: 5173,
  }
})
