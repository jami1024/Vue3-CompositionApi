<template>
  <h2>{{message}}</h2>
  <button @click="foo">按钮</button>
</template>

<script>
  import { demoMixin } from './minxs/demomixin'
  export default {
    mixins: [demoMixin]
  }
</script>

<style>
</style>
