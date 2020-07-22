import commonjs from 'rollup-plugin-commonjs'; // Converte módulos CommonJS para ES6
import vue from 'rollup-plugin-vue'; // Manipula arquivos .vue
import buble from 'rollup-plugin-buble'; // Transpila com considerável suporte a navegadores
export default {
  input: 'src/wrapper.js', // Caminho relativo ao package.json
  output: {
    name: 'VueCCard',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Dinamicamente injeta CSS como uma tag <style>
      compileTemplate: true, // Explicitamente converte template para função render
    }),
    buble(), // Transpila para ES5
  ],
};
