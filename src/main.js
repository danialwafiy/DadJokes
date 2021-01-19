import Vue from 'vue'
import App from './App.vue'
import './css/index.css'
import VueRouter from 'vue-router';
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: require('./components/Home').default
  },
  {
    path:'/jokes',
    component: require('./components/Joke').default
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
