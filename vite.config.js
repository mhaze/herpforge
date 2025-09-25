// vite.config.js
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => ({
  plugins: mode === 'production' ? [createHtmlPlugin({ minify: true })] : [],
  server: { port: 5173 },
}));
