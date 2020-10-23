<template>
  <div>
    <p>父组件内容</p>
    <Child4>
      <template v-slot:header>父组件header的内容</template>
      父组件的slot
      <template v-slot:footer>父组件footer的内容</template>
    </Child4>
  </div>
</template>
<script>
import Child4 from "./children/child4.vue"
export default {
  components:{
    Child4
  }
}
</script>