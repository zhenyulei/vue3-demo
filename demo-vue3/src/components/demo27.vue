<template>
  <ul>
    <li 
      v-for="item in list" 
      :ref="setItemRef" 
      :key="item" 
      :class="item===1?'list-li':''"
    >{{item}}</li>
  </ul>
</template>
<script>
import {ref, onMounted} from 'vue'
export default {
  setup(){
    const list = ref([1,2,3,4]);
    let itemRefs = []
    const setItemRef = el => {
      itemRefs.push(el)
    }
    onMounted(() => {
      console.log(itemRefs)
    })
    return {
      list,
      setItemRef,
    }
  }
}
</script>