<script setup lang="ts">
const props = defineProps<{
  originSource: any;
}>();
console.log(props);
const preview = async () => {
  const line = props.originSource?.line;
  const column = props.originSource?.column;
  const newLine = [];
  const originCodeLine = props.originSource?.source.split("\n");

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
    <!-- <pre v-if="originSource">{{ originSource.source }}</pre> -->
    <template v-html="preview()"></template>
  </div>
</template>
<style></style>
