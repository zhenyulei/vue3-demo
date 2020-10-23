<template>
  <div>
      <button @click="clickMe">点击我</button>
      <Child17 v-if="isShow"></Child17>
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from "vue";
import ErrorComponent from './children/ErrorComponent.vue'
import LoadingComponent from './children/LoadingComponent.vue'

// 待配置的异步组件
const asyncPageWithOptions = defineAsyncComponent({
  loader:()=>import('./children/child17.vue'),
  delay: 2000, //展示加载时组件,也就是loading组件的延时时间。默认值是 200 (毫秒)
  timeout: 7000, //如果提供了超时时间且组件加载也超时了，则展示error 组件
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})

export default {
  name: 'App',
  components: {
    Child17: asyncPageWithOptions,
  },
  setup(){
    const isShow = ref(false);
    function clickMe(){
      isShow.value = true
    }
    return {
      isShow,
      clickMe
    }
  }
}
</script>