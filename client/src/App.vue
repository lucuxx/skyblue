<template>
  <div id="app">
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 页面开始加载时修改font-size
    var html = document.getElementsByTagName('html')[0]
    var oWidth =
      document.body.clientWidth || document.documentElement.clientWidth
    // 这里的750是指设计图的大小,自己根据实际情况改变
    html.style.fontSize = (oWidth / 750) * 100 + 'px'
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-image: linear-gradient(to bottom right, skyblue, pink);
}

#content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 手机屏幕的字体大小 */
@media screen and (max-width: 750px) {
  #app {
    font-size: 0.3rem;
  }
}
/* 笔记本电脑的字体大小 */
@media screen and (min-width: 750px) and (max-width: 1024px) {
  #app {
    font-size: 0.08rem;
  }
}
/* 台式电脑显示器屏幕字体大小 */
@media screen and (min-width: 1024px) {
  #app {
    font-size: 0.08rem;
  }
}
</style>
