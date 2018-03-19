import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import async from 'rollup-plugin-async';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'Component',
  },
  plugins: [
    resolve(),
    postcss({
      extract: false,
      modules: true,
    }),
    async(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
