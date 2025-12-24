import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import nested from 'postcss-nested';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VueCCard',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    url({
      include: ['**/*.svg'],
      limit: 0,
      fileName: '[name][extname]',
    }),
    nodeResolve(),
    vue({
      css: false,
      postcssPlugins: [nested()],
    }),
    postcss({
      plugins: [nested()],
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.vue'],
    }),
  ],
  external: ['vue'],
};
