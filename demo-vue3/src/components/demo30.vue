<template>
<div>
     组件的内容
     <br>
     <span 
        @vnodeBeforeMount="mybeforeMount"
        @vnodeMounted="myMounted" 
        @vnodeUpdated="myUpdated"
     >age: {{number}} </span>
  </div>
</template>
<script>
import {onMounted,ref} from 'vue'
export default {
    setup(props,ctx){
        const number = ref(0);
        setTimeout(()=>{
            number.value++;
        },2000)
        function mybeforeMount(){
            console.log('自定义指令');
        }
        function myMounted(el){
            el.el.style.backgroundColor="red"
        }
        function myUpdated(el){
            console.log(el.el);
        }
        return{
            number,
            mybeforeMount,
            myMounted,
            myUpdated
        }
    }
}
</script>