import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import async from 'rollup-plugin-async';
import commonjs from 'rollup-plugin-commonjs';


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'Component',
  },
  plugins: [
    postcss({
      extract: false,
      modules: true,
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    async(),
  ],
};
