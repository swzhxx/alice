<template>
  <ion-page>
    <ion-header>
      <Header>
        <template v-slot>
          <UserHeaderSlot></UserHeaderSlot>
        </template>
      </Header>
    </ion-header>
    <ion-content>
      <swiper
        :modules="[Navigation, Pagination]"
        :pagination="{ clickable: true }"
        loop
        :slides-per-view="1"
        :space-between="0"
        class="swiper-container"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="swiper-image"
          /> </swiper-slide
      ></swiper>

      <div style="margin-top: 8px; padding-left: 16px; padding-right: 16px">
        <DressBar
          right-tips="换上同款"
          style="background: rgba(229, 233, 234, 1); height: 44px"
        ></DressBar>
      </div>
      <div style="margin-top: 4px; padding-left: 16px; padding-right: 16px">
        <h4>智慧女孩要秃头</h4>
        <p style="white-space: pre-wrap">
          我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。<br />我想虽然现在是太空时代，人类早就可以坐太空船去月球，但永远无法探索别人内心的宇宙。
        </p>
      </div>
      <Divider style="margin-bottom: 20px"></Divider>
      <Comment :list="comments"></Comment>
    </ion-content>
    <IonFooter>
      <div
        style="
          padding: 10px 20px 5px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <ion-input
          class="dress-input"
          placeholder="赞美是人的天性"
          fill="solid"
          style="flex: 1"
        ></ion-input>
        <span
          style="
            flex: none;
            display: flex;
            align-items: center;
            margin-left: 8px;
          "
        >
          <img src="@/assets/like.svg" alt="" />
          <span style="margin-left: 8px">223</span>
        </span>
      </div>
    </IonFooter>
  </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonFooter, IonInput } from '@ionic/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import Header from '@/components/Header/index.vue'
import UserHeaderSlot from '@/components/Header/UserHeaderSlot.vue'
import DressBar from '@/views/dress/components/DressBar.vue'
import Divider from '@/components/Divider.vue'
import Comment from '@/components/Comment/index.vue'
import { ref } from 'vue'
const slides = [
  {
    image: 'https://picsum.photos/800/600?random=1',
    alt: '时尚连衣裙'
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    alt: '商务套装'
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    alt: '休闲运动装'
  },
  {
    image: 'https://picsum.photos/800/600?random=4',
    alt: '晚礼服'
  },
  {
    image: 'https://picsum.photos/800/600?random=5',
    alt: '街头风格'
  },
  {
    image: 'https://picsum.photos/800/600?random=6',
    alt: '春季新品'
  },
  {
    image: 'https://picsum.photos/800/600?random=7',
    alt: '夏季清凉装'
  }
]
const comments = ref([
  {
    user_name: 'Alice',
    user_id: '1',
    user_avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    comment_content: 'This dress looks amazing!',
    dianzan_count: 12,
    parent_id: '',
    source_id: '1',
    children: [
      {
        user_name: 'Bob',
        user_id: '2',
        user_avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        comment_content: 'I agree! The color is perfect.',
        dianzan_count: 5,
        parent_id: '1',
        source_id: '2'
      },
      {
        user_name: 'Eve',
        user_id: '4',
        user_avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        comment_content: 'Where can I buy this?',
        dianzan_count: 3,
        parent_id: '1',
        source_id: '4'
      }
    ]
  },
  {
    user_name: 'Charlie',
    user_id: '3',
    user_avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    comment_content: 'Nice work! The design is very creative.',
    dianzan_count: 8,
    parent_id: '',
    source_id: '3',
    children: [
      {
        user_name: 'Dave',
        user_id: '5',
        user_avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        comment_content: 'I love the fabric choice!',
        dianzan_count: 2,
        parent_id: '3',
        source_id: '5'
      }
    ]
  },
  {
    user_name: 'Fiona',
    user_id: '6',
    user_avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    comment_content: 'This would be perfect for summer!',
    dianzan_count: 7,
    parent_id: '',
    source_id: '6'
  },
  {
    user_name: 'George',
    user_id: '7',
    user_avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    comment_content: 'The pattern is very unique.',
    dianzan_count: 4,
    parent_id: '',
    source_id: '7'
  },
  {
    user_name: 'Hannah',
    user_id: '8',
    user_avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    comment_content: 'I wish they had more colors.',
    dianzan_count: 6,
    parent_id: '',
    source_id: '8',
    children: [
      {
        user_name: 'Ian',
        user_id: '9',
        user_avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        comment_content: 'I think the current color is best!',
        dianzan_count: 3,
        parent_id: '8',
        source_id: '9'
      }
    ]
  },
  {
    user_name: 'Jack',
    user_id: '10',
    user_avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    comment_content: 'Great for formal occasions.',
    dianzan_count: 9,
    parent_id: '',
    source_id: '10'
  },
  {
    user_name: 'Karen',
    user_id: '11',
    user_avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    comment_content: 'The price seems reasonable.',
    dianzan_count: 5,
    parent_id: '',
    source_id: '11'
  },
  {
    user_name: 'Leo',
    user_id: '12',
    user_avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    comment_content: 'I like the modern design.',
    dianzan_count: 7,
    parent_id: '',
    source_id: '12'
  },
  {
    user_name: 'Mia',
    user_id: '13',
    user_avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    comment_content: 'Perfect for the office!',
    dianzan_count: 8,
    parent_id: '',
    source_id: '13'
  },
  {
    user_name: 'Noah',
    user_id: '14',
    user_avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    comment_content: 'The quality looks excellent.',
    dianzan_count: 6,
    parent_id: '',
    source_id: '14'
  },
  {
    user_name: 'Olivia',
    user_id: '15',
    user_avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    comment_content: 'I love the attention to detail.',
    dianzan_count: 10,
    parent_id: '',
    source_id: '15'
  }
])
</script>
<style lang="less" scoped>
.dress-input {
  :deep(.native-wrapper) {
    background: rgba(229, 233, 234, 1);
    border-radius: 16px;
    padding-left: 16px;
  }
}
</style>
