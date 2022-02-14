<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'
  export default {
    setup() {
      const title = ref(null)
      // watchEffect: 自动收集响应式的依赖
      watchEffect(() => {
        console.log('titel', title.value)
      }, {
        flush: 'post'
      })
      return {
        title
      }
    }
  }
</script>

<style scoped>

</style>