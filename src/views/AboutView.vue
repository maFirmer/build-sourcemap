<script setup lang="ts">
import { onMounted } from "vue";

// 构造一个错误

onMounted(() => {
  const errNum = null;
  if (errNum.length > 3) {
    console.log("errnum 是一个错误的测试");
  }
});
</script>

<template>
  <div>构造一个js错误</div>
</template>
<style></style>
