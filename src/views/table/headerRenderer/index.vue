<script setup lang="ts">
import { useColumns } from './columns'
import PureTable from '@/components/PureTable/index.tsx'

const { columns, filterTableData } = useColumns()
</script>

<template>
  <pure-table :data="filterTableData" :columns="columns" />
</template>
