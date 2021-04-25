<template>
      <div>
      <parent></parent>
      <common></common>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import parent from './../components/data/parent.vue';
// import common from './../components/global/common.vue'

// 挂载全局属性
// Vue.use(common)

export default {
  components:{
    parent
  }
}
</script>
