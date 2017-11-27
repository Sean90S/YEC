import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from './../components/Main/Main';
import Home from './../components/home/home';

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',  // 根目录
            name: 'main',
            component: Main,
            children: [
                {path: 'home', name: 'home', component: Home},  // 首页
            ]
        }
    ]
})
