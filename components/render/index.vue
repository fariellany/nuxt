<script>
export default {
  name: 'render',
  // // 函数组件
  // functional: true,
  // props: {
  //   type: {
  //     type: String,
  //     default: 'google_play'
  //   },
  //   lang: {
  //     type: String,
  //     default: 'en'
  //   }
  // },
  // h => createElement
  render: function(h) {
            let childheader = this.$slots.childheader,
                childbody = this.$slots.childbody,
                childfooter = this.$slots.childfooter;
            return h(
                'div', {
                    class: 'child',
                    style: {
                        width: '100%'
                    },
                }, [
                    // 自定义a的标签
                    h('a', {
                      class:'',
                      style:{color:'red'},
                      attrs:{
                         target: '_blank',
                         href: 'https://baidu.com'
                      }
                    },'百度一下'),
                    h('div', childfooter),
                    h('div', childheader),
                ]
            )
        }
};
</script>


<style scoped>
.child {
    background: pink
}
.h1 {
    background: red
}
</style>

  <!--
   Vue 函数式组件 functional
    1:函数式组件
    2: 无状态
    3: 无法实例化
    4:内部没有任何生命周期处理函数
    5:轻量,渲染性能高,适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)

   特点：
    1：  在template标签里标明functional
    2:  只接受props值
    3:  不需要script标签
   -->
