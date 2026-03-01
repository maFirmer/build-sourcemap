<script setup lang="ts">
const createTypeError = () => {
  if (typeError.length > 1) {
    console.log("typeError");
  }
};

const createReferenceError = () => {
  throw new ReferenceError("ReferenceError");
};

const createSyntaxError = () => {
  throw new SyntaxError("SyntaxError");
};
</script>

<template>
  <div class="sourcemap">
    <el-button @click="createTypeError()">触发类型错误TypeError</el-button>
    <el-button @click="createReferenceError()">触发引用错误ReferenceError</el-button>
    <el-button @click="createSyntaxError()">触发同步错误SyntaxError</el-button>
  </div>
</template>
<style>
.sourcemap {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
