<template>
  <div class="home">
    <h1>Welcome to SkyClub</h1>
    <div class="enterBtn" @click="handlerStart">Enter</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handlerStart() {
      this.$router.push({ name: 'Main' })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('http://img.zcool.cn/community/02f3795729696032f875a39935167a.jpg')
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  .enterBtn {
    width: 80px;
    border-radius: 5px;
    margin-top: 100px;
    background: rgb(235, 231, 231);
    box-shadow: 0 0 0px 0px rgb(192, 191, 191);
    animation: move 3s infinite reverse;
    line-height: 40px;
    text-align: center;
    color: #2c3e50;
    font-weight: bold;
    cursor: pointer;
  }
  @keyframes move {
    0% {
      box-shadow: 0 0 0px 0px rgb(192, 191, 191);
    }
    50% {
      box-shadow: 0 0 5px 5px rgb(0, 255, 234);
    }
    100% {
      box-shadow: 0 0 0px 0px rgb(192, 191, 191);
    }
  }
}
</style>
