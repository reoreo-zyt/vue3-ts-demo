import SearchBar from '../components/SearchBar/index.vue'
import type { Meta } from '@storybook/vue3'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof SearchBar> = {
  title: '组件/search-bar（检索）',
  component: SearchBar,
  tags: ['autodocs'],
}

export default meta

const div = (args) => ({
  components: { SearchBar },
  setup() {
    return {
      args,
    }
  },
  template: '<search-bar v-bind="args"></search-bar>',
})

export const Input = div.bind({})
export const Input2 = div.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Input.args = {
  search: [
    {
      label: '输入框',
      component: 'el-input',
      placeholder: '请输入',
      value: '',
      style: {},
    },
  ],
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Input2.args = {
  search: [
    {
      label: '输入框',
      component: 'el-input',
      placeholder: '请输入',
      value: '',
      style: {},
    },
  ],
}
