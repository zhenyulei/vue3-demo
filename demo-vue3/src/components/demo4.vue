<template>
  <div>
      <Child4 className="my-class" :msg="parentMsg" word="你好" @myClick="changeMsg" isShow>
        <div>我是slot外部第一行内容</div>
        <span>我是slot的第二行内容</span>
      </Child4>
  </div>
</template>

<script>
import Child4 from './children/child4.vue'
export default {
  components: {
    Child4
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