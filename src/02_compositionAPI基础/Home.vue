<template>
    <div>
      <h1>Home page</h1>
      <h2>{{message}}</h2>
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
        console.log(props)
        console.log(props.message)
        console.log(context.attrs.id, context.attrs.class)
        console.log(context.emit)
      }
    }
</script>

<style scoped>

</style>