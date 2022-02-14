<template>
  <div>
    <h3>{{fullName}}</h3>
    <button @click="changeFirstName">修改firstName</button>
    <button @click="changeLastName">修改lastName</button>
  </div>
</template>

<script>
  import { ref, computed, watchEffect } from 'vue'
  export default {
    setup() {
      const firstName = ref('Kobe')
      const lastName = ref('Bryant')
      const fullName = computed(() => firstName.value + ' ' +  lastName.value)

      const changeFirstName = () => {
        firstName.value = 'James'
      }
      const changeLastName = () => {
        lastName.value = 'ssss'
      }
      // watchEffect: 自动收集响应式的依赖
      watchEffect(() => {
        console.log("firstname:", firstName.value, 'lastname:', lastName.value)
      })
      return {
        firstName,
        lastName,
        fullName,
        changeFirstName,
        changeLastName
      }
    }
  }
</script>

<style scoped>

</style>