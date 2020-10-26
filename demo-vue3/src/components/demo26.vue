<template>
  <input type="text" ref="myInput" data-value="input-number"/>
</template>
<script>
import {ref, onMounted} from 'vue'
export default {
  setup(){
    const myInput = ref(null);
    onMounted(()=>{
      console.log(myInput.value);
      myInput.value.focus();
    })
    return {
      myInput
    }
  }
}
</script>