import DatePicker from '../'

export default {
  title: 'DatePicker',
  component: DatePicker
}

export const month = () => ({
  components: { DatePicker },
  template: '<DatePicker   />',
  data() {
    return {
      date: ''
    }
  },

})

