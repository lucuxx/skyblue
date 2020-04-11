<template>
  <el-container class="container">
    <el-aside width="200px">
      <div style="color:#fff">{{ userinfo.email }}</div>
      <div>
        <router-link
          class="active"
          tag="div"
          :to="{ path: '/admin/contentManage' }"
          >内容管理</router-link
        >
        <router-link
          class="active"
          tag="div"
          :to="{ path: '/admin/usersManage' }"
          >用户管理</router-link
        >
        <router-link
          class="active"
          tag="div"
          :to="{ path: '/admin/addarticle' }"
          >新增内容</router-link
        >
      </div>
      <el-button @click="logoutHome">退出</el-button>
      <el-link
        type="primary"
        :underline="false"
        href="https://lucuxx.github.io/"
      >
        个人博客
      </el-link>
    </el-aside>
    <el-container>
      <el-header>
        <marquee style="color:#fff;">通知：更新中...</marquee>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { logout, getuserinfo } from '@/api'
export default {
  data() {
    return {
      userinfo: ''
    }
  },
  mounted() {
    this.getinfo()
  },
  methods: {
    logoutHome() {
      logout().then(res => {
        const { code } = res.data
        if (code === 0) {
          this.$router.push({ path: '/' })
        }
      })
    },
    getinfo() {
      getuserinfo().then(res => {
        const { code, data } = res.data
        if (code === 0) {
          this.userinfo = data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  // border-bottom: 5px solid #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // border-right: 5px solid #b3c0d1;

  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
  overflow: hidden;
}
.container {
  height: 100vh;
  background: #2c3e50;
  .el-aside {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #fff;
    }
    .active {
      color: #fff;
      line-height: 30px;
      width: 100px;
      border-radius: 5px;
    }
    .router-link-active {
      color: yellow;
      background: cornflowerblue;
    }
  }
}
</style>
