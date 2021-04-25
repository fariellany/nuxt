
<template>
  <div>
    <slot-child>
      <div>这是一个链接</div>
      <div slot="middle" >这个是中间的内容</div>
    </slot-child>
  </div>
  <!-- todo: 为什么没用 -->
</template>
<script>
import slotChild from '../components/solt/index.vue'

export default {
    data() {
        return {
          message: 'slot'
        }
    },
    components:{
       slotChild
    }
}
</script>



