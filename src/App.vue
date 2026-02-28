<script setup>
import { onMounted } from "vue";

// 构造一个错误

onMounted(() => {
  throw new Error("This is an error");
});
</script>

<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.container {
  display: flex;

  justify-content: space-between;
}
.container div {
  margin: 10px;
}
</style>
