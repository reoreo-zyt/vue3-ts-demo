<template>
  <div>
    <monaco @update:value="update"></monaco>
  </div>
</template>

<script setup lang="ts">
// TODO: 更新接口 保存内容
// TODO: 节流，防止频繁提交
function update(value) {
  console.error(value, '==value==')
}
</script>
