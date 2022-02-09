<template>
  <h2>{{message}}</h2>
  <button @click="foo">按钮</button>
</template>

<script>
  import { demoMixin } from './minxs/demomixin'
  export default {
    mixins: [demoMixin],
    data() {
      return {
        message: 'hello App'
      }
    },
     methods: {
      foo() {
        console.log("app foo");
      }
    },
    created() {
      console.log("App created 执行");
    }
  }
</script>

<style>
</style>
