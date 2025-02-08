import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'], // Ponto de entrada do seu projeto
  format: ['esm', 'cjs'], // Formatos de saída (ESM e CommonJS)
  dts: true, // Gera arquivos de definição de tipos (.d.ts)
  splitting: false, // Desativa a divisão de código (opcional)
  sourcemap: true, // Gera sourcemaps (opcional)
  clean: true, // Limpa a pasta de saída antes de cada build
  external: ['react', 'react-dom', '@stitches/react'], // Dependências externas
})
