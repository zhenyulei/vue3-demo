<template>
    <div class="wraper">
      <div v-for="(item,index) in list" v-if="item>1" :key="index">
          <div>{{item}}</div>
      </div>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
    const list = ref([1,2,3,4,5])
    return {
      list
    }
  }
}
</script>