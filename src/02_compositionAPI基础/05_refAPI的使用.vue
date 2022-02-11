<template>
    <div>
      <h1>Home page</h1>
      <h2>{{message}}</h2>
      <h2>{{title}}</h2>
      <h2>当前计数：{{counter}}</h2>
      <button @click="increment">+1</button>
    </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    setup(props, context) {

      const counter = ref(100)
      // 局部函数
      const increment = () => {
        console.log('+1')
        counter.value++
      }
      return {
        title: '这是title',
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>