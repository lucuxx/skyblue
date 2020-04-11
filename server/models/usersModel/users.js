// const Schema = require('../../mongodb.conf')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

/**
 * 用户名
 * 密码
 */

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createTime: {
    type: String,
    default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  },
  editTime: {
    type: String,
    default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  },
  avatar: {
    type: String,
    default: '/public/img/defaultAvatar.jpg'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  // 权限
  status: {
    type: Number,
    // 0 默认无限制
    // 1 无法评论
    // 2 无法登录
    enum: [0, 1, 2],
    default: 0
  }
})
module.exports = mongoose.model('User', userSchema)
