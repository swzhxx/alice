<template>
  <ion-page>
    <ion-header>
      <Header :simpleify="false"> </Header>
    </ion-header>
    <ion-content style="position: absolute">
      <!-- Swiper Carousel -->
      <swiper
        :modules="[Navigation, Pagination]"
        :pagination="{ clickable: true }"
        loop
        :slides-per-view="1"
        :space-between="0"
        class="swiper-container"
      >
        <swiper-slide v-for="(slide, index) in productImages" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="swiper-image" />
        </swiper-slide>
      </swiper>

      <!-- Price and Brief Description -->
      <div class="product-info">
        <h2 class="product-price">
          <div style="font-size: 12px">¥</div>
          {{ product.price }}
        </h2>
        <p class="product-title">{{ product.title }}</p>
        <p class="product-brief">{{ product.brief }}</p>
      </div>

      <!-- 
        商家信息模块结构说明：
        1. 左侧：商家图片，固定尺寸 52x52
        2. 中间：商家名称和描述
        3. 右侧：联系商家按钮
        注意：该模块需要实现以下功能：
        - 点击商家图片可查看商家详情
        - 点击联系按钮可打开聊天窗口
        - 商家描述最多显示两行，超出部分显示省略号
      -->
      <div class="merchant-info">
        <div class="merchant-left" @click="viewMerchantDetail">
          <img
            src="https://picsum.photos/52/52?random=5"
            alt="商家头像"
            class="merchant-avatar"
          />
        </div>
        <div class="merchant-middle">
          <div class="merchant-name">时尚潮流服饰店</div>
          <div class="merchant-desc">
            专注时尚女装10年，品质保证，7天无理由退换货
          </div>
        </div>
        <div class="merchant-right">
          <ion-button
            class="contact-btn"
            fill="outline"
            @click="contactMerchant"
          >
            联系商家
          </ion-button>
        </div>
      </div>

      <!-- Product Description -->
      <div class="product-description">
        <h5>图文详情</h5>
        <img
          :src="product.descriptionImage"
          loading="lazy"
          decoding="async"
          alt="商品详情长图"
          class="description-image"
        />
      </div>
    </ion-content>
    <ion-footer>
      <div
        style="
          height: 57px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 5px;
          padding-bottom: 5px;
          background: rgba(242, 244, 248, 1);
          display: flex;
          align-items: center;
        "
      >
        <div style="display: flex; align-items: center">
          <img style="width: 20px" src="@/assets/like.svg" alt="" />
          <span style="margin-left: 4px">234</span>
        </div>
        <div style="margin-left: 20px; flex: 1">
          <ion-button @click="toDressForm" style="width: 100%" color="dark"
            >试穿</ion-button
          >
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonFooter,
  IonButton,
  useIonRouter
} from '@ionic/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import Header from '@/components/Header/index.vue'
import UserHeaderSlot from '@/components/Header/UserHeaderSlot.vue'

const ionRouter = useIonRouter()

const viewMerchantDetail = (): void => {
  // TODO: 实现查看商家详情逻辑
  console.log('查看商家详情')
}

const contactMerchant = (): void => {
  // TODO: 实现联系商家逻辑
  console.log('打开聊天窗口')
}

const productImages = [
  {
    image: 'https://picsum.photos/800/600?random=1',
    alt: '商品主图'
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    alt: '商品细节'
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    alt: '商品包装'
  }
]

const product = {
  price: 299.0,
  title: '高品质时尚连衣裙',
  brief: '精选优质面料，舒适透气，适合多种场合',
  details: [
    { label: '材质', value: '聚酯纤维 95%，氨纶 5%' },
    { label: '颜色', value: '黑色' },
    { label: '尺码', value: 'S/M/L/XL' },
    { label: '重量', value: '0.5kg' },
    { label: '产地', value: '中国' }
  ],
  descriptionImage: 'https://picsum.photos/800/3000?random=4'
}

const toDressForm = () => {
  ionRouter.push({ name: 'dress-form' })
}
</script>

<style lang="less" scoped>
.product-info {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.product-price {
  /* color: #ff4444; */
  font-size: 24px;
  margin: 8px 0;
  display: flex;
  align-items: baseline;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
}

.product-brief {
  color: #666;
  font-size: 14px;
  margin: 8px 0;
}

.product-details {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.detail-item {
  display: flex;
  margin: 8px 0;
  font-size: 14px;
}

.detail-label {
  color: #999;
  width: 80px;
}

.detail-value {
  flex: 1;
}

.product-description {
  padding: 16px;
}

.description-image {
  width: 100%;
  display: block;
  margin-top: 16px;
}

.merchant-info {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.merchant-left {
  margin-right: 12px;
}

.merchant-avatar {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  object-fit: cover;
}

.merchant-middle {
  flex: 1;
  min-width: 0;
}

.merchant-name {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
}

.merchant-desc {
  font-size: 14px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.merchant-right {
  margin-left: 12px;
}

// .contact-btn {
ion-button {
  &.contact-btn {
    --ion-color-primary: rgba(250, 114, 104, 1);
    --border-color: rgba(250, 114, 104, 1);
    --color: rgba(250, 114, 104, 1);
    font-size: 14px;
  }
}
</style>
