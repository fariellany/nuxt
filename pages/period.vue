<template>
    <h1>渲染周期</h1>
</template>
<script>
export default {
    head() {
         console.log('head======>');
    },
    data() {
        console.log('data======>');
        return {
           name:'张三'
         }
    },
    async asyncData() {
         console.log('async asyncData======>');
    },
    // computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，
    // 然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
    computed:{
       init(){
         console.log('computed');
       }
    },
    methods:{
      add(){
        console.log('methods');
      }
    },
    watch:{
      // 监听必须的data里面已经声明了的
      name:(newVal,oldVal)=>{

      },
      add:()=>{
        console.log('watch 监听属性');
      }
    },
    created(){
      console.log('created');
    },
    beforeCreate() {
    console.log('beforeCreate')
  },
}

// * 在服务器上面 （ssr）nuxt 加上了 asyncData特有的函数
// async asyncData======>
// beforeCreate
// data======>
// created
// head=====>

// * 在客户端上
// beforeCreate
// data======>
// created
// head=====>

// * vue 自带的函数作用

//  var vm = new Vue({
//       el: '#app',// 控制区域
//       data: {},// 定义数据
//       methods: {},// 定义方法
//       filters: {},// 定义私有过滤器
//       directives: {},// 定义私有指令
//       components: { }, // 定义实例内部私有组件的

//       beforeCreate() { },// 实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
//     ? created() { }, //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
//       beforeMount() { },// 此时已经完成了模板的编译，但是还没有挂载到页面中
//     ? mounted() { },// 此时，已经将编译好的模板，挂载到了页面指定的容器中显示
//       beforeUpdate() { },// 状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
//     ? updated() { },// 实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
//       beforeDestroy() { },// 实例销毁之前调用。在这一步，实例仍然完全可用。
//       destroyed() { }, //Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
//     })
</script>


