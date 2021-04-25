
<template>
  <div>
    <slot name='left'>左边 这是是子组件默认的</slot>
    <h3> <slot name='middle'></slot></h3>
    <h3> <slot name='right'></slot></h3>
    <a href=“#”><slot></slot> </a>
    <button @click="getSlot">获取default slot</button>
  </div>
</template>
<script>
export default {
  name:'slotChild',
    data() {
        return {
          message: 'slot'
        }
    },
    methods:{
      // 表示插槽在父组件中使用了多少次
      // default为默认使用的
      getSlot(){
        console.log(this.$slots,'this.$slots');
      }
    }
}
</script>

<!--
    匿名插槽
     <slot></slot>
    具名插槽
    <slot name="up"></slot>

    this.$slots 中default的区别？
-->


