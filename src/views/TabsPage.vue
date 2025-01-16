<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="onIonTabsDidChange">
      <ion-tab-bar :selectedTab="selectedTab" style="flex: none" slot="top">
        <ion-tab-button
          :selected="selectedTab == 'all'"
          tab="all"
          href="/tabs/all"
        >
          <!-- <ion-icon :icon="list" /> -->
          <ion-label>全部</ion-label>
        </ion-tab-button>

        <ion-tab-button
          :selected="selectedTab == 'recommend'"
          tab="recommend"
          href="/tabs/recommend"
        >
          <!-- <ion-icon :icon="star" /> -->
          <ion-label>推荐</ion-label>
        </ion-tab-button>

        <ion-tab-button
          :selected="selectedTab == 'fashion'"
          tab="fashion"
          href="/tabs/fashion"
        >
          <!-- <ion-icon :icon="shirt" /> -->
          <ion-label>潮流</ion-label>
        </ion-tab-button>

        <ion-tab-button
          :selected="selectedTab == 'match'"
          tab="match"
          href="/tabs/match"
        >
          <!-- <ion-icon :icon="colorPalette" /> -->
          <ion-label>搭配</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

      <ion-router-outlet
        mode="ios"
        style="flex: fill; overflow: hidden"
        router-animation="ios-transition"
      ></ion-router-outlet>
      <NavigationBar class="navigation-bar"></NavigationBar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue'
import { createAnimation } from '@ionic/vue'

import NavigationBar from '@/components/NavigationBar/index.vue'
import { computed, ref } from 'vue'

const selectedTab = ref('all')

const onIonTabsDidChange = (e: CustomEvent<{ tab: string }>) => {
  try {
    selectedTab.value = e.tab || 'all'
  } catch (error) {
    console.error('Error handling tab change:', error)
    selectedTab.value = 'all'
  }
}

// const myAnimation = (baseEl, opts) => {
//   const enteringEl = opts.enteringEl
//   const leavingEl = opts.leavingEl

//   const enteringAnimation = createAnimation()
//     .addElement(enteringEl)
//     .duration(300)
//     .easing('ease-in-out')
//     .fromTo('opacity', 0, 1)
//     .fromTo('transform', 'translateX(100%)', 'translateX(0)')

//   const leavingAnimation = createAnimation()
//     .addElement(leavingEl)
//     .duration(300)
//     .easing('ease-in-out')
//     .fromTo('opacity', 1, 0)
//     .fromTo('transform', 'translateX(0)', 'translateX(-100%)')

//   return createAnimation().addAnimation([enteringAnimation, leavingAnimation])
// }
</script>

<style lang="less" scoped>
.navigation-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

ion-label {
  color: rgba(0, 0, 0, 1);
  /* --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
  --color-selected: #fff; */
  transition: font-size 0.2s ease-in;
}

ion-tab-bar {
  justify-content: start;
  // padding-left: 20px;
  border-bottom: var(--root-border);
}

ion-tab-button {
  --color-selected: #fff;
  --background-focused: var(--ion-color-primary-shade);
  // flex: 0;
  flex: none;
  width: fit-content;
  font-size: 16px;
  margin-left: 20px;
  position: relative;
  &.tab-selected {
    &::before {
      content: ' ';
      background: url(@/assets/tabs-actived-2.svg);
      left: 0px;
      top: 12px;
      position: absolute;
      width: 3px;
      height: 3px;
      background-size: 100%;
    }
    &::after {
      content: ' ';
      background: url(@/assets/tabs-actived-1.svg);
      bottom: 10px;
      right: -2px;
      position: absolute;
      width: 9px;
      height: 7px;
      background-size: 100%;
    }
    ion-label {
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
