<template>
    <div class="wrapper">
        <template v-for="item in list">
            <span :key="item.id">{{item.name}}</span>
            <span :key="item.id">{{item.id}}</span>
            <br :key="item.id"/>
        </template>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {            
           list:[
            {
                name:'xiaohua',
                id:12
            },
            {
                name:'xiaowang',
                id:22
            }
           ]
        }
    },
    methods: {
    }
}
</script>