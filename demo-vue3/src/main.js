//常规入口文件
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
createApp(App).mount('#app')


//全局api示例
// import { createApp } from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'
// import './index.css'
// const app = createApp(App)
// app.mixin({
//     created: function () {
//         if(this.$options.name){
//             console.log(this.$options.name);
//         }
//     }
// })
// app.mount('#app')

// const app2 = createApp(App2)
// app2.mount('#vue3')


//自定义指令
// import { createApp } from 'vue'
// import App from './App.vue'
// const app = createApp(App)
// app.directive('highlight', {
//     beforeMount(el, binding, vnode) {
//         el.style.background = binding.value
//     }
// })
// app.mount('#app')

