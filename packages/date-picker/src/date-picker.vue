<template>
  <div>
    <DatePicker v-model="value" type="month" placeholder="选择月">
    </DatePicker>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(ElementUI);
import DatePicker from "../components/date-picker/src/picker/date-picker";
export default {
  name: "HKDatePicker",
  components: { DatePicker },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>