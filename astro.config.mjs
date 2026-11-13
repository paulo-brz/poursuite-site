import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://poursuite.com.br',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
