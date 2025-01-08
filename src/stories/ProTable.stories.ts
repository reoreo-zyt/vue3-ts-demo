import type { Meta, StoryObj } from '@storybook/vue3';
import ProTable from '../views/ProTable/user/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/ProTable',
  component: ProTable,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ProTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
