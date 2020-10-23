<template>
  <div>
    <h1>{{ data.counter }}</h1>
    <button @click="clickme">点击me</button>
  </div>
</template>
<script>
import {reactive} from 'vue' 
export default {
  setup(){
    const data= reactive({
      counter :10,
    })
    function clickme (){
      data.counter += 1;
    }
    return {
      data,
      clickme
    };
  }
}
</script>