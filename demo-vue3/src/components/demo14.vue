<template>
  <div>
    <p>{{counter}}</p>
    <p>{{doubleCounter}}</p>
    <button @click="clickme">点击me</button>
  </div>
</template>
<script>
import {reactive,computed,toRefs} from 'vue' 
export default {
  setup(){
    const data= reactive({
      counter :10,
    })
    const doubleCounter = computed(()=>data.counter * 2)
    function clickme (){
      data.counter +=1;
    }
    return {
      ...toRefs(data),
      doubleCounter,
      clickme
    }
  }
}
</script>