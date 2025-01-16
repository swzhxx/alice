export type CommentItemProps = {
  user_name: string
  user_id: string
  user_avatar: string
  comment_content: string
  dianzan_count: number
  parent_id: string
  source_id: string
  children?: CommentItemProps[]
}
