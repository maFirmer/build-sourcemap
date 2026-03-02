<script setup></script>

<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <router-link to="/sourcemap">sourcemap</router-link>
    </div>
    <div>
      <router-link to="/rrwebRecord">行为录制</router-link>
    </div>
    <div>
      <router-link to="/rrwebPlayer">行为回放</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.container {
  display: flex;

  justify-content: center;
}
.container div {
  margin: 10px;
}
</style>
