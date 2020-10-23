<template>
    <div>
        <div>记数：{{ count }}</div>
        <div>姓名：{{ data.name }}</div>
        <div>年龄：{{ data.age }}</div>
    </div>
</template>

<script>
import {reactive,ref} from 'vue' 
export default {
  setup(props,ctx) {
    const count = ref(100);
    const data = reactive({
      name:"小花",
      age:12,
    })
    return {
      count,
      data
    }
  }
}
</script>