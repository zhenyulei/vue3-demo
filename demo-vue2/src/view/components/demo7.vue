<template>
  <div>
    <p v-for="item in renderData" :key="item.name" ref="nodes" :class="item.name+'-item'">{{item.name}}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            renderData: [
                { name: 'a' },
                { name: 'b' },
                { name: 'c' },
                { name: 'd' },
                { name: 'f' }
              ]
        }
    },
    mounted(){
      console.log(this.$refs.nodes)
    }
}
</script>