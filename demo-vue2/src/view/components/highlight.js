Vue.directive('highlight', {
    //指令绑定到元素后发生。只发生一次。
    bind(el, binding, vnode) {
      el.style.background = binding.value
    },
    inserted(el){
      //元素插入父 DOM 后发生。
      console.log(el.parentNode);
    },
    update(){
      //当元素更新，但子元素尚未更新时，将调用此钩子。
    },
    componentUpdated(){
      //一旦组件和子级被更新，就会调用这个钩子。
    },
    unbind(){
      //一旦指令被移除，就会调用这个钩子。也只调用一次。
    }
})