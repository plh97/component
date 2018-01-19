// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'Component',
    },
    plugins: [
        resolve(),
        postcss(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
};