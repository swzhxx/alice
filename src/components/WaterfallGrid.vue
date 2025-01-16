<template>
  <div class="waterfall-grid">
    <div class="column">
      <div
        @click="handleClickItem(item)"
        v-for="(item, index) in leftColumnItems"
        :key="index"
        class="item"
      >
        <ion-card>
          <slot name="card" :item="item">
            <img :src="item.image" alt="" class="fixed-height-image" />
            <ion-card-header v-if="item.title">
              <ion-card-title>{{ item.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content v-if="item.description">
              {{ item.description }}
            </ion-card-content>
          </slot>
        </ion-card>
      </div>
    </div>
    <div class="column">
      <div
        @click="handleClickItem(item)"
        v-for="(item, index) in rightColumnItems"
        :key="index"
        class="item"
      >
        <ion-card>
          <slot name="card" :item="item">
            <img :src="item.image" alt="" class="fixed-height-image" />
            <ion-card-header v-if="item.title">
              <ion-card-title>{{ item.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content v-if="item.description">
              {{ item.description }}
            </ion-card-content>
          </slot>
        </ion-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

interface GridItem {
  image: string
  title?: string
  description?: string
  width?: number
  height?: number
}

const props = defineProps<{
  items: Array<GridItem>
}>()

const emits = defineEmits<{
  click: [value: any]
}>()

const columns = ref<GridItem[][]>([[], []])
const columnHeights = ref([0, 0])

const isLoading = ref(false)

const preloadImages = async (items: GridItem[]) => {
  const promises = items.map((item) => {
    return new Promise<void>((resolve) => {
      const img = new Image()
      img.src = item.image
      img.onload = () => {
        item.width = img.width
        item.height = img.height
        resolve()
      }
      img.onerror = () => resolve()
    })
  })
  await Promise.all(promises)
}

const distributeItems = async () => {
  isLoading.value = true
  columns.value = [[], []]
  columnHeights.value = [0, 0]

  // Preload images first
  await preloadImages(props.items)

  props.items.forEach((item) => {
    if (!item.width || !item.height) return
    
    // Calculate actual image height based on aspect ratio
    const aspectRatio = item.height / item.width
    const imgHeight = 200 * aspectRatio // Scale based on actual dimensions

    // Find column with minimum height
    const minHeightIndex =
      columnHeights.value[0] <= columnHeights.value[1] ? 0 : 1

    // Add item to column
    columns.value[minHeightIndex].push(item)

    // Update column height
    columnHeights.value[minHeightIndex] += imgHeight + 120 // Add card content height
  })

  isLoading.value = false
}

watch(() => props.items, distributeItems, { immediate: true })

const leftColumnItems = computed(() => columns.value[0])
const rightColumnItems = computed(() => columns.value[1])

const handleClickItem = (item: any) => {
  emits('click', item)
}
</script>

<style scoped>
.waterfall-grid {
  display: flex;
  gap: 8px;
  padding: 8px;
  /* min-height: 100vh; */
  overflow-y: auto;
}

.column {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

ion-card {
  margin: 4px;
  display: flex;
  flex-direction: column;
  /* padding: 4px; */
  padding-bottom: 4px;
  img {
    width: 100%;
  }
}

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
