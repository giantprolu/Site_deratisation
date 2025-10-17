import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Utiliser esbuild pour de meilleures performances (plus rapide que terser)
    minify: 'esbuild',
    // Code splitting pour améliorer INP
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide-icons': ['lucide-react'],
          'helmet': ['react-helmet-async'],
        },
      },
    },
    // Optimiser la taille des chunks
    chunkSizeWarningLimit: 500,
    // Optimisations supplémentaires
    cssCodeSplit: true,
    sourcemap: false, // Désactiver les sourcemaps en production pour réduire la taille
  },
  // Optimisations du serveur de dev
  server: {
    warmup: {
      clientFiles: ['./src/App.tsx', './src/main.tsx'],
    },
  },
});
