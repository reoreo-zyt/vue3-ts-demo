<script setup lang="ts">
import { tableData } from '../data'
import { TableColumnList } from '@/types/global'
import PureTable from '@/components/PureTable/index.tsx'

const columns: TableColumnList = [
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
  <pure-table :data="tableData" :columns="columns" stripe />
</template>
