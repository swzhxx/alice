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
  name: 'MatchTab',
  components: {
    IonPage,
    IonContent,
    WaterfallGrid
  },
  setup() {
    const items = [
      {
        image: 'https://picsum.photos/400/300?random=19',
        title: '商务休闲',
        description: '工作与休闲的完美平衡'
      },
      {
        image: 'https://picsum.photos/400/300?random=20',
        title: '约会穿搭',
        description: '浪漫约会的完美选择'
      },
      {
        image: 'https://picsum.photos/400/300?random=21',
        title: '运动风格',
        description: '舒适与时尚的运动搭配'
      },
      {
        image: 'https://picsum.photos/400/300?random=22',
        title: '派对造型',
        description: '闪耀派对的完美装扮'
      },
      {
        image: 'https://picsum.photos/400/300?random=23',
        title: '旅行穿搭',
        description: '舒适实用的旅行搭配'
      },
      {
        image: 'https://picsum.photos/400/300?random=24',
        title: '日常通勤',
        description: '简约时尚的日常搭配'
      }
    ];

    return {
      items
    };
  }
});
</script>
