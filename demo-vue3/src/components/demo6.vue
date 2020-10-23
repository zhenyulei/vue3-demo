<template>
  <div>
      <Child6 className="my-class" :msg="parentMsg" word="你好" @myClick="changeMsg" isShow>
      </Child6>
  </div>
</template>

<script>
import Child6 from './children/child6.vue'
export default {
  components: {
    Child6
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