<script setup lang="ts">
import { useColumns } from './columns'
import PureTable from '@/components/PureTable/index.tsx'

const { columns, tableData } = useColumns()
</script>

<template>
  <pure-table :data="tableData" :columns="columns" />
</template>
