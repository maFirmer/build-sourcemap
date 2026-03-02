<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { SourceMapConsumer } from "source-map-js";
import Preview from "../components/Preview.vue";

const activeName = ref("0");
const errData = ref<any | null>(null);
const isOpenLayer = ref(false);
const tabActiveName = ref("local");

const js_err_data = localStorage.getItem("js_err_data");
if (js_err_data) {
  errData.value = JSON.parse(js_err_data);
}

// 当前点击错误信息记录
const currentErrorMap = {
  columnNumber: 0,
  lineNumber: 0,
  index: 0,
};

const openLayer = async (item: any, index: number | string) => {
  isOpenLayer.value = true;
  currentErrorMap.columnNumber = item.columnNumber;
  currentErrorMap.lineNumber = item.lineNumber;
  currentErrorMap.index = Number(index);
};
const beforeSourcemapUpload = async (file: any) => {
  if (!file.name.endsWith(".map")) {
    ElMessage.error("请上传正确的map文件");
    return;
  }
  const reader = new FileReader();
  reader.readAsText(file, "utf-8");
  reader.onload = function (res) {
    const originSource = getSourcemap(
      res?.target?.result,
      currentErrorMap.lineNumber,
      currentErrorMap.columnNumber
    );
    // 添加源码到errData
    errData.value.err_stack_list[currentErrorMap.index].originSource = originSource;
    isOpenLayer.value = false;
  };
  return false;
};
const getSourcemap = (fileContent: any, lineNumber: number, columnNumber: number) => {
  const consumer = new SourceMapConsumer(JSON.parse(fileContent));
  const sourcemapPosition = consumer.originalPositionFor({
    line: lineNumber,
    column: columnNumber,
  });
  const originSource = consumer.sourceContentFor(sourcemapPosition.source);
  return {
    line: sourcemapPosition.line,
    column: sourcemapPosition.column,
    source: originSource,
  };
};
</script>

<template>
  <div>
    <pre> {{ errData.strack }}</pre>
    <pre>------------------------------------------------------------------</pre>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(item, index) in errData?.err_stack_list"
        :title="item.source"
        :name="index + ''"
        :key="index"
      >
        <el-row>
          <el-col :span="20">{{ item.fileName }}</el-col>
          <el-col :span="4">
            <el-button type="primary" @click="openLayer(item, index)">源码</el-button>
          </el-col>
        </el-row>
        <el-row>
          <!-- <template v-if="item.originSource">
            <pre>{{ item.originSource.source }}</pre>
          </template> -->
          <Preview :originSource="item.originSource"></Preview>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>

  <el-dialog v-model="isOpenLayer" title="将错误信息映射源码">
    <el-tabs v-model="tabActiveName">
      <el-tab-pane label="本地上传" name="local">
        <el-upload drag :before-upload="beforeSourcemapUpload">
          <div class="openLayer">
            <p>请将文件拖拽到此处</p>

            <p>+</p>
          </div>
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="远程加载" name="remote">
        <pre></pre>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<style>
.openLayer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.openLayer p {
  width: 100%;
}
</style>
