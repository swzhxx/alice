<template>
  <div class="carousel-container">
    <div 
      class="carousel-track"
      :style="{ transform: `translateX(${offset}px)` }"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="slide"
        :class="{
          'active': isActive(index),
          'prev': isPrev(index),
          'next': isNext(index)
        }"
      >
        <img 
          :src="slide.image" 
          :alt="slide.alt"
          class="slide-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Slide {
  image: string
  alt: string
}

const props = defineProps<{
  slides: Slide[]
}>()

const activeIndex = ref(0)
const touchStartX = ref(0)
const offset = ref(0)
const isDragging = ref(false)

const isActive = (index: number) => index === activeIndex.value
const isPrev = (index: number) => index === (activeIndex.value - 1 + props.slides.length) % props.slides.length
const isNext = (index: number) => index === (activeIndex.value + 1) % props.slides.length

function handleTouchStart(event: TouchEvent) {
  touchStartX.value = event.touches[0].clientX
  isDragging.value = true
}

function handleTouchMove(event: TouchEvent) {
  if (!isDragging.value) return
  const currentX = event.touches[0].clientX
  offset.value = currentX - touchStartX.value
  
  // Update slide positions in real-time
  const slides = document.querySelectorAll<HTMLElement>('.slide')
  slides.forEach((slide, index) => {
    if (index === activeIndex.value) {
      slide.style.transform = `translateX(${offset.value}px) scale(0.8)`
    } else if (index === (activeIndex.value + 1) % props.slides.length) {
      const scale = Math.max(0.6, 0.6 + (Math.abs(offset.value) / 200))
      const translate = 30 + (offset.value / 10)
      slide.style.transform = `translateX(${translate}%) scale(${scale})`
    }
  })
}

function handleTouchEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  
  // Animate to final position
  const slides = document.querySelectorAll<HTMLElement>('.slide')
  slides.forEach((slide, index) => {
    slide.style.transition = 'transform 0.3s ease'
    if (index === activeIndex.value) {
      slide.style.transform = 'translateX(0) scale(0.8)'
    } else if (index === (activeIndex.value + 1) % props.slides.length) {
      slide.style.transform = 'translateX(30%) scale(0.6)'
    }
  })
  
  // Change active index if threshold is passed
  if (Math.abs(offset.value) > 50) {
    if (offset.value > 0) {
      activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length
    } else {
      activeIndex.value = (activeIndex.value + 1) % props.slides.length
    }
  }
  
  // Reset offset
  offset.value = 0
  
  // Remove transition after animation completes
  setTimeout(() => {
    slides.forEach(slide => {
      slide.style.transition = ''
    })
  }, 300)
}
</script>

<style lang="less" scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  &.active {
    z-index: 2;
    transform: translateX(0) scale(0.8);
  }
  
  &.prev {
    display: none;
  }
  
  &.next {
    z-index: 1;
    transform: translateX(30%) scale(0.6);
    filter: blur(5px);
  }
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
