import HInput from '../'

export default {
  title: 'HInput',
  component: HInput
}

export const Text = () => ({
  components: { HInput },
  template: '<h-input v-model="value"></h-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { HInput },
  template: '<h-input type="password" v-model="value"></h-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
