<template>
  <div>
    <am-select
      placeholder="自定义显示下拉项label"
      v-model="selectVlaue"
      :optionSource="stepList"
      valueKey="label"
      customLabel="`${item.label}（${item.id}）`"
      @change="selectChange"
      width="200px" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectVlaue = ref<any>()
const stepList = [
  { label: '开始', id: 1 },
  { label: 'POSUI', id: 2 },
  { label: '11', id: 3 },
  { label: 'GX123', id: 4 },
  { label: '烘干破碎', id: 5 },
  { label: '车间仓库', id: 6 },
  { label: 'ui3333', id: 7 },
  { label: 'hhh333', id: 8 },
]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectChange = (val: any) => {
  console.log('selectChange', val, selectVlaue.value)
}
</script>
