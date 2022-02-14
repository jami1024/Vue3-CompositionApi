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
      
      const name = ref('ref Test')
      watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName)
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