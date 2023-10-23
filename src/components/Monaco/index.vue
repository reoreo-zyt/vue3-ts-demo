<template>
  <div ref="editContainer" class="code-editor"></div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, watch } from 'vue'
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

// 解决vite Monaco提示错误
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

export default {
  props: {
    value: String,
  },
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let monacoEditor: any = null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { proxy } = getCurrentInstance() as any

    watch(
      () => props.value,
      (value) => {
        // 防止改变编辑器内容时光标重定向
        if (value !== monacoEditor?.getValue()) {
          monacoEditor.setValue(value)
        }
      },
    )

    onMounted(() => {
      monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
        value: props.value,
        readOnly: false,
        language: 'typescript',
        theme: 'vs-dark',
        selectOnLineNumbers: true,
        // renderSideBySide: false,
      })
      // 监听值变化
      monacoEditor.onDidChangeModelContent(() => {
        const currenValue = monacoEditor?.getValue()
        emit('update:value', currenValue)
      })
    })
    return {}
  },
}
</script>
<style scoped>
.code-editor {
  width: 100%;
  min-height: 200px;
}
</style>
