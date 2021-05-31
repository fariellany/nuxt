
<template>
   <div>
    <input type='text' v-model="firstName" />
    <br/>
    <input type='text' v-model="lastName" />
     <br/>
    <input type='text' v-model="fullName" />
     <br/>
    <button>按钮</button>
   </div>
</template>
<script>

// https://www.cnblogs.com/jiajialove/p/11327945.html

export default {
    data() {
        return {
          firstName:"张",
          lastName: '王',
        }
    },
    // watch一般用于监控路由、input输入框的值特殊处理
    // 它比较适合的场景是一个数据影响多个数据
    // 只能监控整个对象或单个变量
    // ? 必须是data 里面定义的 或者外部的父组件传递过来的props中的数据
    watch:{
      lastName:(newval,oldval)=>{
        console.log(newval,'newval');
      }
    },
    // computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义
    // 然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
    // ? 有类似缓存缓存的意思 可以将复杂的计算等缓存下来
    // todo fullName 不可在data里面定义
    computed:{
     fullName(){ // 相当于 fullName: function(){}
       console.log('fullName');
       return `${this.firstName}+${this.lastName}`
     }
    }
}
</script>

  <!--
  * 计算属性computed :
    ? 1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
    ? 2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
    ? 3.computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
    ? 4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
    ? 5.如果computed属性属性值是函数，那么默认会走get方法；
   // 函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。

  * 侦听属性watch：
      1. 不支持缓存，数据变，直接会触发相应的操作；
      2. watch支持异步；
      3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
      4. 当一个属性发生变化时，需要执行对应的操作；一对多；
      5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据

  * 总结
      computed的话是通过几个数据的变化，来影响一个数据
      watch，则是可以一个数据的变化，去影响多个数据
   -->

