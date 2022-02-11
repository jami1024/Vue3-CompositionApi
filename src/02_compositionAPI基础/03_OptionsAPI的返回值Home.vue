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
    export default {
      props: {
        message: {
          type: String,
          required: true
        }
      },
      // setup 函数有哪些参数:props,context
      /*
        props: 父组件传递过来的属性
      */
      // setup 返回什么样子的值

      setup(props, context) {
        // 局部函数
        const increment = () => {
          console.log('+1')
        }
        return {
          title: '这是title',
          counter: 100,
          increment
        }
      }
    }
</script>

<style scoped>

</style>