<template>
  <div>
    <h3>{{fullName}}</h3>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'
  export default {
    setup() {
      const firstName = ref('Kobe')
      const lastName = ref('Bryant')
      const fullName = computed(() => firstName.value + ' ' +  lastName.value)

      const changeName = () => {
        firstName.value = 'James'
      }
      return {
        firstName,
        lastName,
        fullName,
        changeName
      }
    }
  }
</script>

<style scoped>

</style>