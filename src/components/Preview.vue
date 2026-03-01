<script setup lang="ts">
const props = defineProps<{
  originSource: any;
}>();
const preview = () => {
  const line = props.originSource?.line;
  const newLine = [];
  const originCodeLine = props.originSource?.source.split("\n");
  const len = originCodeLine?.length;
  const start = line - 5 >= 0 ? line - 5 : 0;
  const end = line + 5 > len ? len : line + 5;

  for (let i = start; i < end; i++) {
    const content = i + 1 + ".  " + encodeHtml(originCodeLine[i]);
    newLine.push(`<div class="line ${i + 1 == line ? "err_code" : ""}">${content}</div>`);
  }

  return newLine.join("");
};
const encodeHtml = (str: string) => {
  if (!str || str.length == 0) return "";
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
</script>

<template>
  <div>
    <!-- <pre v-if="originSource">{{ originSource.source }}</pre> -->
    <pre v-html="preview()"></pre>
  </div>
</template>
<style>
.err_code {
  color: antiquewhite;
  background-color: red;
}
</style>
