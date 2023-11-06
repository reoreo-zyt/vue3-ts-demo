<template>
  <div>
    <query-table
      ref="table"
      :skeleton="table.loading"
      :page-data="table.pageData"
      :column="table.tableColumns"
      :total="table.total"
      :page="table.listQuery.page"
      :limit="table.listQuery.limit"
      @pagination="queryList"></query-table>
  </div>
</template>

<script lang="ts" setup>
const table = reactive({
  loading: false,
  pageData: [{ id: '1233456667' }],
  tableColumns: [{ value: 'id', text: '身份证号' }],
  total: 0,
  listQuery: {
    page: 0,
    limit: 20,
  },
  showDialog: false,
})

function queryList() {}
</script>
