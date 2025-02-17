<template>
  <div>111</div>
  <div class="v-input">
    <el-input
      placeholder=""
      v-model="value"
      v-validate="validateInput"
    ></el-input>
  </div>
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

<style lang="scss" scoped>
.v-input {
  width: 200px;
}
</style>
