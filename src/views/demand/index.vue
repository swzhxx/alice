<template>
  <ion-page calss="demand">
    <ion-header>
      <Header>
        <template v-slot>
          <UserHeaderSlot></UserHeaderSlot>
        </template>
      </Header>
    </ion-header>
    <ion-content>
      <div style="padding-left: 8px; padding-right: 8px">
        <div class="demand-info">
          <div style="flex: 5" class="demand-text-block">
            <div style="font-size: 16px; font-weight: 600">小熊吹奶盖</div>
            <div style="margin-top: 8px; font-size: 14px">
              我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。
              不过，我却摇了摇头，居然还在乎白不白的问题？
            </div>
          </div>
          <div class="demand-iamges" style="flex: 2; position: relative">
            <img
              v-for="(image, index) in visibleDemandImages"
              :src="image"
              :key="index"
              :class="{ first: index == 0, second: index == 1 }"
            />
          </div>
        </div>
        <div class="list">
          <WaterfallGrid
            @click="handleToDemandSolvePage"
            style="padding: 0px"
            :items="exampleItems"
          ></WaterfallGrid>
        </div>
      </div>
    </ion-content>

    <div @click="toDressForm" class="help-her">帮她穿塔</div>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { IonHeader, IonPage, IonContent, useIonRouter } from '@ionic/vue'
import Header from '@/components/Header/index.vue'
import WaterfallGrid from '@/components/WaterfallGrid.vue'
import UserHeaderSlot from '@/components/Header/UserHeaderSlot.vue'

const ionRouter = useIonRouter()
// Example data for WaterfallGrid
const exampleItems = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/${400 + (i % 3) * 100}`,
    title: `Example Item ${i + 1}`,
    description: `This is example item number ${i + 1}`
  }))
)

const demandImages = ref([
  'https://picsum.photos/400/600',
  'https://picsum.photos/400/500'
])

const visibleDemandImages = computed(() => {
  if (demandImages.value.length > 2) {
    return demandImages.value.splice(0, 2)
  } else {
    return demandImages.value
  }
})
const avatar = ref('https://picsum.photos/200')

const handleToDemandSolvePage = () => {
  ionRouter.push({
    name: 'demand-info'
  })
}

const toDressForm = () => {
  ionRouter.push({
    name: 'dress-form'
  })
}
</script>

<style lang="less" scoped>
.demand-info {
  display: flex;
  background: linear-gradient(
      180deg,
      rgba(250, 114, 104, 0.12) 0%,
      rgba(255, 255, 255, 0.03) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  padding: 20px 8px 20px 16px;
  border-radius: 16px;
  justify-content: space-between;
  margin-left: 8pt;
  margin-right: 8px;
}

.list {
  margin-top: 8px;
}

.demand-iamges {
  margin-left: 4px;
  // height: 100%;
  display: flex;
  justify-content: center;
  img {
    border: 1px solid white;
    border-radius: 4px;
    position: absolute;
    bottom: 0px;
    max-height: 100%;
    display: inline-block;
    &.first {
      transform: rotate(5deg);
    }
    &.second {
      transform: rotate(-5deg);
    }
  }
}

.help-her {
  background: rgba(25, 23, 29, 1);
  height: 53px;
  width: 222px;
  border-radius: 18px;
  box-shadow: 0px 6px 16px 0px rgba(19, 1, 0, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 60px;
  color: white;
  left: 50%;
  transform: translateX(-50%);
}
</style>
