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
  name: 'FashionTab',
  components: {
    IonPage,
    IonContent,
    WaterfallGrid
  },
  setup() {
    const items = [
      {
        image: 'https://picsum.photos/400/300?random=13',
        title: '春季新品',
        description: '2024春季最新潮流趋势'
      },
      {
        image: 'https://picsum.photos/400/300?random=14',
        title: '设计师系列',
        description: '国际知名设计师作品'
      },
      {
        image: 'https://picsum.photos/400/300?random=15',
        title: '街头潮流',
        description: '最in的街头时尚风格'
      },
      {
        image: 'https://picsum.photos/400/300?random=16',
        title: '高级定制',
        description: '奢华精致的高级定制'
      },
      {
        image: 'https://picsum.photos/400/300?random=17',
        title: '复古风潮',
        description: '经典复古风格重现'
      },
      {
        image: 'https://picsum.photos/400/300?random=18',
        title: '未来主义',
        description: '前卫的未来时尚风格'
      }
    ];

    return {
      items
    };
  }
});
</script>
