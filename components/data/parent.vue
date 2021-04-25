<!-- 父组件 -->
<template>
    <div class="test">
      <!-- 向子组件里面传值 -->
      <!--
        驼峰命名 也可以获取到
        userName ==> :user-name 添加属性

        v-on:parentFn ==> @childFn="parentFn"
       -->
      <child
         ref='el'
         @childFn="parentFn"
         :name='name'
         :age='age'
         :user-name='userName'
      >
      这是子内容信息
      </child>
      <button @click="parentClick">点击父组件</button>
      <br/>
      <button @click="getchild">点击获取子组件内容</button>
      <br/>
      子组件传来的值 : {{message}}
    </div>
</template>

<script>
import child from './child'
export default {
    // 父组件
    data() {
        return {
             message: '这是条初始化默认消息',
             name:"", // 使用 子组件默认的
             age:18,
             userName:'全名',

             parentMsg:'父组件消息'
        }
    },
    methods: {
       parentFn(payload) {
        this.message = payload;
      },

      parentClick(){
       console.log(this.$refs.el,'this.$refs.el')
       // 通过$ref 调用子组件的方法
        this.$refs.el.childMethods();
      },

      getchild(){
        console.log(this.parentMsg,'被子组件修改的父组件内容信息')
        console.log(this.$children[0],'this.$children[0]')
      },
    },
    components:{
      child
    }
}
</script>
 <!--
  组件传值的方式
    1: 正常的父组件向子组件传值
      1-1. 在子组件写上属性，然后使用 props获取
      1-2. 直接在子组件中通过 this.$parent 获取
    2: 子组件向父组件传值
      2-1. 子组件使用this.$emit
    3. 父组件调用子组件的方法通过ref => this.$refs.el获取
    4. 在父组件中获取子组件的方法和属性？
       4-1. 通过 this.$children  方法获取 => 返回的是一个数组
    5. 注册 vue 全局事件(eventBus)
  -->
