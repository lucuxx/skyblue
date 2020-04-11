const express = require('express')

// 创建一个路由容器
const router = express.Router()
const usersCon = require('../controllers/userscontroller/usersCon')
const articleCon = require('../controllers/articlecontroller/articleCon')

// 注册
router.post('/api/register', usersCon.register)
// 登录
router.post('/api/login', usersCon.login)

// 查询
router.get('/api/users', usersCon.finduser)

//个人信息
router.get('/api/getUserInfo', usersCon.getUserInfo)

// 删除
router.delete('/api/removeuser', usersCon.removeUser)
// 退出
router.get('/api/logout', usersCon.logout)

/*      内容管理     */

// 新增
router.post('/api/addarticle', articleCon.addarticle)
// 获取所有文章
router.get('/api/articlelist', articleCon.findArticle)
// 根据id查看详情
router.get('/api/articledetails', articleCon.findsingleArticle)
// 删除文章
router.delete('/api/deletearticle', articleCon.removeArticle)

module.exports = router
