<template>
  <div class="ai-dress">
    <DressPreview style="flex: 1"></DressPreview>
    <div class="ai-dress-op">
      <div class="ai-reply">
        黑色領帶的著裝要求是較常見的正式著裝要求，TUTU晚禮服：抓摺線條讓晚禮服在宴會燈光下映出多種金屬光澤，
      </div>
      <div style="width: 100%">
        <DressBar
          class="dress-bar"
          style="background: rgba(229, 233, 234, 1)"
        ></DressBar>
        <ion-input
          class="ai-dress-input"
          placeholder="请描述你的穿搭需求"
        ></ion-input>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DressPreview from './DressPreview.vue'
import { IonInput } from '@ionic/vue'
import DressBar from './DressBar.vue'
</script>
<style lang="less" scoped>
.ai-dress {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.ai-reply {
  width: 100%;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(4px);
  padding: 14px 20px;
  border-radius: 16px;
  width: calc(100% - 14px * 2);
  position: absolute;
  top: 0%;
  transform: translateY(-80%);
  color: white;
  box-sizing: border-box;
  max-height: 400px;
  overflow: auto;
}

.ai-dress-op {
  height: 200px;
  width: 100%;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  // background-color: red;
  .ai-dress-input {
    background: white;
    border-radius: 16px;
    width: 100%;
    :deep(.native-wrapper) {
      border-radius: 16px;
      background: rgba(255, 255, 255, 1);
      border: 4px solid transparent;
    }
    :deep(.native-input) {
      padding: 14px 24px;
      border-radius: 16px;
      background: linear-gradient(
        90deg,
        rgba(250, 114, 104, 0) 0%,
        rgba(250, 114, 104, 0.06) 100%
      );
    }
  }
}
.dress-bar {
  position: relative;
  top: 12px;
}
</style>
