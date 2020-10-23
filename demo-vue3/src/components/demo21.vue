<template>
  <div>
    <p>父组件内容</p>
    <Child21>
      <template v-slot:header>父组件header的内容</template>
      父组件的slot
      <template v-slot:footer>父组件footer的内容</template>
    </Child21>
  </div>
</template>
<script>
import Child21 from "./children/child21.vue"
export default {
  components:{
    Child21
  }
}
</script>