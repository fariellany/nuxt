<template>
    <div>
        <h1>姓名：{{info.name}}</h1>
        <h2>年龄：{{info.age}}</h2>
        <p><nuxt-link to='/'>Home</nuxt-link></p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  //  asyncData 比 data 先执行

 head() {
    console.log('head======>');
      return {
        title: '自定义title',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
    data() {
        console.log('data======>');
        return {
            name: '张三',
        }
    },
    async asyncData(context) {
         console.log('async asyncData======>');
         const {data} = await axios.get('http://apis.juhe.cn/idioms/query')
         console.log(data,'data');
        return {info:{name:'李四',age:10}}
    },
}
// async asyncData => data=> body
</script>
