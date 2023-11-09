import AmSelect from '../../components/AmSelect/index.vue'
import type { Meta } from '@storybook/vue3'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof AmSelect> = {
  title: '后台管理系统组件/下拉选择组件',
  component: AmSelect,
  tags: ['autodocs'],
}

export default meta

const div = (args) => ({
  components: { AmSelect },
  setup() {
    return {
      args,
    }
  },
  template: '<am-select v-bind="args"></am-select>',
})

export const Input = div.bind({})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const selectVlaue = ref<any>()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Input.args = {
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
  // 'v-model': selectVlaue,
  // TODO: v-model @change 事件
}
