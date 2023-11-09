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
  </div>
</template>
<script setup lang="ts">
import singleSelect from './singleSelect/index.vue'
import customSelect from './customSelect/index.vue'
import multiSelect from './multiSelect/index.vue'
import pageSelect from './pageSelect/index.vue'
import virtualSelect from './virtualSelect/index.vue'
</script>
