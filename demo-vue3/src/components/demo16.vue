<template>
  <div>
      <p>{{count}}</p>
      <p>{{myCount}}</p>
      <p>{{name}}--{{age}}</p>
      <button @click="clickMe">点击我</button>
  </div>
</template>
<script>
import {reactive,ref,toRefs,readonly,watchEffect} from 'vue' 
export default {
  setup(){
    const original = readonly(reactive({ count: 10 }))
    const myCount = readonly(ref(0))
    const copy = readonly(reactive({
      name:"小花",
      age:12
    })) 
    let aa = readonly("123")
    function clickMe(){
      original.count++
      myCount.value++
      copy.age++ // warning!
      aa = 'hello'
      console.log(aa);
    }
    return {
      myCount,
      ...toRefs(original),
      ...toRefs(copy),
      clickMe
    }
  }
}
</script>