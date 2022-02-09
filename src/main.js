import { createApp } from 'vue'
import App from './02_compositionAPI基础/App.vue'

const app = createApp(App);
app.mount("#app");

app.mixin({
  data() {
    return {}
  },
  methods: {

  },
  created() {
    console.log("全局的created生命周期");
  }
});