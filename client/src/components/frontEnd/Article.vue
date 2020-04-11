<template>
  <div class="container" v-loading.fullscreen.lock="loading">
    <div
      v-for="(item, index) in articleList"
      :key="index"
      class="content_item"
      @click="handleDetail(item._id)"
    >
      <div class="content_title">{{ item.title }}</div>
      <div class="content_content" v-html="item.content">
        <!-- {{ item.content }} -->
      </div>
      <div class="content_footer">
        <div class="content_tag">{{ item.tag }}</div>
        <div class="content_time">{{ item.createTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api'

export default {
  name: 'Article',
  // filters: {
  //   //处理函数
  //   richTextFormat(value) {
  //     // value = value.replace(/<\/?[^>]*>/g,'')
  //     value = value.replace(/<\/?.+?>/g, '')
  //     value = value.replace(/\s+/g, '')
  //     if (value.length > 60) {
  //       return value.slice(0, 60) + '...'
  //     }
  //     return value
  //   }
  // },
  data() {
    return {
      articleList: [],
      loading: false
    }
  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    handleDetail(val) {
      this.$router.push({ path: `details/${val}` })
    },
    getArticleList() {
      this.loading = true
      getArticle().then(res => {
        const { data, code } = res.data
        if (code === 0) {
          this.loading = false
          this.articleList = data
          this.articleList.forEach(item => {
            item.content = this.richTextFormat(item.content)
          })
        }
      })
    },
    richTextFormat(value) {
      // value = value.replace(/<\/?[^>]*>/g,'')
      value = value.replace(/<\/?.+?>/g, '')
      value = value.replace(/\s+/g, '')
      if (value.length > 60) {
        return value.slice(0, 60) + '...'
      }
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .content_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid #f4f5f5;
    .content_title {
      text-align: left;
      font-size: 20px;
      font-weight: bold;
    }
    .content_content {
      text-align: left;
      margin-top: 5px;
      font-size: 16px;
    }
    .content_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content_time {
        margin-left: 20px;
        font-size: 14px;
        color: gray;
      }
      .content_tag {
        min-width: 60px;
        line-height: 16px;
        padding: 5px;
        border-radius: 5px;
        background: rgb(57, 58, 58);
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
