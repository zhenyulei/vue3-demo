import { h, reactive} from 'vue'
export default {
    setup(props,ctx){
        const state = reactive({
            count: 0
        })
        function increment() {
            state.count++
        }
        return ()=>
            h(`h1`, {
                class: ['button', 'is-outlined'],
                style: { color: 'red' },
                id: 'submit',
                onClick: increment,
                key: 'submit-button'
            }, [
                '信息:'+ state.count +'年龄：'+ props.currAge,
                h(
                    `p`,
                    ctx.attrs,
                    ctx.slots
                )
            ])
    },
    props: {
        currAge:String
    }
}