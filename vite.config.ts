import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configuration pour HTTP/2+ et optimisations
  preview: {
    port: 4173,
    host: true,
    headers: {
      'Cache-Control': 'max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  build: {
    // Utiliser esbuild pour de meilleures performances (plus rapide que terser)
    minify: 'esbuild',
    // Optimisations pour HTTP/2 push
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide-icons': ['lucide-react'],
          'helmet': ['react-helmet-async'],
        },
        // Optimiser pour HTTP/2 multiplexing
        compact: true,
      },
    },
    // Optimiser la taille des chunks pour HTTP/2
    chunkSizeWarningLimit: 300,
    // Optimisations supplémentaires
    cssCodeSplit: true,
    sourcemap: false, // Désactiver les sourcemaps en production pour réduire la taille
    // Compression pour HTTP/2
    reportCompressedSize: true,
  },
  // Optimisations du serveur de dev
  server: {
    warmup: {
      clientFiles: ['./src/App.tsx', './src/main.tsx'],
    },
    // Support HTTP/2 en développement
    https: false, // Activez https: true si vous avez des certificats SSL locaux
  },
});
