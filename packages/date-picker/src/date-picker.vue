<template>
  <div>
    <!-- 只支持month 类型  不支持多选 months -->
    <DatePicker v-model="date" type="month" placeholder="选择月" />
  </div>
</template>

<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(ElementUI);
import DatePicker from "../components/date-picker/src/picker/date-picker.js";
export default {
  name: "HkDatePicker",
  components: { DatePicker },
  props: ["value"],
  data() {
    return {
      date: "",
    };
  },
  watch: {
    date(val) {
      this.$emit("input", val);
    },
  },
};
</script>