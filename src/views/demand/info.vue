<template>
  <ion-page>
    <ion-header>
      <Header style="height: 48px">
        <template v-slot>
          <UserHeaderSlot></UserHeaderSlot>
        </template>
      </Header>
    </ion-header>

    <ion-content>
      <div class="container">
        <!-- Top Section - Swiper Carousel -->
        <div class="carousel-section">
          <swiper
            :modules="[Thumbs]"
            :thumbs="{ swiper: thumbsSwiper }"
            class="main-swiper"
            :slidesPerView="1.25"
            :centeredSlides="true"
            loop
            :spaceBetween="8"
          >
            <swiper-slide v-for="(img, index) in images" :key="index">
              <img :src="img" alt="Main Image" class="swiper-image" />
            </swiper-slide>
          </swiper>

          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="8"
            :slidesPerView="images.length"
            :freeMode="true"
            :watchSlidesProgress="true"
            :slidesPreview="perNumber"
            class="thumbs-swiper"
          >
            <swiper-slide
              style="flex: none; max-width: 32px; min-width: 32px"
              v-for="(img, index) in images"
              :key="index"
            >
              <img :src="img" alt="Thumbnail" class="thumbnail" />
            </swiper-slide>
          </swiper>
        </div>

        <!-- Bottom Section - Description -->
        <div class="description-section">
          <h2 style="color: black">团子不加冰</h2>
          <p>
            你千万别跟任何人谈任何事情。你只要一谈起，就会想念起每一个人来。<br />
            我希望在20出头的生命里，做一件到八十岁想起来都还会微笑的事。
          </p>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div
        style="
          height: 64px;
          display: flex;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 5px;
          padding-bottom: 5px;
        "
      >
        <IonButton color="dark" style="flex: 1">帮他穿搭</IonButton>
        <div style="display: flex; align-items: center; margin-left: 16px">
          <img
            style="margin-right: 12px; width: 16px"
            src="@/assets/comment.svg"
            alt=""
          />
          <span>12</span>
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper/modules'
import Header from '@/components/Header/index.vue'
import {
  IonPage,
  IonHeader,
  IonContent,
  IonFooter,
  IonButton
} from '@ionic/vue'
import UserHeaderSlot from '@/components/Header/UserHeaderSlot.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/thumbs'

const images = ref([
  'https://picsum.photos/800/600',
  'https://picsum.photos/800/601',
  'https://picsum.photos/800/602',
  'https://picsum.photos/800/603'
])

const thumbsSwiper = ref(null)
const perNumber = ref(parseInt(window.innerWidth / 32 + ''))
function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper
}
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.carousel-section {
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.main-swiper {
  flex: 1;
  width: 100%;
  border-radius: 8px;
  overflow: visible;
}

.swiper-slide {
  transition: transform 0.3s ease;
}

.swiper-slide-active {
  transform: scale(1);
}

.swiper-slide-prev,
.swiper-slide-next {
  transform: scale(0.9);
  opacity: 0.8;
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.thumbs-swiper {
  height: 32px;
  margin-top: 8px;
  width: 100%;
  /* :deep(.swiper-slide) {
    width: 32px !important;
  } */
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.thumbs-swiper .swiper-slide-thumb-active .thumbnail {
  border-color: #fa7268;
}

.description-section {
  flex: 3;
  padding: 16px;
  /* background: #f8f8f8; */
  border-top: 1px solid #eee;
  color: black;
}

.description-section h2 {
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
}

.description-section p {
  font-size: 14px;

  line-height: 1.6;
}
</style>
