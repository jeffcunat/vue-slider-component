import VueSlider from '../lib/vue-slider'
import VueSliderDot from '../lib/vue-slider-dot'
import VueSliderMark from '../lib/vue-slider-mark'

declare module 'vue-slider-component' {
  export { VueSliderDot, VueSliderMark }
  export default VueSlider
}