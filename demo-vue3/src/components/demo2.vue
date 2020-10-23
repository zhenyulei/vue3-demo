<template>
    <div>
        <p class="demo"> {{ age }} --{{data.counter}}</p>
    </div>
</template>

<script>
import {
    ref,
    reactive,
    toRefs,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onRenderTracked,
    onRenderTriggered,
} from 'vue';

export default {
    setup() {
        const age = ref(1)//设置响应式变量
        const data = reactive({
          counter:10
        })

        console.log('setup')

        onBeforeMount(() => {
            console.log(document.querySelector('.demo'),'onBeforeMount')
        })
        onMounted(() => {
            console.log(document.querySelector('.demo'),'onMounted')
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
        onRenderTracked((e) => {
            console.log(e)
            console.log('onRenderTracked')
        })
        onRenderTriggered((e) => {
            debugger
            console.log(e)
            console.log('onRenderTriggered')
        })

        // 测试 update 相关钩子
        setTimeout(() => {
            age.value = 20;
            data.counter = 30;
        }, 2000)

        return {
          data,
          age
        }
    },
}
</script>