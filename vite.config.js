import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_APP_SERVICE_ID ': JSON.stringify(process.env.VITE_APP_SERVICE_ID ),
    'process.env.VITE_APP_TEMPLATE_ID ': JSON.stringify(process.env.VITE_APP_TEMPLATE_ID ),
    'process.env.VITE_APP_PUBLIC_KEY ': JSON.stringify(process.env.VITE_APP_PUBLIC_KEY ),
  }
})
