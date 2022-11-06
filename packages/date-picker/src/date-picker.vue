<template>
  <div>
    <h-date-picker v-model="value" type="month" placeholder="选择月">
    </h-date-picker>
  </div>
</template>

<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
Vue.use(ElementUI);
import HDatePicker from '../components/date-picker/src/picker/date-picker'
export default {
  components:{HDatePicker},
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>