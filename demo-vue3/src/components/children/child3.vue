<template>
  <div>
    我是子页面
    <p>{{msg}}</p>
  </div>
</template>
<script>
import {watch,watchEffect} from 'vue' 
export default {
  props:{
    msg:String
  },
  setup(props, ctx) {
    const {msg} = props;
    //解构取值后，失去响应性
    watch(()=>msg, (val,oldVal)=>{
      console.log(`watch：解构取值后，失去响应性，oldval =  ${oldVal} ，val = ${val}`);
    })
    watch(()=>props.msg, (val,oldVal)=>{
      console.log(`watch：具有响应性，oldVal= ${oldVal} ，val= ${val}`);
    })
    watchEffect(() => {
      console.log(`watchEffect：具有响应性 props.ms: ` + props.msg) // Will not be reactive!
      console.log(`watchEffect：失去响应性 msg is: ` + msg) // Will not be reactive!
    })
  }
}
</script>