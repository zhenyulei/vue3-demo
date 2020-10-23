<template>
  <div>
      <ul>
        <li v-for="(item,index) in desc" :key="index">{{item.name}}--{{item.age}}</li>
      </ul>
      <p>{{obj.name}}--{{obj.age}}</p>
      <button @click="clickme">点击me</button>
  </div>
</template>
<script>
import {ref} from 'vue' 
export default {
  setup(){
    const desc = ref([
      {
      name:'xiaohua',
      age:12
      },
      {
      name:'xiaowang',
      age:22
      }
    ]);
    const obj = ref({
      name:"lili"
    });
    function clickme (){
      desc.value[2] = {
        name:"小王",
        age:33
      }
      obj.value.age = 24
    }
    return {
      obj,
      desc,
      clickme
    }
  }
}
</script>