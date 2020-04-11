<template>
  <div class="container">
    <img src="@/assets/avatar.jpg" class="avatar" width="150" />
    <p>标签云</p>
    <div class="content">
      <p
        v-for="(item, index) in labels"
        :key="index"
        class="label_style"
        :style="{ background: color[index] }"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data() {
    return {
      labels: [
        'Vue',
        'Nodejs',
        'Express',
        'Nestjs',
        'Midway',
        'Mongodb',
        'Nginx',
        'Mongoose',
        'Element',
        'Git',
        'Webpack',
        'TypeScript',
        'Python'
      ],
      color: [
        '#237777',
        '#6e79b8',
        '#7fade9',
        '#a9e97f',
        '#cfc171',
        '#71cfa3',
        '#0d6474',
        '#aa6435',
        '#54ec0e',
        '#bf0eec',
        '#0891a3',
        '#10ce8e',
        '#5c5656'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 65px);
  .avatar {
    margin-top: 30px;
  }
  .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .label_style {
      padding: 5px;
      border-radius: 5px;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
}
</style>
