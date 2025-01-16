<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="top">
        <Header style="width: 100%">
          <template v-slot>
            <ion-tab-button tab="ai" :selected="selectedTab === Tab.Ai">
              <span>Ai 推荐</span>
            </ion-tab-button>
            <ion-tab-button
              style="margin-left: 30px"
              tab="free"
              :selected="selectedTab === Tab.Free"
            >
              <span>自由搭配</span>
            </ion-tab-button>
          </template>
        </Header>
        <!-- <div>左边</div>
        <div class="ion-tab-button-wrap">
          <ion-tab-button tab="ai" :selected="selectedTab === Tab.Ai">
            <span>Ai 推荐</span>
          </ion-tab-button>
          <ion-tab-button
            style="margin-left: 30px"
            tab="free"
            :selected="selectedTab === Tab.Free"
          >
            <span>自由搭配</span>
          </ion-tab-button>
        </div>
        <div>右边</div> -->
      </ion-tab-bar>

      <ion-tab tab="ai" class="flex-none"><AiDress></AiDress></ion-tab>
      <ion-tab tab="free" class="flex-none"><FreeDress></FreeDress></ion-tab>
    </ion-tabs>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage, IonTabs, IonTabBar, IonTab, IonTabButton } from '@ionic/vue'
import { ref } from 'vue'
import AiDress from './components/AiDress.vue'
import FreeDress from './components/FreeDress.vue'
import Header from '@/components/Header/index.vue'

enum Tab {
  Ai = 'ai',
  Free = 'free'
}

const selectedTab = ref(Tab.Ai)
</script>
<style lang="less" scoped>
.image-wrapper {
  border-radius: 16px;
  flex: 1;
}

ion-tab-bar {
  border-bottom: 0px;
  display: flex;
  align-items: center;
}

ion-tab-button {
  color: black;
  font-size: 16px;
  width: fit-content;
  flex: none;
  &.tab-selected {
    font-size: 18px;
    font-weight: 600;
  }
}
ion-tab-bar {
  justify-content: start;
}

.ion-tab-button-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
