import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store';
import MyApp from "./myApp.vue";
import "./view/components/highlight.js"

//常规demo
Vue.config.productionTip = false
export default new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})


//全局api示例
// Vue.mixin({
//     created: function () {
//       var myOption = this.$options.el
//       if (myOption) {
//         console.log(myOption)
//       }
//     }
// })
// // 阻止 vue 在启动时生成生产提示
// Vue.config.productionTip = false
// export default new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(App)
// })
// new Vue({
//     el: '#vue',
//     render: h => h(MyApp)
// })
