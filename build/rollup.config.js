import commonjs from '@rollup/plugin-commonjs';
import vue from '@rollup/plugin-vue';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VueCCard',
    exports: 'named',
  },
  plugins: [
    nodeResolve(),
    vue({
      css: true,
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
