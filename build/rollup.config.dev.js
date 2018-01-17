// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'Component',
    },
    plugins: [
        resolve(),
        postcss({
            plugins: []
        }),
        babel({
            exclude: 'node_modules/**'
        }),
    ]
};