import './public-path';
import Vue from 'vue'
import App from './App.vue';
import router from './router';

let instance = null;
function render(props) {
  instance=new Vue({
    router,
    render:h=>h(App)
  }).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy()
}