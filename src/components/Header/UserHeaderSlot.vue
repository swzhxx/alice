<template>
  <div class="header-user">
    <div class="user-avatar-wrap">
      <img
        style="width: 100%; height: 100%; object-fit: contain"
        src="https://picsum.photos/32"
        alt="User"
      />
    </div>
    <div style="margin-left: 12px; font-size: 12px">
      <div>几勺奶酪</div>
      <div class="guanzhu">
        <img src="@/assets/pink-star.svg" alt="" />
        <span style="margin-left: 4px">关注</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.header-user {
  width: 100%;
  padding-left: 40px;
  display: flex;
  justify-content: start;
}

.user-avatar-wrap {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.guanzhu {
  margin-top: 2px;
  border: 0.5px solid rgba(250, 114, 104, 1);
  color: rgba(250, 114, 104, 1);
  justify-content: center;
  border-radius: 100px;
  display: flex;
  padding-left: 4px;
  padding-right: 4px;
}
</style>
