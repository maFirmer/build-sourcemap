<script setup lang="ts">
const props = defineProps<{
  originSource: any;
}>();

const preview = async () => {
  const { originSource } = props;
  const line = originSource.line;
  const column = originSource.column;
  const newLine = [];
  const originCodeLine = originSource.source.split("\n");

  for (let i = 0; i < originCodeLine.length; i++) {
    if (i === line - 1) {
      newLine.push(
        `<span class="line-number">${i + 1}</span><span class="line-code">${
          originCodeLine[i]
        }</span>`
      );
    } else {
      newLine.push(
        `<span class="line-number">${i + 1}</span><span class="}
        />`
      );
    }
  }

  return `<div class="preview-code">${newLine.join("")}</div>`;
};
</script>

<template>
  <div>
    <template v-html="preview()"></template>
  </div>
</template>
<style></style>
