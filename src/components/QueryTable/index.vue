<template>
  <div style="height: 100%">
    <el-table
      ref="queryTable"
      :data="pageData"
      border
      stripe
      class="query-table"
      :height="height"
      :empty-text="emptyText"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0px' }"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
      @row-dblclick="handleRowDbclick">
      <el-table-column
        v-if="selectEnable"
        :selectable="getSelectable"
        type="selection"
        width="40"></el-table-column>
      <el-table-column
        v-if="showIndex"
        label="序号"
        type="index"
        width="55"
        align="center"></el-table-column>
      <el-table-column
        v-for="column in filterColumns"
        :key="column.value"
        :prop="column.value"
        :label="column.text"
        :width="column.width"
        :formatter="column.formatter"
        :sortable="column.sortable"
        :show-overflow-tooltip="!skeleton">
        <template v-if="true" v-slot="scope">
          <p v-if="column.render && !skeleton" style="margin: 7.5px 0">
            {{ column.render(scope.row, {}) }}
          </p>
          <img
            v-else-if="column.img && !skeleton"
            :src="column.img"
            height="70"
            width="80"
            alt="未找到图片" />
          <el-switch
            v-else-if="column.switch && !skeleton"
            v-model="scope.row[column.value]"
            active-color="#13ce66"
            inactive-color="#13ce66"
            @change="
              handleSwitchChange(scope.$index, scope.row, column.value)
            "></el-switch>
          <!-- 供自定义内容插槽，column 需有 slotName 字段设置插槽名 -->
          <slot
            v-else-if="column?.slotName && !skeleton"
            :row="scope.row"
            :name="column?.slotName" />
          <p v-else-if="!skeleton" style="margin: 0">
            <i
              v-if="column.isCopy"
              class="el-icon-document-copy copy-icon"
              title="复制"
              @click="handleCopy(scope.row[column.value], $event)"></i>
            {{ scope.row[column.value] }}
          </p>
          <el-button
            v-for="item in column.items"
            v-show="
              (column.text === '操作' || column.value === 'oper') && !skeleton
            "
            :key="item.text"
            :disabled="item.disabled ? item.disabled : false"
            :style="{ color: item.color }"
            size="small"
            type="text"
            @click="handleOperate(scope.$index, scope.row, item.text)">
            {{ item.text }}
          </el-button>
          <!-- throttle: 节流防止dom闪烁 -->
          <el-skeleton
            v-if="skeleton"
            :rows="1"
            animated
            :throttle="400"></el-skeleton>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-row v-show="total > 0" style="margin-top: 10px">
      <el-col>
        <el-pagination
          :background="background"
          :current-page="currentPage"
          :page-size="pageSize"
          :layout="layout"
          :page-sizes="pageSizes"
          :total="total"
          v-bind="$attrs"
          style="float: right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import TableColumn from '@/types/table'

const props = defineProps({
  pageData: {
    type: Array,
    default: () => [],
  },
  height: {
    type: String,
    default: () => 'calc(100% - 50px)',
  },
  emptyText: {
    type: String,
    default: () => '暂无数据',
  },
  selectEnable: {
    type: Boolean,
    default: true,
  },
  showIndex: {
    type: Boolean,
    default: true,
  },
  columns: {
    type: Array<TableColumn>,
    default: () => [],
  },
  skeleton: {
    type: Boolean,
    default: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  background: {
    type: Boolean,
    default: true,
  },
  page: {
    type: Number,
    default: 1,
  },
  pageSizes: {
    type: Array<number>,
    default: () => [20, 50, 200, 500, 1000],
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper',
  },
  limit: {
    type: Number,
    default: 20,
  },
})

const emits = defineEmits([
  'handleSwitchChange',
  'rowOperate',
  'update:page',
  'update:limit',
  'pagination',
])

//筛选表单列，搭配关键字isShow使用
const filterColumns = computed(() => {
  return props.columns
})

const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emits('update:page', val)
  },
})

const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emits('update:limit', val)
  },
})

function handleSelectionChange() {}
function handleSortChange() {}
function handleRowDbclick() {}

// 表格左侧selection点击事件
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSelectable(row, _index) {
  if (row.selectable === false) {
    return false
  }
  return true
}

// switch 开关改变事件
function handleSwitchChange(index, row, currentVaule) {
  emits('handleSwitchChange', index, row, currentVaule)
}

// Cilpboard
function handleCopy(value, event) {
  handleCilpboard(value, event)
}

function handleCilpboard(value, event) {
  // TODO: 用 clipboard
  console.error(value, event)
}

// 显示操作
function handleOperate(index, row, text) {
  emits('rowOperate', index, row, text)
}

function handleSizeChange(val) {
  emits('pagination', { page: currentPage, limit: val })
}

function handleCurrentChange(val) {
  emits('pagination', { page: val, limit: currentPage })
}
</script>

<style lang="scss" scoped>
.query-table {
  width: 100%;
  border-radius: 4px;
}
.copy-icon {
  cursor: pointer;
  margin: 0 2px;
}
</style>
