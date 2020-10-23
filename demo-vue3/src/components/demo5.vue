<template>
  <div>
      <Child5 className="my-class" :msg="parentMsg" word="你好" @myClick="changeMsg" isShow>
      </Child5>
  </div>
</template>

<script>
import Child5 from './children/child5.vue'
export default {
  components: {
    Child5
  },
  data(){
    return{
      parentMsg:"hello vue3"
    }
  },
  methods:{
    changeMsg(parmas){
      console.log("父组件文案--"+parmas) 
    }
  }
}
</script>