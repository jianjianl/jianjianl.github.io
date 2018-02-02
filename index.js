import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'component/app.vue';
import router from 'router.js';

Vue.use(VueRouter);

new Vue({
    el: "#blog",
    router,
    render: h => h(App)
});