<template>
  <div>
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
    <div>
      <div>详情-基础用法</div>
      <basisDetails></basisDetails>
    </div>
    <div>
      <div>详情-加边框</div>
      <borderDetails></borderDetails>
    </div>
    <div>
      <div>详情-每行展示多少项</div>
      <layoutDetails></layoutDetails>
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
</script>
