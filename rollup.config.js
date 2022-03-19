import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

const PRODUCTION = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/jobs-explorer/main.js',
  output: {
    file: 'src/jobs-explorer/dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !PRODUCTION,
      },
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
  ],
};
