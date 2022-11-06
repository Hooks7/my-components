import HkDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
HkDatePicker.install = function install(Vue) {
  Vue.component(HkDatePicker.name, HkDatePicker);
};

export default HkDatePicker;
