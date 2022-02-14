<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <button @click="chanageData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watchEffect, watch } from 'vue'
  export default {
    setup() {
      const info = reactive({
        name: 'why',
        age: 18
      })
      // 1.侦听watch时，传入一个getter函数
      // watch(() => info.name, (newValue, oldValue) => {
      //   console.log('new', newValue, 'old', oldValue)
      // })
      // 2.传入一个可响应式对象：ref对象
      // 2.1 reactive 对象获取到的new和old本身都是reactive
      
      // watch(info, (newValue, oldValue) => {
      //   console.log('new', newValue, 'old', oldValue)
      // })

      // 2.2 ref对象获取到的new和old本身式value值
      const name = ref('ref Test')
      watch(name, (newValue, oldValue) => {
        console.log('new', newValue, 'old', oldValue)
      })
      const chanageData = () => {
        name.value = 'zhangsan'
      }
      return {
        chanageData,
        info,
        name
      }
    }
  }
</script>

<style scoped>

</style>