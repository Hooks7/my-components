import HkDatePicker from '../'

export default {
  title: 'HkDatePicker',
  component: HkDatePicker
}

export const month = () => ({
  components: { HkDatePicker },
  template: '<HkDatePicker   />',
  data() {
    return {
      date: ''
    }
  },

})

