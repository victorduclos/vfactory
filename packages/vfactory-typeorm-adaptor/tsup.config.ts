import { defineConfig, Options } from 'tsup';

const isProduction = (options: Options): boolean => options.env?.NODE_ENV === 'production';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'es6',
  watch: !isProduction(options),
  sourcemap: true,
  minify: false,
  dts: true
}));
