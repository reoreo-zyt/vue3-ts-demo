import AmSelect from '../../components/AmSelect/index.vue'
import type { Meta } from '@storybook/vue3'

const meta: Meta<typeof AmSelect> = {
  title: '后台管理系统组件/下拉选择组件',
  component: AmSelect,
  // tags: ['autodocs'],
}

export default meta

const template = (args) => ({
  components: { AmSelect },
  setup() {
    return {
      args,
    }
  },
  template: '<am-select v-model="args.modelValue" v-bind="args"></am-select>',
})

export const 单选 = template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
单选.args = {
  placeholder: '请选择工序',
  optionSource: [
    { label: '开始' },
    { label: 'POSUI' },
    { label: '11' },
    { label: 'GX123' },
    { label: '烘干破碎' },
    { label: '车间仓库' },
    { label: 'ui3333' },
    { label: 'hhh333' },
  ],
  valueKey: 'label',
  width: '200px',
  modelValue: ref(''),
  onChange: (val) => {
    console.error(val)
  },
}
