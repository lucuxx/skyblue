<template>
  <div class="container" v-loading.fullscreen.lock="loading">
    <div class="content">
      <quill-editor
        disabled
        v-model="articleDetails"
        class="main"
        :options="editorOption"
      >
      </quill-editor>
    </div>
  </div>
</template>

<script>
import { getArticleDetails } from '@/api'
import { Quill, quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//引入font.css
import '@/assets/css/font.css'

// 自定义字体大小
// let Size = Quill.import('attributors/style/size')
// Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
// Quill.register(Size, true)

// 自定义字体类型
var fonts = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'Times-New-Roman',
  'sans-serif',
  '宋体',
  '黑体'
]
// var Font = Quill.import('formats/font')
// Font.whitelist = fonts
// Quill.register(Font, true)

export default {
  name: 'Details',
  components: {
    quillEditor
  },
  data() {
    return {
      loading: false,
      articleDetails: '',
      editorOption: {
        placeholder: '请输入',
        theme: 'bubble', // or 'bubble'
        modules: {
          // toolbar: {
          //   container: '#toolbar'
          // }
        }
      }
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    getDetails() {
      this.loading = true
      getArticleDetails(this.$route.params).then(res => {
        const { data, code } = res.data
        if (code === 0) {
          this.loading = false
          this.articleDetails = data.content
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  // position: absolute;
  // top: 0px;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // height: 100%;
  // // overflow-y: auto;
  // background: pink;
  .content {
    padding: 10px;
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .main {
      width: 100%;
    }
  }
}
</style>
