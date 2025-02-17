<template>
  <div>111</div>
  <el-input
    placeholder=""
    v-model="value"
    v-validate="validateInput"
  ></el-input>
</template>

<script lang="ts" setup>
const value = ref('');

const validateInput = (val: any) => {
  if (!val) {
    ElMessage.error('数据不能为空');
  }
};

onMounted(() => {
  ElMessage.info('自动导入测试');
});
</script>
