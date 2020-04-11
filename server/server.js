const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const router = require('./routers/userRouter')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.sendStatus(200)
  /*让options请求快速返回*/ else next()
})

app.use('/public/', express.static(path.join(__dirname, './public')))
app.use(
  '/node_modules/',
  express.static(path.join(__dirname, './node_modules/'))
)

// session 、 coookie 配置
app.use(cookieParser())
app.use(
  session({
    secret: 'skyblue', //配置加密字符串，拼接，防止恶意伪造
    name: 'SKYBLUE_SEESION', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 86400000 }, //设置maxAge是86400000ms，即一天后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: false //无论是否使用session,是否默认分配一个session
  })
)

app.use(function(req, res, next) {
  if (!req.session.user) {
    if (req.url == '/api/register') {
      next() //如果请求的地址是注册则通过，进行下一个请求
    } else if (req.url == '/api/login') {
      //     res.redirect('/login');//跳转到登录页面
      next() //如果请求的地址是登录则通过，进行下一个请求
    } else if (req.headers.referer.includes('/main/')) {
      next()
    } else {
      res.status(200).json({
        code: 400,
        message: '登录失效'
      })
    }
  } else if (req.session.user) {
    next() //如果已经登录，则可以进入
  }
})

// 配置解析表单 post 请求体
app.use(urlencodedParser)
app.use(bodyparser.json())
app.use(morgan('combined'))

// 将路由容器挂载到app上
app.use(router)

// 数据库
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// 连接Mongodb数据库
mongoose.connect(
  'mongodb://localhost:27017/skyblue',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log('连接失败')
    } else {
      console.log('数据库连接成功')
      app.listen(3000, () => {
        console.log('3000:服务器启动...')
      })
    }
  }
)
