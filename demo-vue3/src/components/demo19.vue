<template>
    <div class="wrapper">
        <template v-for="item in list" :key="item.id">
            <span>{{item.name}}</span>
            <span>{{item.id}}</span>
            <br/>
        </template>
    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    components: {},
    setup(){
        const list = ref([
        {
            name:'xiaohua',
            id:12
        },
        {
            name:'xiaowang',
            id:22
        }
        ])
        return {
            list
        }
    }
}
</script>