<template>
  <input type="text" ref="myInput"/>
</template>
<script>
import {ref, onMounted} from 'vue'
export default {
    mounted(){
        console.log(this.$refs.myInput)
        this.$refs.myInput.focus();
    }
}
</script>