<template>
  <div class="tab-data">
    <WaterfallGrid :items="items" />
  </div>
</template>

<script setup>
import WaterfallGrid from '@/components/WaterfallGrid.vue'

// Sample data for 20 items
const items = [
  { id: 1, image: 'https://picsum.photos/300/400?random=1' },
  { id: 2, image: 'https://picsum.photos/300/400?random=2' },
  { id: 3, image: 'https://picsum.photos/300/400?random=3' },
  { id: 4, image: 'https://picsum.photos/300/400?random=4' },
  { id: 5, image: 'https://picsum.photos/300/400?random=5' },
  { id: 6, image: 'https://picsum.photos/300/400?random=6' },
  { id: 7, image: 'https://picsum.photos/300/400?random=7' },
  { id: 8, image: 'https://picsum.photos/300/400?random=8' },
  { id: 9, image: 'https://picsum.photos/300/400?random=9' },
  { id: 10, image: 'https://picsum.photos/300/400?random=10' },
  { id: 11, image: 'https://picsum.photos/300/400?random=11' },
  { id: 12, image: 'https://picsum.photos/300/400?random=12' },
  { id: 13, image: 'https://picsum.photos/300/400?random=13' },
  { id: 14, image: 'https://picsum.photos/300/400?random=14' },
  { id: 15, image: 'https://picsum.photos/300/400?random=15' },
  { id: 16, image: 'https://picsum.photos/300/400?random=16' },
  { id: 17, image: 'https://picsum.photos/300/400?random=17' },
  { id: 18, image: 'https://picsum.photos/300/400?random=18' },
  { id: 19, image: 'https://picsum.photos/300/400?random=19' },
  { id: 20, image: 'https://picsum.photos/300/400?random=20' }
]
</script>

<style lang="less" scoped>
/* Add any custom styles here */
.tab-data {
  overflow: auto;
  height: 100%;
}
</style>
