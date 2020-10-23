<template>
    <div>
        <div class="wrapper">
            <ul>
                <li v-for="(item,index) in desc" :key="index">{{item.name}}--{{item.age}}</li>
            </ul>
            <p>{{obj.name}}--{{obj.age}}</p>
            <button @click="clickme">点击me</button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {            
           desc:[
            {
                name:'xiaohua',
                age:12
            },
            {
                name:'xiaowang',
                age:22
            }
           ],
           obj:{
               name:"小王"
           }
        }
    },
    methods: {
        clickme(){
            //新增数据
            this.desc[2]={
                name:"小王",
                age:23
            }
            //修改数据
            this.desc[0]={
                name:'小王',
                age:23
            }
            //修改obj数据
            this.obj.age= 24
        }
    }
}
</script>