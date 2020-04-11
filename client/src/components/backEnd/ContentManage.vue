<template>
  <div class="container">
    <div class="content">
      <el-table :data="articleList" style="width: 100%">
        <el-table-column prop="createTime" label="日期"> </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <!-- <el-table-column label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" width="40" height="40" />
          </template>
        </el-table-column> -->
        <el-table-column label="内容">
          <template slot-scope="scope">
            {{ scope.row.content | richTextFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="tag" label="类型"> </el-table-column>
        <!-- <el-table-column prop="status" label="状态"> </el-table-column> -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getArticle, deleteArticle } from '@/api'

export default {
  name: 'ContentManage',
  data() {
    return {
      articleList: []
    }
  },
  filters: {
    //处理函数
    richTextFormat(value) {
      // value = value.replace(/<\/?[^>]*>/g,'')
      value = value.replace(/<\/?.+?>/g, '')
      value = value.replace(/\s+/g, '')
      if (value.length > 20) {
        return value.slice(0, 20) + '...'
      }
      return value
    }
  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    getArticleList() {
      getArticle().then(res => {
        const { data, code } = res.data
        if (code === 0) {
          this.articleList = data
        }
      })
    },
    handleEdit() {},
    handleDelete(val) {
      const id = { _id: val._id }
      deleteArticle(id).then(res => {
        const { code, message } = res.data
        if (code === 0) {
          this.$message.success(message)
          this.getArticleList()
        } else {
          this.$message.error(message)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  height: 100%;
  background: #faf7f7;
  overflow-y: auto;
  padding: 5px;
  .content {
    /deep/ .el-main {
      line-height: 40px;
    }
  }
}
// 滚动条
::-webkit-scrollbar {
  width: 0.25px;
  height: 0.25px;
  background: #fff;
  // background-image: linear-gradient(
  //   135deg,
  //   #1de9b6 0%,
  //   rgba(8, 196, 219, 0.5) 72%,
  //   rgba(0, 182, 234, 0.3) 100%
  // );
}
.container::-webkit-scrollbar-track {
  border-radius: 0;
}
.container::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-image: linear-gradient(
    135deg,
    #1de9b6 0%,
    #08c4db 72%,
    #057494 100%
  );
  transition: all 0.2s;
  border-radius: 0.25px;
}
.container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(95, 95, 95, 0.7);
}
</style>
