import HkInput from '../'

export default {
  title: 'HkInput',
  component: HkInput
}

export const Text = () => ({
  components: { HkInput },
  template: '<hk-input v-model="value"></hk-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { HkInput },
  template: '<hk-input type="password" v-model="value"></hk-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
