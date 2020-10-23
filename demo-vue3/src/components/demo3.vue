<template>
  <div>
      <Child3 :msg="parentMsg"></Child3>
      <button @click="myClick">点击我</button>
  </div>
</template>

<script>
import Child3 from './children/child3.vue'
export default {
  components: {
    Child3
  },
  data(){
    return{
      parentMsg:"原始数据"
    }
  },
  methods:{
    myClick(){
      this.parentMsg = '改变后的数据'
    }
  }
}
</script>