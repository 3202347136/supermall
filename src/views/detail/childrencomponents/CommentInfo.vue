<template>
  <div v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <span>用户评价</span><span>更多</span>
    </div>
    <div class="info-user">
      <img v-if="commentInfo.user" :src="commentInfo.user.avatar" alt="">
      <span v-if="commentInfo.user">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-comment">
      <p>{{ commentInfo.content }}</p>
    </div>
    <div class="content">
      <span>{{ commentInfo.created | showDate }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils';
export default {
  name: "CommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style  scoped>
.comment-top {
  height: 40px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 8px solid #F2F1F2;
}

.comment-top span {
  padding: 0 27px 0 27px;
}

.info-user img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px 10px 10px 27px;
  vertical-align: middle;
}

.info-user span {
  font-size: 18px;

}

.info-comment {
  color: #979697;
  padding: 0 25px 0 25px;
}

.content span {
  color: #979697;
  font-size: 12px;
  margin-right: 10px;
}

.content {
  padding-left: 24px;
  padding-top: 5px;
}
</style>