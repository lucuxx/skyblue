<template>
  <div class="container">
    <div class="login">
      <el-form
        ref="form"
        :rules="rules"
        label-position="top"
        :model="form"
        label-width="80px"
      >
        <h2>登录</h2>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn_Style" @click="onSubmit"
          >确认</el-button
        >
        <div class="register_style">
          <el-link type="primary" :underline="false" @click="register"
            >前往注册</el-link
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api'
export default {
  data() {
    const checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }, 100)
    }
    return {
      form: {
        password: '',
        email: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        email: [
          {
            validator: checkEmail,
            required: true,
            message: '请输入邮箱',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          login(this.form).then(res => {
            const { code, message } = res.data
            if (code === 0) {
              this.$router.replace({ path: '/admin' })
            } else {
              this.$message.error(message)
              console.log('test', message)
            }
          })
        }
      })
    },
    register() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .login {
    width: 300px;
    height: 360px;
    padding: 20px;
    background: #2c3e50;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px #d3d1d1a6;
  }
  .btn_Style {
    margin-top: 60px;
  }
  .register_style {
    margin-top: 30px;
    text-align: right;
  }
}
/deep/ .el-form--label-top .el-form-item__label {
  float: left;
  font-weight: bold;
  color: #fff;
  padding: 5px;
  &:after {
    content: ':';
  }
}
/deep/ .el-form-item {
  margin-bottom: 0;
}
</style>
