<template>
  <div>
    <div class="my-content">我是内容{{myModel}}---{{modelValue}}</div>
    <input type="text" @input="$emit('update:modelValue',$event.target.value)" />
    <button @click="$emit('update:myModel','new value')">点击我</button>
  </div>
</template>
<script>
import {ref,onMounted,nextTick} from 'vue' 
export default {
  props:{ //这里声明props
    myModel:String,
    modelValue:String,
  },
  setup(props,cxt){
    console.log(props.myModel);
  }
}
</script>