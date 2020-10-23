<template>
  <div>
    <div>记数：{{ count }}</div>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
  </div>
</template>

<script>
import {reactive,ref, toRefs} from 'vue' 
export default {
  setup() {
    const count = ref(100);
    const data = reactive({
      name:"小花",
      age:12,
    })
    return {
      count,
      ...toRefs(data)
    }
  }
}
</script>