<template>
  <div class="navigation-bar">
    <ion-nav-link class="navigation-button active">
      <img src="@/assets/main-home.svg" style="width: 22px" alt="" />
      <span style="margin-left: 4px">首页</span>
    </ion-nav-link>
    <ion-nav-link :router-link="{ name: 'dress' }" class="special-button">
      <div class="special-button-inner"></div>
    </ion-nav-link>
    <ion-nav-link
      class="navigation-button"
      :router-link="{ name: 'user-info' }"
    >
      <img src="@/assets/main-user.svg" style="width: 22px" alt="" />
      <span style="margin-left: 4px">我的</span>
    </ion-nav-link>
  </div>
</template>co
<script setup lang="ts">
import { IonNavLink } from '@ionic/vue'
</script>
<style lang="less" scoped>
.navigation-bar {
  background: rgba(25, 23, 29, 1);
  box-shadow: 0px 4px 10px 0px rgba(32, 32, 33, 0.28);
  backdrop-filter: blur(6px);
  width: 252px;
  border-radius: 100px;
  height: 50px;
  display: flex;
  padding: 7px 16px;
  position: relative;
  justify-content: space-between;
  .special-button {
    width: 44px;
    height: 44px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(157, 232, 167, 1);
    position: relative;
    top: -50%;
    .special-button-inner {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      background-color: white;
    }
  }
  .navigation-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 100px;
    color: white;
    width: 70px;
    &.active {
      background: rgba(199, 248, 203, 1);
      color: black;
    }
  }
}
</style>
