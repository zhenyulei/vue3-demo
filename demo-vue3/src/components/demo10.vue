<template>
  <div>
    <h1>{{ data.counter }}</h1>
    <button @click="clickme">点击me</button>
  </div>
</template>
<script>
import {reactive, onMounted,isRef,ref} from 'vue' 
export default {
  setup(){
    const data= reactive({
      counter :10,
    })
    function clickme (){
      data.counter += 1;
    }
    const myFlag = ref(false);
    onMounted(()=>{
      const currState = isRef(myFlag) ? "myFlag是ref代理数据" : "myFlag不是ref代理数据";
      const currCounter = isRef(data.counter) ? "counter是ref代理数据" : "counter不是ref代理数据";
      console.log(currState,currCounter);
    })
    return {
      data,
      clickme
    };
  }
}
</script>