import Vue from 'vue'
import VueRouter from 'vue-router'

import { Header, Button, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../assets/mui-master/dist/css/mui.min.css'
import '../assets/download/font_1268971_93r6kqdx1hj/iconfont.css'

Vue.use(VueRouter)

import app from './App.vue'

//导入router.js路由模块
import router from './router'

let vm = new Vue({
    el: "#app",
    data: {
        msg: "世上无难事，只要肯攀登"
    },
    render: c => c(app),
    router//挂载路由对象到vm实例上
})