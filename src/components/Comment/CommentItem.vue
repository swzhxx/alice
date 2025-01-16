<template>
  <div class="comment-item">
    <img :src="props.user_avatar" class="comment-avatar"></img>
    <div class="comment-content">
      <div class="user-name">{{ props.user_name }}</div>
      <div style="white-space: nowrap;">{{ props.comment_content }}</div>
      <div class="comment-tail" >
        <div style="display:flex;align-items: center;">
          <img src="@/assets/like.svg" style="width:16px;height:16px" alt="">
          <span style="margin-left:4px">{{ dianzanCount === 9999 ? '9999+' :dianzanCount }}</span> 
          <img  src="@/assets/comment.svg" style="width:16px;margin-left:8px" alt="">
        </div>
        <div>01-12</div>        
      </div>

      <comment-item style="margin-top:8px" :user_name="item.user_name" 
      :user_id="item.user_id"
      :user_avatar="item.user_avatar"
      :dianzan_count="item.dianzan_count"
      :parent_id="item.parent_id"
      :source_id="item.source_id"
      :comment_content="item.comment_content"
      :children="[]"
      v-for="(item , index) in props.children">

      </comment-item>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed , ref } from 'vue'
import { CommentItemProps } from './CommentItemProps'

defineOptions({name:'CommentItem'})
const Math = window.Math
const dianzanCount = computed(()=>{
  return Math.min(props.dianzan_count , 9999)
})
const props = defineProps<CommentItemProps>()


</script>

<style lang="less" scoped>
  .comment-item {
    display:flex;
  }

  .comment-content {
    flex:1;
    margin-left:8px;
  }
  
  .comment-avatar {
    width:36px;
    height:36px;
    object-fit: cover;
    flex:none;
    border-radius:50%;
  }
  .user-name{
    color: rgba(153, 153, 153, 1);
    font-size:14px;
    overflow:hidden;
    white-space: nowrap;

  }
  .comment-tail {
    color:rgba(153, 153, 153, 1);
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:8px;
    
  }
</style>
