import DatePicker from './src/date-picker.vue'

DatePicker.install = Vue => {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
