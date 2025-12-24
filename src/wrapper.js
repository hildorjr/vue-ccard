import component from './vue-ccard.vue';

function getVueVersion(vue) {
  if (!vue || !vue.version) return null;
  const major = parseInt(vue.version.split('.')[0], 10);
  return major;
}

export function install(app) {
  if (install.installed) return;
  install.installed = true;

  const vueVersion = getVueVersion(app);
  
  if (vueVersion !== 2 && vueVersion !== 3) {
    throw new Error('vue-ccard requires Vue 2 or Vue 3');
  }

  app.component('VueCCard', component);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default component;
