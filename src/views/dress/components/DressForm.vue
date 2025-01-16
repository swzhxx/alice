<template>
  <ion-page class="dress-form">
    <!-- Swiper Carousel -->
    <swiper
      :modules="[Navigation, Pagination]"
      :pagination="{ clickable: true }"
      loop
      :slides-per-view="1"
      :space-between="0"
      class="swiper-container"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="swiper-image" />
      </swiper-slide>
    </swiper>
    <div style="flex: none" class="dress-list">
      <div class="list-title">
        穿搭详情
        <div class="cross-btn" @click="handleBack">
          <img src="@/assets/white-cross.svg" style="width: 8px" alt="" />
        </div>
      </div>
      <ion-card
        style="margin-bottom: 12px; margin-top: 12px"
        v-for="(item, index) in items"
        :key="index"
        @click.native="toProductInfo(item)"
      >
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <img :src="item.image" alt="Dress image" class="card-image" />
              </ion-col>
              <ion-col
                size="8"
                style="margin-top: 4px; display: flex; flex-direction: column"
              >
                <ion-card-title style="font-size: 16px"
                  >鸿星尔克</ion-card-title
                >
                <p style="height: 36px; overflow: hidden">
                  {{ item.description }}
                </p>
                <div class="card-actions">
                  <ion-button
                    fill="clear"
                    size="small"
                    @click="toggleLike(index)"
                    :color="item.liked ? 'danger' : 'medium'"
                  >
                    <ion-icon
                      :icon="item.liked ? heart : heartOutline"
                    ></ion-icon>
                  </ion-button>
                  <ion-button
                    color="dark"
                    fill="outline"
                    size="small"
                    @click="viewDetails(index)"
                  >
                    详情
                  </ion-button>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import {
  IonList,
  IonItem,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonPage,
  useIonRouter
} from '@ionic/vue'
import { heart, heartOutline } from 'ionicons/icons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ionRouter = useIonRouter()

interface DressItem {
  image: string
  title: string
  description: string
  liked: boolean
}

interface Slide {
  image: string
  alt: string
}

const slides = ref<Slide[]>([
  {
    image: 'https://picsum.photos/600/900?random=1',
    alt: 'Model 1'
  },
  {
    image: 'https://picsum.photos/600/900?random=2',
    alt: 'Model 2'
  },
  {
    image: 'https://picsum.photos/600/900?random=3',
    alt: 'Model 3'
  },
  {
    image: 'https://picsum.photos/600/900?random=4',
    alt: 'Model 4'
  }
])

const items = ref<DressItem[]>([
  {
    image: 'src/assets/smile.svg',
    title: '示例标题 1',
    description: '这是第一个示例描述',
    liked: false
  },
  {
    image: 'src/assets/smile.svg',
    title: '示例标题 2',
    description:
      '这是第二个示例描述aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa阿松大上打分aaaaaaaaaaaaaaaaaaaaaaadfg aaaaaaaa',
    liked: true
  }
])

function toggleLike(index: number) {
  items.value[index].liked = !items.value[index].liked
}

function viewDetails(index: number) {
  console.log('View details for item:', index)
}
const handleBack = () => {
  if (ionRouter.canGoBack()) {
    ionRouter.back()
  } else {
    ionRouter.replace({ name: 'all' })
  }
}

const toProductInfo = (item: any) => {
  ionRouter.push({
    name: 'product-info'
  })
}
</script>

<style lang="less" scoped>
.dress-form {
  // padding: 16px;
  display: flex;
  flex-direction: column;
}

.swiper-container {
  // height: 450px;
  // margin-bottom: 16px;
  width: 100%;
  flex: 1;

  .swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :deep(.swiper-slide-active) {
    .swiper-image {
    }
  }
  :deep(.swiper-slider-next) {
  }
}

.cross-btn {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(204, 204, 204, 1);
  border-radius: 50%;
  top: 20px;
  right: 20px;
}

.list-title {
  text-align: center;
  font-size: 18px;

  // position: relative;
}

.card-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}
.dress-list {
  height: 300px;
  padding: 16px;
  overflow: auto;
  position: relative;
  top: -10px;
  border-radius: 16px 16px 0 0;
  background: var(--BG-01, rgba(242, 244, 248, 1));
  z-index: 2;
}
</style>
