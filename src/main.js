import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
// router 拦截，每次跳转置顶
router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0)
    next()
})
// 全局注册elementUI
Vue.use(ElementUI);
//创建一个axios实例
var axioss = axios.create({
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.prototype.$axios = axioss;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
