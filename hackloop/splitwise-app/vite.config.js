import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dashboard from './src/dashboard';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Main page entry
        new:'inde.html', 
        split:'split.html',// New page entry
        recent:'recent.html',
        dashboard:'dashboard.html'
      },
    },
  },
});
