const User = require('../../models/usersModel/users')
const md5 = require('blueimp-md5')
// 注册
exports.register = async (req, res) => {
  const body = req.body
  try {
    if (await User.findOne({ email: body.email })) {
      return res.status(200).json({
        code: 1,
        message: '邮箱已存在'
      })
    }

    if (await User.findOne({ username: body.username })) {
      return res.status(200).json({
        code: 1,
        message: '用户已存在'
      })
    }

    // 处理密码加密,做多次加密处理
    body.password = md5(md5(body.password) + '0')
    await new User(body).save()

    // 注册成功，使用session记录用户登录状态
    req.session.user = body
    res.status(200).json({
      code: 0,
      message: '注册成功',
      session: req.session.user
    })
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: err.message
    })
  }
}

// 登录
exports.login = async (req, res) => {
  const body = req.body
  const password = md5(md5(body.password) + '0')
  try {
    if (await User.findOne({ email: body.email })) {
      // 登录成功，使用session记录用户登录状态
      if (await User.findOne({ email: body.email, password: password })) {
        // 登录成功，使用session记录用户登录状态

        req.session.user = body
        return res.status(200).json({
          code: 0,
          message: '登录成功',
          session: req.session.user
        })
      } else {
        return res.status(200).json({
          code: 1,
          message: '邮箱或者密码错误',
          session: ''
        })
      }
    } else {
      return res.status(200).json({
        code: 1,
        message: '未注册',
        session: ''
      })
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: err.message
    })
  }
}

// 查询所有用户
exports.finduser = async (req, res) => {
  try {
    await User.find().then(data => {
      return res.status(200).json({
        code: 0,
        message: 'OK',
        data: data
      })
    })
  } catch (err) {
    return res.status(500).json({
      code: 1,
      message: '服务端错误',
      data: []
    })
  }
}

// 删除用户
exports.removeUser = async (req, res) => {
  const body = req.query
  try {
    if (await User.deleteOne({ _id: body._id })) {
      return res.status(200).json({
        code: 0,
        message: '删除成功'
      })
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: err.message
    })
  }
}

exports.getUserInfo = (req, res) => {
  // const body = req.query
  try {
    // if (await User.deleteOne({ _id: body._id })) {
    return res.status(200).json({
      code: 0,
      data: req.session.user
    })
    // }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: err.message
    })
  }
}

// 退出
exports.logout = (req, res) => {
  try {
    req.session.user = null
    return res.status(200).json({
      code: 0,
      message: '退出成功'
    })
  } catch (err) {
    return res.status(500).json({
      code: 1,
      message: '服务端错误'
    })
  }
}
