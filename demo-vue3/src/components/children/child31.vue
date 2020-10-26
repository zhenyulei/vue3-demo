<template>
     <div>gender: {{$attrs['gender']}}</div>
     <div v-bind="$attrs">age: {{$attrs['age']}}</div>
</template>
<script>
import {onMounted} from 'vue'
export default {
    setup(props,ctx){
        onMounted(()=>{
            console.log(ctx);
        })
    }
}