<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#000"
      active-text-color="skyblue"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/main/article">文章</el-menu-item>
      <el-menu-item index="/main/project">项目</el-menu-item>
      <el-menu-item index="/main/archive">归档</el-menu-item>
      <el-menu-item index="/main/message">留言</el-menu-item>
      <el-menu-item index="/main/about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',

  data() {
    return {
      activeIndex: ''
    }
  },
  watch: {
    $route: {
      handler() {
        this.activeIndex = this.$route.fullPath
      },
      immediate: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  /deep/ .el-menu-item {
    font-size: 16px;
  }
}
</style>
