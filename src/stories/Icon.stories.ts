import AppIcon from '../components/AppIcon/index.vue'
export default {
  title: 'AppIcon',
  component: { AppIcon },
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppIcon icon="icon-park:click"/>',
})

export const Click = Template.bind({})
// Rounded.args = {
//   label: 'AppIcon',
//   rounded: true,
// }
// export const Normal = Template.bind({})
// Normal.args = {
//   label: 'Button',
// }
