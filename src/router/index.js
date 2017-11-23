import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from './../components/Main/Main';

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Main}
    ]
})
