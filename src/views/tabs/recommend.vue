<template>
  <ion-page>
    <ion-content>
      <WaterfallGrid :items="items" style="height: 100%" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import WaterfallGrid from '@/components/WaterfallGrid.vue';

export default defineComponent({
  name: 'RecommendTab',
  components: {
    IonPage,
    IonContent,
    WaterfallGrid
  },
  setup() {
    const items = [
      {
        image: 'https://picsum.photos/400/300?random=7',
        title: '精选推荐 1',
        description: '根据你的喜好精心挑选'
      },
      {
        image: 'https://picsum.photos/400/300?random=8',
        title: '热门单品',
        description: '大家都在买的时尚单品'
      },
      {
        image: 'https://picsum.photos/400/300?random=9',
        title: '新品上市',
        description: '最新上架的潮流服饰'
      },
      {
        image: 'https://picsum.photos/400/300?random=10',
        title: '限时优惠',
        description: '不容错过的特别优惠'
      },
      {
        image: 'https://picsum.photos/400/300?random=11',
        title: '编辑推荐',
        description: '时尚编辑的精选推荐'
      },
      {
        image: 'https://picsum.photos/400/300?random=12',
        title: '用户最爱',
        description: '最受用户欢迎的商品'
      }
    ];

    return {
      items
    };
  }
});
</script>
