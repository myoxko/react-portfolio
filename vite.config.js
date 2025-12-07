// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // ✅ swc 버전으로!

export default defineConfig({
  plugins: [react()],
  base: '/',   // 일단 로컬 개발용으로만 간단하게
})