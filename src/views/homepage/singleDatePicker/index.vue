<template>
  <am-layout-page class="single_Date">
    <am-layout-page-item>
      <el-radio-group v-model="size" label="size control" size="small">
        <el-radio-button label="large">large</el-radio-button>
        <el-radio-button label="default">default</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
      </el-radio-group>
      <div class="box_content">
        <div class="box_flex">
          <div>选择日期</div>
          <am-date-picker
            v-model="date"
            :size="size"
            @change="change($event, 'date', date)" />
        </div>
        <div class="box_flex">
          <div>选择周</div>
          <am-date-picker
            v-model="date1"
            :size="size"
            type="week"
            @change="change($event, 'week', date1)" />
        </div>
        <div class="box_flex">
          <div>选择月</div>
          <am-date-picker
            v-model="date2"
            :size="size"
            type="month"
            @change="change($event, 'month', date2)" />
        </div>
        <div class="box_flex">
          <div>选择年</div>
          <am-date-picker
            v-model="date3"
            :size="size"
            type="year"
            @change="change($event, 'year', date3)" />
        </div>
        <div class="box_flex">
          <div>选择日期-快捷方式</div>
          <am-date-picker
            v-model="date4"
            :size="size"
            isPickerOptions
            @change="change($event, 'date', date4)" />
        </div>
        <div class="box_flex">
          <div>选择日期&时间</div>
          <am-date-picker
            v-model="date5"
            type="datetime"
            @change="change($event, 'datetime', date5)" />
        </div>
        <div class="box_flex">
          <div>快捷方式-选择日期&时间</div>
          <am-date-picker
            v-model="date6"
            type="datetime"
            isPickerOptions
            @change="change($event, 'datetime', date6)" />
        </div>
      </div>
    </am-layout-page-item>
  </am-layout-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const size = ref('default')
const date = ref()
const date1 = ref()
const date2 = ref()
const date3 = ref()
const date4 = ref()
const date5 = ref()
const date6 = ref()

const typeTxt = {
  date: '日期',
  week: '周',
  month: '月',
  year: '年',
  daterange: '日期范围',
  monthrange: '月份范围',
  datetime: '日期&时间',
  datetimerange: '日期和时间点范围',
}

const change = (event, type, value) => {
  console.log(`change选择${typeTxt[type]}返回值是：`, event)
  console.log(`v-model绑定的值是：`, value)
}
</script>
<style lang="scss" scoped>
.single_Date {
  .am_layout_page_item {
    padding: 0;
    margin: 0;

    .box_content {
      display: flex;
      padding: 10px;
      margin-top: 10px;
      border: 1px dashed #ccc;
      flex-wrap: wrap;
    }

    .box_flex {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
    }
  }
}
</style>
