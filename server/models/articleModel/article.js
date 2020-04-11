const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  content: {
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
  title_img: {
    type: String,
    default: '/public/img/defaultarticle.jpg'
  }
})
module.exports = mongoose.model('Article', articleSchema)
