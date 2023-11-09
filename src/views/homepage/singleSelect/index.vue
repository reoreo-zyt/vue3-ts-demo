<template>
  <div>
    <am-select
      placeholder="请选择工序"
      v-model="selectVlaue"
      :optionSource="stepList"
      valueKey="label"
      @change="selectChange"
      width="200px" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectVlaue = ref<any>()
const stepList = [
  { label: '开始' },
  { label: 'POSUI' },
  { label: '11' },
  { label: 'GX123' },
  { label: '烘干破碎' },
  { label: '车间仓库' },
  { label: 'ui3333' },
  { label: 'hhh333' },
]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectChange = (val: any) => {
  console.log('selectChange', val, selectVlaue.value)
}
</script>
