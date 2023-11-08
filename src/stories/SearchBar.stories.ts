import SearchBar from '../components/SearchBar/index.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof SearchBar> = {
  title: '组件/search-bar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Input: Story = {
  args: {},
}
