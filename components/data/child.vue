<!-- 子组件 -->
<template>
<div class="testCom">
    <input type="text" v-model="message" />
    <button @click="click">Send</button>
    <br/>
    <button @click="getParentMsg">点击获取父组件内容</button>
    <br/>
    <button @click="getslot">获取子组件slot内容</button>
</div>
</template>
<script>
export default {
    name: "Detai",  /* 指组件自身组件调用自身组件 递归调用自己*/
    // 子组件声明属性 ['name']
    props:{
      age:Number,
      name: {
         type: String,
         default: '王二' // TODO: 没有效果
    },
      userName:String,
    },
    data() {
      console.log(this.name,'this.name');
      console.log(this.userName,'this.userName');
        return {
          // 默认
          message: '我是来自子组件的消息'
        }
    },
    methods: {
      click() {
            this.$emit('childFn', this.message);
      },
      childMethods() {
            alert("子组件的方法")
       },
       getslot() {
         // 子组件内容
         console.log(this.$slots.default[0].text,'this.$slots.default');
       },
      getParentMsg() {
          console.log(this.$parent.parentMsg,'父组件内容')
          this.$parent.parentMsg='子组件可以修改父组件的内容信息'
          this.message=this.$parent.parentMsg  // 替换到子组件内容上面
       },
    }
}
</script>
