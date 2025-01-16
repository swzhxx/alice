<template>
  <div class="dress-bar">
    <div style="flex: none">
      <img src="@/assets/smile.svg" style="width: 55px" alt="" />
    </div>
    <div class="clothes" style="flex: 1; overflow: auto">
      <img src="https://picsum.photos/32/32?random=1" alt="Clothing item 1" />
      <img src="https://picsum.photos/32/32?random=2" alt="Clothing item 2" />
      <img src="https://picsum.photos/32/32?random=3" alt="Clothing item 3" />
      <img src="https://picsum.photos/32/32?random=4" alt="Clothing item 4" />
    </div>
    <div @click="handleNavigateTo">
      {{ props.rightTips }}
      <img src="@/assets/BUT.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIonRouter } from '@ionic/vue'
const ionRouter = useIonRouter()

const props = withDefaults(
  defineProps<{
    rightTips?: string
  }>(),
  {
    rightTips: '穿搭详情'
  }
)
const handleNavigateTo = () => {
  ionRouter.push({ name: 'dress-form' })
}
</script>

<style lang="less" scoped>
.dress-bar {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 16px;
  padding: 6px 12px;
}

.clothes img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 8px;
}
</style>
