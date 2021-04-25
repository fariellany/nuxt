<template>
      <div>
         <render>
           <!--
             this.$slots.childheader => 头部
            -->
            <h1 slot="childheader">头部</h1>
            <h2 slot="childbody">中部</h2>
            <h3 slot="childfooter">底部</h3>
            <slot>
              只有在没有内容分发的时候我才会出现
            </slot>
        </render>
      </div>
</template>

<script lang="ts">
import render from './../components/render/index.vue'

export default {
  components:{
    render
  }
}
</script>
