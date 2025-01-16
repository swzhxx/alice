<template>
  <ion-page>
    <ion-content>
      <WaterfallGrid
        @click="handleClickItem"
        :items="items"
        style="height: 100%"
      >
        <template v-slot:card="{ item }">
          <img :src="item.image" alt="" class="fixed-height-image" />
          <img
            v-if="item.type === Type.Demand"
            style="
              position: absolute;
              top: 0px;
              left: 2px;
              width: 42px;
              height: 19px;
            "
            src="@/assets/tingquan.png"
            alt=""
          />
          <ion-card-header v-if="item.title">
            <ion-card-title
              ><span style="font-size: 14px">{{
                item.title
              }}</span></ion-card-title
            >
          </ion-card-header>
          <ion-card-content v-if="item.description">
            {{ item.description }}
          </ion-card-content>
        </template>
      </WaterfallGrid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  useIonRouter,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'
import WaterfallGrid from '@/components/WaterfallGrid.vue'

enum Type {
  Common = 1,
  Demand = 2
}

const ionRouter = useIonRouter()
const items = [
  {
    image: 'https://picsum.photos/400/300?random=1',
    title: '时尚搭配 1',
    description: '最新潮流趋势，展现你的个性风格'
  },
  {
    image: 'https://picsum.photos/400/300?random=2',
    title: '优雅套装',
    description: '适合各种场合的完美选择',
    type: Type.Demand
  },
  {
    image: 'https://picsum.photos/400/300?random=3',
    title: '街头风格',
    description: '都市时尚的完美体现'
  },
  {
    image: 'https://picsum.photos/400/300?random=4',
    title: '商务正装',
    description: '专业与时尚的完美结合',
    type: Type.Demand
  },
  {
    image: 'https://picsum.photos/400/300?random=5',
    title: '休闲运动',
    description: '舒适与时尚的平衡'
  },
  {
    image: 'https://picsum.photos/400/300?random=6',
    title: '晚宴礼服',
    description: '闪耀夜晚的完美选择'
  },
  {
    image: 'https://picsum.photos/400/300?random=7',
    title: '春季新品',
    description: '迎接春天的时尚单品'
  },
  {
    image: 'https://picsum.photos/400/300?random=8',
    title: '夏日清凉',
    description: '清爽舒适的夏日穿搭'
  },
  {
    image: 'https://picsum.photos/400/300?random=9',
    title: '秋季混搭',
    description: '层次丰富的秋季搭配'
  },
  {
    image: 'https://picsum.photos/400/300?random=10',
    title: '冬季保暖',
    description: '温暖时尚的冬季选择'
  },
  {
    image: 'https://picsum.photos/400/300?random=11',
    title: '职场精英',
    description: '专业干练的职场穿搭'
  },
  {
    image: 'https://picsum.photos/400/300?random=12',
    title: '约会装扮',
    description: '浪漫甜蜜的约会造型'
  },
  {
    image: 'https://picsum.photos/400/300?random=13',
    title: '旅行必备',
    description: '舒适实用的旅行穿搭'
  },
  {
    image: 'https://picsum.photos/400/300?random=14',
    title: '运动健身',
    description: '活力四射的运动装备'
  },
  {
    image: 'https://picsum.photos/400/300?random=15',
    title: '派对狂欢',
    description: '闪耀全场的派对造型'
  },
  {
    image: 'https://picsum.photos/400/300?random=16',
    title: '学院风格',
    description: '青春活力的校园穿搭'
  },
  {
    image: 'https://picsum.photos/400/300?random=17',
    title: '复古潮流',
    description: '经典复古的时尚元素'
  },
  {
    image: 'https://picsum.photos/400/300?random=18',
    title: '极简主义',
    description: '简约而不简单的风格'
  },
  {
    image: 'https://picsum.photos/400/300?random=19',
    title: '混搭艺术',
    description: '创意十足的搭配方式'
  },
  {
    image: 'https://picsum.photos/400/300?random=20',
    title: '民族风情',
    description: '独具特色的民族元素'
  },
  {
    image: 'https://picsum.photos/400/300?random=21',
    title: '未来科技',
    description: '充满未来感的时尚设计'
  },
  {
    image: 'https://picsum.photos/400/300?random=22',
    title: '环保时尚',
    description: '可持续发展的时尚理念'
  },
  {
    image: 'https://picsum.photos/400/300?random=23',
    title: '奢华定制',
    description: '高端定制的奢华体验'
  },
  {
    image: 'https://picsum.photos/400/300?random=24',
    title: '街头潮牌',
    description: '年轻潮流的街头文化'
  },
  {
    image: 'https://picsum.photos/400/300?random=25',
    title: '文艺复古',
    description: '充满文艺气息的复古风格'
  },
  {
    image: 'https://picsum.photos/400/300?random=26',
    title: '职场新人',
    description: '适合职场新人的穿搭指南'
  },
  {
    image: 'https://picsum.photos/400/300?random=27',
    title: '时尚博主',
    description: '跟随时尚博主的穿搭灵感'
  },
  {
    image: 'https://picsum.photos/400/300?random=28',
    title: '明星同款',
    description: 'get明星同款时尚单品'
  },
  {
    image: 'https://picsum.photos/400/300?random=29',
    title: '节日限定',
    description: '节日专属的特别款式'
  },
  {
    image: 'https://picsum.photos/400/300?random=30',
    title: '经典永恒',
    description: '永不过时的经典款式'
  }
]
const handleClickItem = (item: any) => {
  if (item.type === Type.Demand) {
    ionRouter.push({ name: 'demands' })
  } else {
    ionRouter.push({ name: 'dress-info' })
  }
}
</script>

<style lang="less" scoped>
.fixed-height-image {
  /* height: 200px; */
  width: 100%;
  min-height: 50px;
  max-height: 170px;
  object-fit: cover;
  margin-bottom: 4px;
}
ion-card-header {
  padding: 4px;
  text-align: left;
}

ion-card-title {
  font-size: 14px;
}

ion-card-content {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 4px;
  font-size: 12px;
  text-align: left;
  line-height: 1.4;
  max-height: 4.2em; /* 3 lines * 1.4 line-height */
}
</style>
