<template>
  <div class="tree-tabs">
    <!-- Horizontal Tabs -->
    <div class="horizontal-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.tabId"
        :class="['tab-item', { active: selectedTab === tab.name }]"
        @click="selectTab(tab)"
      >
        <div class="tab-label">{{ tab.label }}</div>
      </div>
    </div>

    <!-- Vertical Tabs -->
    <div class="vertical-tabs">
      <template v-if="selectedTabChildren.length > 0">
        <div class="tab-items-container">
          <div
            v-for="child in selectedTabChildren"
            :key="child.tabId"
            :class="['tab-item', { active: selectedChildTab === child.name }]"
            @click="selectChildTab(child)"
          >
            {{ child.label }}
          </div>
        </div>
      </template>

      <!-- Slot for child content -->
      <div class="content-container">
        <keep-alive>
          <component
            :is="
              () =>
                $slots['child-content']({
                  tabId: selectedTab,
                  childTabId: selectedChildTab
                })
            "
            :key="`${selectedTab}-${selectedChildTab}`"
          />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, SlotsType } from 'vue'

interface Tab {
  tabId: number
  label: string
  name: string
  children?: Tab[]
}

defineSlots<{
  'child-content': (props: { tabId: string; childTabId: string }) => any
}>()

const selectedTab = ref('want')
const selectedChildTab = ref('')

const tabs = ref<Tab[]>([
  {
    tabId: 1,
    label: '想要',
    name: 'want',
    children: [
      { tabId: 11, label: '想要1', name: 'want-child1' },
      { tabId: 12, label: '想要2', name: 'want-child2' }
    ]
  },
  {
    tabId: 2,
    label: '我的',
    name: 'mine',
    children: [
      { tabId: 21, label: '我的1', name: 'mine-child1' },
      { tabId: 22, label: '我的2', name: 'mine-child2' }
    ]
  },
  {
    tabId: 3,
    label: '推荐',
    name: 'recommend'
  },
  {
    tabId: 4,
    label: '探索',
    name: 'explore'
  }
])

const selectedTabChildren = computed(() => {
  const currentTab = tabs.value.find((tab) => tab.name === selectedTab.value)
  return currentTab?.children || []
})

function selectTab(tab: Tab) {
  selectedTab.value = tab.name
  selectedChildTab.value = tab.children?.[0]?.name || ''
}

function selectChildTab(child: Tab) {
  selectedChildTab.value = child.name
}
</script>

<style lang="less" scoped>
.tree-tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.horizontal-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  background: rgba(236, 239, 244, 1);
  height: 41px;

  .tab-item {
    // padding: 12px 16px;
    cursor: pointer;
    font-size: 14px;
    width: 83px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .tab-label {
      position: relative;
      z-index: 11;
    }
    &.active {
      font-size: 16px;
      position: relative;
      // overflow: hidden;
      // border: 2px solid white;
      height: 46px;
      top: -5px;
      &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: -10px;
        bottom: 0;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.6) 0%,
          #ffffff 100%
        );
        border: 1px solid white;
        border-radius: 8px 8px 0 0;
        z-index: 10;
        backdrop-filter: blur(5px);
        clip-path: polygon(
          0% 0%,
          calc(100% - 15px) 0%,
          calc(100% - 14px) 1%,
          calc(100% - 13px) 2%,
          calc(100% - 12px) 3%,
          calc(100% - 11px) 4%,
          calc(100% - 10px) 5%,
          100% 98%,
          100% 100%,
          0% 100%
        );
      }
      &::after {
        position: absolute;
        content: ' ';
        width: 10px;
        height: 4px;
        background: rgba(25, 23, 29, 1);
        z-index: 11;
        pointer-events: none;
        bottom: 6px;
        border-radius: 5px;
      }
    }
  }
}

.vertical-tabs {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 8px 0;
  overflow: hidden;

  .tab-items-container {
    width: 60px;
    display: flex;
    flex-direction: column;
  }

  .content-container {
    flex: 1;
  }

  .tab-item {
    cursor: pointer;
    padding: 4px 8px;
    margin: 4px 4px;
    font-size: 14px;
    white-space: nowrap;
    &.active {
      border-radius: 100px;
      color: white;
      background-color: #f5f5f5;
      background: var(--neutral-01, rgba(25, 23, 29, 1));
    }
  }
}
</style>
