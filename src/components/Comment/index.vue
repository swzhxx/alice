<template>
  <div class="comments">
    <CommentItem
      v-for="comment in props.list"
      :key="comment.source_id"
      v-bind="comment"
      style="margin-bottom: 8px"
    />
  </div>
</template>

<script lang="ts" setup>
import CommentItem from './CommentItem.vue'
import { CommentItemProps } from './CommentItemProps'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    list: CommentItemProps[]
  }>(),
  { list: () => [] as CommentItemProps[] }
)
</script>

<style lang="less" scoped>
.comments {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
