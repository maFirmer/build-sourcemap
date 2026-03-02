<script setup lang="ts">
import { Replayer } from "@rrweb/replay";
import "@rrweb/replay/dist/style.css";
import { useRrwebEventsStore } from "../stores/rrwebEventsStore";
const rrwebEventsStore = useRrwebEventsStore();
const events = rrwebEventsStore.getRrwebEvents();
const rePlayer = () => {
  if (!events.length) return;
  const replayer = new Replayer(events, {
    root: document.querySelector("#rrweb-replay-root")!,
  });

  replayer.play();
};
</script>

<template>
  <div class="rrweb-replayer-container">
    <el-button type="primary" @click="rePlayer">用户行为回放</el-button>

    <div id="rrweb-replay-root"></div>
  </div>
</template>
<style>
.rrweb-replayer-container {
  display: flex;
  justify-content: center;
}
</style>
