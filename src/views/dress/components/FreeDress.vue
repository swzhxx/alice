<template>
  <div class="free-dress">
    <DressPreview style="flex: 1"></DressPreview>
    <div class="fress-dress-op">
      <DressBar class="dress-bar"></DressBar>
      <Tabs style="position: absolute; top: -10px">
        <template v-slot:child-content="{ tabId, childTabId }">
          <TabData></TabData>
        </template>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DressPreview from './DressPreview.vue'
import DressBar from './DressBar.vue'
import Tabs from '@/components/Tabs/index.vue'
import TabData from './TabData.vue'
</script>
<style lang="less" scoped>
.free-dress {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.fress-dress-op {
  width: 100%;
  height: 200px;
  position: relative;
}
.dress-bar {
  position: absolute;
  width: calc(100% - 16px * 2);
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
  background: radial-gradient(
      85.09% 355.57% at 14.91% 100%,
      rgba(250, 114, 104, 0.24) 0%,
      rgba(145, 104, 250, 0.24) 29.5%,
      rgba(56, 151, 245, 0.24) 67%,
      rgba(157, 232, 167, 0.24) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
}
</style>
