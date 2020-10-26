<template>
  <div class="home">
    <Child31 gender="child" age="22" v-highlight="'green'"/>
  </div>
</template>

<script>
import Child31 from './children/child31.vue'
export default {
  components: {
    Child31,
  },
  directives: {
    highlight: {
      // 指令的定义
      beforeMount(el, binding, vnode) {
        el.style.background = binding.value
    }
    }
  }
}
</script>