<template>
  <div class="p-4">
    <Vditor
      ref="editor"
      :mode="form.mode"
      :value="form.value"
      :lang="form.lang"
      :min-height="form.minHeight"
      :width="form.width"
      :placeholder="form.placeholder"
      :debugger="form.debugger"
      :theme="form.theme"
      :icon="form.icon"></Vditor>
  </div>
</template>

<script lang="ts">
import {
  LangType,
  ModeType,
  ThemeType,
  IconType,
} from '@/components/Vditor/types'
import { defineComponent } from 'vue'
import { ElMessageBox } from 'element-plus'
import exampleMd from './example.md?raw'
import { ref, computed, reactive } from 'vue'
export default defineComponent({
  setup() {
    const editor = ref()
    const vditorIns = computed(() => editor.value.vditorIns)

    let form = reactive({
      mode: 'ir' as ModeType,
      value: exampleMd,
      lang: 'zh_CN' as LangType,
      minHeight: 100,
      width: 'auto',
      placeholder: 'Please input here...',
      debugger: false,
      theme: 'classic' as ThemeType,
      icon: 'ant' as IconType,
    })

    const formSchema: unknown[] = reactive([
      {
        component: 'radio-group',
        value: form.mode,
        label: '编辑模式',
        prop: 'mode',
        children: [
          { component: 'radio-button', label: 'sv', value: 'sv' },
          { component: 'radio-button', label: 'ir', value: 'ir' },
          { component: 'radio-button', label: 'wysiwyg', value: 'wysiwyg' },
        ],
      },
      {
        component: 'radio-group',
        value: form.lang,
        label: '设置语言',
        prop: 'lang',
        children: [
          { component: 'radio-button', label: '中', value: 'zh_CN' },
          { component: 'radio-button', label: '英', value: 'en_US' },
          { component: 'radio-button', label: '繁', value: 'zh_TW' },
        ],
      },
      {
        component: 'input-number',
        value: form.minHeight,
        label: '高度(px)',
        prop: 'minHeight',
        attrs: {
          min: 400,
          step: 50,
          'step-strictly': true,
        },
      },
      {
        component: 'radio-group',
        value: form.width,
        label: '宽度',
        prop: 'width',
        children: [
          { component: 'radio-button', label: '400px', value: '400px' },
          { component: 'radio-button', label: '50%', value: '50%' },
          { component: 'radio-button', label: 'auto', value: 'auto' },
        ],
      },
      {
        component: 'radio-group',
        value: form.theme,
        label: '主题',
        prop: 'theme',
        children: [
          { component: 'radio-button', label: 'classic', value: 'classic' },
          { component: 'radio-button', label: 'dark', value: 'dark' },
        ],
      },
      {
        component: 'radio-group',
        value: form.icon,
        label: '图标',
        prop: 'icon',
        children: [
          { component: 'radio-button', label: 'ant', value: 'ant' },
          { component: 'radio-button', label: 'material', value: 'material' },
        ],
      },
      {
        component: 'switch',
        value: form.debugger,
        label: 'debugger',
        prop: 'debugger',
      },
    ])

    const handleChange = (value) => {
      form.mode = value.mode
      form.lang = value.lang
      form.minHeight = value.minHeight
      form.width = value.width
      form.debugger = value.debugger
      form.theme = value.theme
      form.icon = value.icon
    }

    const handleGetValue = () => {
      ElMessageBox.alert(vditorIns.value.getValue())
    }
    const handleGetHTML = () => {
      ElMessageBox.alert(vditorIns.value.getHTML())
    }
    const handleGetSelection = () => {
      ElMessageBox.alert(vditorIns.value.getSelection())
    }
    const handleGetCursorPosition = () => {
      ElMessageBox.alert(vditorIns.value.getCursorPosition())
    }
    const handleGetCurrentMode = () => {
      ElMessageBox.alert(vditorIns.value.getCurrentMode())
    }

    const handleInsertValue = () => {
      vditorIns.value.insertValue('新插入的数据')
    }
    const handleFocus = () => {
      vditorIns.value.focus()
    }
    const handleBlur = () => {
      vditorIns.value.blur()
    }
    const handleDisabled = () => {
      vditorIns.value.disabled()
    }
    const handleEnable = () => {
      vditorIns.value.enable()
    }
    const handleSetValue = () => {
      vditorIns.value.setValue('这是新设置的value')
    }
    const handleDeleteValue = () => {
      vditorIns.value.deleteValue()
    }
    const handleUpdateValue = () => {
      vditorIns.value.updateValue('更新的数据')
    }
    const handleShowTips = () => {
      vditorIns.value.tip('我的提示信息', 1000)
    }
    const handleSetTheme = (theme) => {
      vditorIns.value.setTheme(theme)
    }
    const handleDestroy = () => {
      vditorIns.value.destroy()
    }
    // const handleSetPreviewMode = () => {
    //   vditorIns.value.setPreviewMode('both')
    // }

    return {
      editor,
      form,
      formSchema,
      handleChange,
      handleGetValue,
      handleGetHTML,
      handleGetSelection,
      handleGetCursorPosition,
      handleGetCurrentMode,
      handleInsertValue,
      handleFocus,
      handleBlur,
      handleDisabled,
      handleEnable,
      handleSetValue,
      handleDeleteValue,
      handleUpdateValue,
      handleShowTips,
      handleSetTheme,
      handleDestroy,
      // handleSetPreviewMode
    }
  },
})
</script>

<style lang="scss" scoped>
:deep(.el-button + .el-button) {
  margin-bottom: 12px;
}
</style>
