<template>
  <div class="header">
    <div @click="handleBack" :class="{ simpleify: simpleify }" class="left">
      <slot name="left">
        <img
          v-if="props.simpleify == false"
          src="@/assets/back.svg"
          style="width: 4px; height: 12px"
          alt=""
        />
        <img
          v-else
          src="@/assets/back.svg"
          style="width: 4px; height: 12px"
          alt=""
        />
      </slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useIonRouter } from '@ionic/vue'

const props = withDefaults(
  defineProps<{
    simpleify?: boolean
  }>(),
  {
    simpleify: true
  }
)
const ionRouter = useIonRouter()
const handleBack = () => {
  if (ionRouter.canGoBack()) {
    ionRouter.back()
  } else {
    ionRouter.replace({ name: 'all' })
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 42px;
  background: transparent;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

.main {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  display: flex;
  width: 24px;
  height: 24px;
  left: 20px;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  border-radius: 8px;
  z-index: 2;
  align-items: center;
  justify-content: center;
  &.simpleify {
    background: transparent;
  }
}
.right {
  width: 24px;
  height: 24px;
  right: 20px;
  position: absolute;
  border-radius: 8px;
  z-index: 2;
}
</style>
