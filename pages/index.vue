<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        next
      </h1>
      <!-- <parent></parent> -->
      <common></common>
      <render-demo></render-demo>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import parent from '../components/data/parent.vue';
import renderDemo  from './../components/render/index.vue';

// 注册全局组件
Vue.component('render-demo', renderDemo)

// Vue.use() 一般注册插件

// 注册全局事件
globalThis.eventBus = new Vue();

export default Vue.extend({
  components:{
    parent
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
