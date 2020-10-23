<template>
  <div>
    <div>来自于父组件的props--{{msg}}</div>
    <slot>我是子组件的slot内容</slot>
  </div>
</template>
<script>
export default {
  props:{
    msg:{
      type:String,
      default:''
    },
    word:{
      type:String,
      default:'o'
    },
    myClick:{
        type:Function,
        ddefault:()=>{}
    }
  },
  setup(props,context){
    //声明了props和emits之后，这里attrs获取属性
    console.log(context.attrs.className)
    console.log(props.word)
    console.log(props.msg)
    // 根据上下文获取插槽
    console.log(context.slots.default())
    // 根据上下文触发事件 (方法)
    context.emit('myClick','自组件传出去的参数')
  }
}
</script>