import { defineComponent } from 'vue'
// !在JSX中引入组件需要手动引入组件和组件样式，自动引入并不生效
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'el-test',

  setup(props, context) {
    console.log(props, context)

    return () => <ElButton type='primary'>Primary</ElButton>
  },
})
