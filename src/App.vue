<template>
    <div class="scss_test">
        <h2>webpack5-vue3-ts</h2>
    </div>
</template>
  
<script setup lang="ts">
import './app.scss'
console.error('NODE_ENV', process.env.NODE_ENV)
console.error('BASE_ENV', process.env.BASE_ENV)
</script>

<style scoped></style>