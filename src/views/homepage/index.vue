<template>
  <div class="content">
    <div class="content-item">
      <div class="text-[18px] mt-[20px]">下拉选框</div>
      <div>
        <div>单选</div>
        <singleSelect></singleSelect>
      </div>
      <div>
        <div>自定义显示下拉项label</div>
        <customSelect></customSelect>
      </div>
      <div>
        <div>多选</div>
        <multiSelect></multiSelect>
      </div>
      <div>
        <div>分页</div>
        <pageSelect></pageSelect>
      </div>
      <div>
        <div>虚拟列表</div>
        <virtualSelect></virtualSelect>
      </div>
    </div>
    <div class="content-item">
      <div class="text-[18px] mb-[20px] mt-[20px]">详情</div>
      <div>
        <div>基础用法</div>
        <basisDetails></basisDetails>
      </div>
      <div>
        <div>加边框</div>
        <borderDetails></borderDetails>
      </div>
      <div>
        <div>每行展示多少项</div>
        <layoutDetails></layoutDetails>
      </div>
      <div>
        <div>垂直布局</div>
        <verticalDetails></verticalDetails>
      </div>
      <div>
        <div>插槽显示</div>
        <slotDetails></slotDetails>
      </div>
      <div>
        <div>字典回显</div>
        <listInfoDetails></listInfoDetails>
      </div>
      <div>
        <div>字典回显</div>
        <tooltipDetails></tooltipDetails>
      </div>
    </div>
    <div class="content-item">
      <div class="text-[18px] mb-[20px] mt-[20px]">按钮组件</div>
      <div>
        <div>防抖</div>
        <amButton></amButton>
      </div>
    </div>
    <div class="content-item">
      <div class="text-[18px] mb-[20px] mt-[20px]">日期组件</div>
      <div>
        <div>单个日期输出</div>
        <singleDatePicker></singleDatePicker>
      </div>
      <div>
        <div>日期范围选择</div>
        <rangeDatePicker></rangeDatePicker>
      </div>
      <div>
        <div>月份范围选择</div>
        <mouthRangeDatePicker></mouthRangeDatePicker>
      </div>
      <div>
        <div>日期&时间范围选择</div>
        <timeRangeDatePicker></timeRangeDatePicker>
      </div>
      <div>
        <div>插槽使用及自定义日期面板</div>
        <slotDatePicker></slotDatePicker>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import singleSelect from './singleSelect/index.vue'
import customSelect from './customSelect/index.vue'
import multiSelect from './multiSelect/index.vue'
import pageSelect from './pageSelect/index.vue'
import virtualSelect from './virtualSelect/index.vue'
import basisDetails from './basisDetails/index.vue'
import borderDetails from './borderDetails/index.vue'
import layoutDetails from './layoutDetails/index.vue'
import verticalDetails from './verticalDetails/index.vue'
import slotDetails from './slotDetails/index.vue'
import listInfoDetails from './listInfoDetails/index.vue'
import tooltipDetails from './tooltipDetails/index.vue'
import amButton from './amButton/index.vue'
import singleDatePicker from './singleDatePicker/index.vue'
import rangeDatePicker from './rangeDatePicker/index.vue'
import mouthRangeDatePicker from './mouthRangeDatePicker/index.vue'
import timeRangeDatePicker from './timeRangeDatePicker/index.vue'
import slotDatePicker from './slotDatePicker/index.vue'
</script>
