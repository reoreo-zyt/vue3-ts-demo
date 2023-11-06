<template>
  <div>
    <div ref="vditor"></div>
  </div>
</template>

<script lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import type {
  ToolbarItem,
  LangType,
  ModeType,
  ThemeType,
  IconType,
} from './types'
import type { PropType } from '@/types/global'
const defaultToolbarItems = [
  'emoji',
  'headings',
  'bold',
  'italic',
  'strike',
  'link',
  '|',
  'list',
  'ordered-list',
  'check',
  'outdent',
  'indent',
  '|',
  'quote',
  'line',
  'code',
  'inline-code',
  'insert-before',
  'insert-after',
  '|',
  'upload',
  'record',
  'table',
  '|',
  'undo',
  'redo',
  '|',
  'fullscreen',
  'edit-mode',
  {
    name: 'more',
    toolbar: [
      'both',
      'code-theme',
      'content-theme',
      'export',
      'outline',
      'preview',
      'devtools',
      // 'info',
      // 'help'
    ],
  },
]

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<ModeType>,
      default: 'ir',
    },
    value: {
      type: String,
      default: '',
    },
    lang: {
      type: String as PropType<LangType>,
      default: 'zh_CN',
    },
    minHeight: {
      type: Number,
      default: 400,
    },
    width: {
      type: String,
      default: 'auto',
    },
    placeholder: {
      type: String,
      default: '',
    },
    debugger: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String as PropType<ThemeType>,
      default: 'classic',
    },
    icon: {
      type: String as PropType<IconType>,
      default: 'ant',
    },
    toolbar: {
      type: Array as PropType<Array<ToolbarItem>>,
      default: () => defaultToolbarItems,
    },
  },
  setup(props) {
    const vditor = ref()
    let vditorIns = ref({})

    const initEditor = (type?: string) => {
      if (vditor.value) {
        if (type !== 'init') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          vditorIns.value.destroy?.()
        }
        vditorIns.value = new Vditor(vditor.value, {
          mode: props.mode,
          value: props.value,
          lang: props.lang,
          minHeight: props.minHeight,
          width: props.width,
          placeholder: props.placeholder,
          debugger: props.debugger,
          theme: props.theme,
          icon: props.icon,
          toolbar: props.toolbar,
          cache: {
            enable: false,
          },
        })
      }
    }

    watch(
      props,
      () => {
        initEditor()
      },
      {
        deep: true,
      },
    )

    onMounted(() => {
      initEditor('init')
    })

    return {
      vditor,
      vditorIns,
    }
  },
})
</script>
