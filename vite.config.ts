import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/coffee-shop-ui/', // название репозитория
  plugins: [react()],
})

