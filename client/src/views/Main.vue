<template>
  <el-container>
    <el-header>
      <div class="header">
        <div class="back_icon" @click="$router.go(-1)">
          <i class="el-icon-caret-left"></i>
        </div>
        <img class="logo" alt="sky logo" src="@/assets/skylogo.png" />
        <div class="menu">
          <HeaderMenu></HeaderMenu>
        </div>
        <div class="login">
          <el-button size="small" type="primary" @click="handleLogin"
            >登录</el-button
          >
        </div>
        <div class="recommend_btn">
          <i class="el-icon-menu" @click="handleRecommend"></i>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="main">
        <div class="content">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
        <div class="recommend">
          <Recommend></Recommend>
        </div>
        <div v-if="isSideMenu" class="sideMenu">
          <transition>
            <SideMenu @closeSide="closeSide" class="fade"></SideMenu>
          </transition>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import HeaderMenu from '@/components/frontEnd/HeaderMenu.vue'
import SideMenu from '@/components/frontEnd/SideMenu.vue'
import Recommend from '@/components/frontEnd/Recommend.vue'
export default {
  components: {
    HeaderMenu,
    Recommend,
    SideMenu
  },
  data() {
    return {
      isSideMenu: false
    }
  },
  mounted() {
    this.hideBox()
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'Admin' })
    },
    handleRecommend() {
      this.isSideMenu = !this.isSideMenu
    },
    closeSide() {
      this.isSideMenu = !this.isSideMenu
    },
    hideBox() {
      document.addEventListener('click', e => {
        if (e.target.closest('.sideMenu')) {
          this.isSideMenu = true
        } else if (!e.target.closest('.recommend_btn')) {
          this.isSideMenu = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  background: #f4f5f5;
  // height: 100%;
}
.el-container,
.el-header {
  padding: 0;
}
.el-header {
  position: sticky;
  z-index: 100000000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #f4f5f5;
  .header {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back_icon {
      display: none;
    }
    .menu {
      display: block;
    }
    .logo {
      margin-left: 20px;
      height: 60px;
    }
    .login {
      display: block;
      margin-right: 20px;
    }
    .recommend_btn {
      display: none;
      font-size: 16px;
      color: #666666;
    }
  }
}
.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 0 0;
}

.main {
  display: flex;
  justify-content: space-between;
  background: #f4f5f5;
  width: 80%;
  height: 100%;
  .content {
    background: #fff;
    flex: 1;
    // padding: 10px;
  }
  .recommend {
    display: block;
    margin-left: 10px;
    width: 20%;
    background: #fff;
  }
  .sideMenu {
    display: none;
    position: absolute;
    box-shadow: 0 0 2px 2px #f0f0f0;
    top: 70px;
    right: 0px;
    width: 100px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  opacity: 0;
  // -webkit-transform: translate(-100%, 0);
  // transform: translate(-100% 0);
}
.fade-enter,
.fade-leave-to {
  // opacity: 0;
  opacity: 0;
  // -webkit-transform: translate(100%, 0);
  // transform: translate(100%, 0);
}

// 媒体查询
@media screen and (max-width: 750px) {
  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0 0 0;
    .main {
      display: flex;
      justify-content: space-between;
      background: #f4f5f5;
      width: 100%;
      height: 100%;
      .recommend {
        display: none;
        margin-left: 0;
        width: 0;
        background: rgb(253, 250, 250);
      }
      .sideMenu {
        display: block;
        position: absolute;
        box-shadow: 0 0 2px 2px #f0f0f0;
        top: 65px;
        right: 0px;
        width: 100px;
      }
    }
  }
  .el-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid #f4f5f5;
    .header {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px;
      .back_icon {
        display: block;
        font-size: 18px;
        margin-left: 10px;
      }
      .menu {
        display: none;
      }
      .logo {
        margin-left: 20px;
        height: 30px;
      }
      .login {
        display: none;
        margin-right: 0;
      }
      .recommend_btn {
        margin-right: 20px;
        display: block;
        font-size: 16px;
        color: #666666;
      }
    }
  }
}
</style>
