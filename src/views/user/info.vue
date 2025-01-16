<template>
  <ion-page class="user-info">
    <ion-header>
      <Header></Header>
    </ion-header>

    <ion-content>
      <div class="user-profile">
        <img src="@/assets/img_girl.x.png" alt="User Avatar" class="avatar" />
        <div class="user-details">
          <h4 class="username">诺贝尔可爱奖</h4>
          <div class="user-id">
            <div class="id-tag">ID</div>
            <span style="margin-left: 4px">123456</span>
          </div>
          <p class="bio">
            很多事情犹如天气，慢慢热或是渐渐冷，等到惊悟的时候，已过了一季。
          </p>
        </div>
      </div>

      <ion-tabs style="position: relative">
        <ion-tab-bar style="flex: none">
          <ion-tab-button tab="yinxiang">
            <ion-label>印象</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="yichu">
            <ion-label>衣橱</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="richang">
            <ion-label>日常</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
        <ion-tab style="position: relative" tab="yinxiang">
          <div
            style="
              margin-top: 100px;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <img
              style="width: 77px; height: 72px"
              src="@/assets/star2.png"
              alt=""
            />
            <div style="margin-top: 20px; color: rgba(104, 104, 107, 1)">
              说明这个说明那个
            </div>
            <ion-button
              style="width: 208px; margin-top: 20px"
              fill="outline"
              color="dark"
            >
              展现我的个性</ion-button
            >
          </div>
        </ion-tab>
        <ion-tab style="position: relative" tab="yichu">
          <div
            style="
              margin-top: 100px;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <img
              style="width: 77px; height: 72px"
              src="@/assets/star2.png"
              alt=""
            />
            <div style="margin-top: 20px; color: rgba(104, 104, 107, 1)">
              说明这个说明那个
            </div>
            <ion-button
              style="width: 208px; margin-top: 20px"
              fill="outline"
              color="dark"
            >
              展现我的个性</ion-button
            >
          </div>
        </ion-tab>
        <ion-tab style="position: relative" tab="richang">
          <div
            style="
              margin-top: 100px;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <img
              style="width: 77px; height: 72px"
              src="@/assets/star2.png"
              alt=""
            />
            <div style="margin-top: 20px; color: rgba(104, 104, 107, 1)">
              说明这个说明那个
            </div>
            <ion-button
              style="width: 208px; margin-top: 20px"
              fill="outline"
              color="dark"
            >
              展现我的个性</ion-button
            >
          </div>
        </ion-tab>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTab
} from '@ionic/vue'
import Header from '@/components/Header/index.vue'
</script>
<style lang="less" scoped>
.user-info {
  .user-profile {
    padding: 20px;
    // text-align: center;

    .avatar {
      border-radius: 50%;
      margin-bottom: 16px;
      object-fit: cover;
      border-radius: 32px;
      border: 2px solid white;
      width: 84px;
      height: 84px;
    }

    .username {
      // font-size: 24px;
      margin: 8px 0;
      // color: var(--ion-color-primary);
    }

    .user-id {
      color: var(--ion-color-medium);
      margin: 4px 0;
      font-size: 12px;
      display: flex;
      .id-tag {
        width: 24px;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: rgba(255, 171, 46, 1);
        color: white;
        // display: inline-block;
      }
    }

    .bio {
      color: rgba(104, 104, 107, 1);
      margin: 16px 0;
      line-height: 1.5;
      font-size: 14px;
    }
  }
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
  // border-bottom: var(--root-border);
  border-top: 0px;
  background: transparent;
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
  background: transparent;
  &.tab-selected {
    &::before {
    }
    &::after {
      content: ' ';
      background-color: black;
      width: 10px;
      height: 4px;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 100px;
    }
    ion-label {
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
