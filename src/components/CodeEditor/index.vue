<template>
  <div>
    <div class="datav-tabs">
      <el-tabs
        v-model="reactiveRef.language"
        class="demo-tabs"
        @tab-change="handleChangeLanguage()"
        type="border-card">
        <el-tab-pane
          :label="item.label"
          :name="item.name"
          v-for="(item, index) in options.langurgeOptions"
          :key="'datav_tabs_pane' + index"></el-tab-pane>
      </el-tabs>
    </div>
    <div ref="editContainer" class="code-editor"></div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// json
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// js
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
// ts
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution'
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'

// 解决 vite Monaco 提示错误
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TSWorker()
    }
    return new EditorWorker()
  },
}

const props = defineProps({
  value: {
    type: String,
    default: () => '',
  },
})

const emits = defineEmits(['update:value'])

const reactiveRef = reactive({
  language: 'typescript',
})

const options = {
  langurgeOptions: [
    { label: 'javascript', name: 'javascript' },
    { label: 'typescript', name: 'typescript' },
  ],
}

const { proxy } = getCurrentInstance() as ComponentInternalInstance

let monacoEditor: monaco.editor.IStandaloneCodeEditor

function handleChangeLanguage() {
  changeLang(reactiveRef.language)
}

function changeLang(lang: string) {
  monaco.editor.setModelLanguage(
    monacoEditor.getModel() as monaco.editor.ITextModel,
    lang,
  )
}

watch(
  () => props.value,
  (value) => {
    // 防止改变编辑器内容时光标重定向
    if (value !== monacoEditor?.getValue()) {
      monacoEditor.setValue(value)
    }
  },
  { immediate: false },
)

onMounted(() => {
  monacoEditor = monaco.editor.create(
    proxy?.$refs.editContainer as HTMLElement,
    {
      value: props.value, // 编辑器初始显示文字
      language: 'typescript', // 语言支持自行查阅demo
      automaticLayout: true, // 自适应布局
      theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
      foldingStrategy: 'indentation',
      renderLineHighlight: 'all', // 行亮
      selectOnLineNumbers: true, // 显示行号
      minimap: {
        enabled: false,
      },
      readOnly: false, // 只读
      fontSize: 16, // 字体大小
      scrollBeyondLastLine: false, // 取消代码后面一大段空白
      overviewRulerBorder: false, // 不要滚动条的边框
    },
  )
  // 监听值变化
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue()
    emits('update:value', currenValue)
  })
})
</script>
<style scoped>
.code-editor {
  width: 100%;
  min-height: 300px;
}
</style>
