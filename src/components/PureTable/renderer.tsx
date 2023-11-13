import { defineComponent } from 'vue'

const props = {
  render: {
    type: Function,
  },
  params: {
    type: Object,
  },
}

export default defineComponent({
  name: 'Renderer',
  props,
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return () => <>{props!.render(props.params)}</>
  },
})
