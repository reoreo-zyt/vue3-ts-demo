<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from '../data'
import { TableColumnList } from '@/types/global'
import PureTable from '@/components/PureTable/index.tsx'

const tableRef = ref()

const multipleSelection = ref([])
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleSelection = (rows?: any) => {
  const { toggleRowSelection, clearSelection } = tableRef.value.getTableRef()
  if (rows) {
    rows.forEach((row) => {
      toggleRowSelection(row, undefined)
    })
  } else {
    clearSelection()
  }
}
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const columns: TableColumnList = [
  {
    type: 'selection',
    align: 'left',
  },
  {
    label: '日期',
    prop: 'date',
  },
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '地址',
    prop: 'address',
  },
]
</script>

<template>
  <div>
    <pure-table
      ref="tableRef"
      :data="tableData"
      :columns="columns"
      @selection-change="handleSelectionChange" />
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">
        Toggle selection status of second and third rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>
