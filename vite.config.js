import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy GoldAPI.io requests to bypass CORS
      '/goldapi': {
        target: 'https://www.goldapi.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/goldapi/, '/api'),
        secure: true
      },
      // Proxy GoldPrice.org requests to bypass CORS
      '/goldprice': {
        target: 'https://data-asg.goldprice.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/goldprice/, ''),
        secure: true
      }
    }
  }
});
