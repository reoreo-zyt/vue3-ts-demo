<template>
  <am-layout-page class="slotCustomize">
    <am-layout-page-item>
      <div class="box_content">
        <div class="box_flex">
          <div>插槽使用及自定义日期面板</div>
          <am-date-picker v-model="date" @change="change">
            <template #default="cell">
              <div class="cell_slot" :class="{ current: cell.isCurrent }">
                <span class="customize_text">{{ cell.text }}</span>
                <span v-if="isHoliday(cell)" class="slot_holiday" />
              </div>
            </template>
          </am-date-picker>
        </div>
      </div>
    </am-layout-page-item>
  </am-layout-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const date = ref()
//获取今天日期
const myDate = new Date()
myDate.setDate(myDate.getDate() - 7)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let holidays: any = []
let dateTemp = ''
var flag = 1
for (var i = 0; i < 7; i++) {
  dateTemp = `${myDate.getFullYear()}-${
    myDate.getMonth() + 1 > 9
      ? myDate.getMonth() + 1
      : '0' + (myDate.getMonth() + 1)
  }-${myDate.getDate() > 9 ? myDate.getDate() : '0' + myDate.getDate()}`
  holidays.push(dateTemp)
  myDate.setDate(myDate.getDate() + flag)
}
const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
const change = (event) => {
  console.log(`change事件返回值是：`, event)
  console.log(`v-model绑定的值是：`, date.value)
}
</script>
<style lang="scss">
.slotCustomize {
  .t_layout_page_item {
    padding: 0 !important;
    margin: 0 !important;

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

.cell_slot {
  padding: 3px 0;
  height: 30px;
  box-sizing: border-box;
}

.cell_slot.current .customize_text {
  color: #fff;
  background: #626aef;
}

.customize_text {
  position: absolute;
  left: 50%;
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  line-height: 24px;
  transform: translateX(-50%);
}

.slot_holiday {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  transform: translateX(-50%);
}
</style>
