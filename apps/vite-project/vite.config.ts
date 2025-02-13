import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['react-strict-dom/babel-preset']
      }
    }),
    babel({
      include: /node_modules\/react-strict-dom(-svg)?/
    })
  ]
});
