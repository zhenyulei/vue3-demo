<template>
    <div class="wrapper">
        <template v-for="(item,index) in list" v-if="item>2">
            <div :key="index">{{item}}</div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {            
           list:[1,2,3,4,5]
        }
    }
}
</script>