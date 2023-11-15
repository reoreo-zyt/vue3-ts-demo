<template>
  <el-tabs @tab-click="tabClick">
    <template v-for="(item, index) of reactiveRef.list" :key="index">
      <el-tab-pane :lazy="true">
        <template #label>
          <el-tooltip
            :content="`（第 ${index + 1} 个示例）${item.content}`"
            placement="top-end">
            <span>{{ item.title }}</span>
          </el-tooltip>
        </template>
        <component :is="item.component" />
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import BaseTable from './baseTable/index.vue'
import StripeTable from './stripeTable/index.vue'
import borderTable from './borderTable/index.vue'
import statusTable from './statusTable/index.vue'
import fixHeader from './fixHeader/index.vue'
import fixColumn from './fixColumn/index.vue'
import fixHeaderColumn from './fixHeaderColumn/index.vue'
import groupHeader from './groupHeader/index.vue'
import fluidHeight from './fluidHeight/index.vue'
import radio from './radio/index.vue'
import multipleRadios from './multipleRadios/index.vue'
import sortTable from './sortTable/index.vue'
import filterTable from './filterTable/index.vue'
import ColoumTemplate from './coloumTemplate/index.vue'
import HeaderRenderer from './headerRenderer/index.vue'
import expend from './expend/index.vue'
import tree from './tree/index.vue'
import totalRow from './totalRow/index.vue'
import merge from './merge/index.vue'
import customIndex from './customIndex/index.vue'
import layout from './layout/index.vue'
import nestPro from './nestPro/index.vue'
import imgPreview from './imgPreview/index.vue'

const reactiveRef = reactive({
  selected: 0,
  list: [
    { title: '基础表格', content: '', component: BaseTable },
    { title: '带斑马条纹表格', content: '', component: StripeTable },
    { title: '带边框表格', content: '', component: borderTable },
    { title: '带状态表格', content: '', component: statusTable },
    { title: '固定表头', content: '', component: fixHeader },
    { title: '固定列', content: '', component: fixColumn },
    { title: '固定列和表头', content: '', component: fixHeaderColumn },
    { title: '多级表头', content: '', component: groupHeader },
    { title: '流体高度', content: '', component: fluidHeight },
    { title: '单选', content: '', component: radio },
    { title: '多选', content: '', component: multipleRadios },
    { title: '排序和格式化', content: '', component: sortTable },
    { title: '筛选', content: '', component: filterTable },
    { title: '自定义列模板', content: '', component: ColoumTemplate },
    { title: '自定义表头', content: '', component: HeaderRenderer },
    { title: '展示行', content: '', component: expend },
    { title: '树形数据与懒加载', content: '', component: tree },
    { title: '表尾合计行', content: '', component: totalRow },
    { title: '合并行或列', content: '', component: merge },
    { title: '自定义索引', content: '', component: customIndex },
    { title: '表格布局', content: '', component: layout },
    { title: '各种数据格式（深层结构）', content: '', component: nestPro },
    { title: '图像预览', content: '', component: imgPreview },
  ],
})

function tabClick() {}
</script>
