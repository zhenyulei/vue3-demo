<template>
  <div>
    <p>{{desc}}</p>
    <p>{{descSec}}</p>
    <button @click="clickme">点击me</button>
  </div>
</template>
<script>
import {ref} from 'vue' 
export default {
  setup(){
    const desc = ref('描述的信息');
    const descSec = "不会变化的信息"
    function clickme (){
      desc.value = "改变的信息";
      descSec = "变化的"
    }
    return {
      desc,
      descSec,
      clickme
    }
  }
}
</script>