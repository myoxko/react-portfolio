import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',   // ✅ 이 줄이 핵심
})
