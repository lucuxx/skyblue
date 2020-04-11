const Article = require('../../models/articleModel/article')

// 新增
exports.addarticle = async (req, res) => {
  const body = req.body
  try {
    if (await Article.findOne({ title: body.title })) {
      // 没有重复的文章
      return res.status(200).json({
        code: 1,
        message: '发布失败'
      })
    } else {
      await new Article(body).save()
      return res.status(200).json({
        code: 0,
        message: '发布成功'
      })
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: err.message
    })
  }
}

//查询所有文章
exports.findArticle = async (req, res) => {
  try {
    await Article.find()
      .sort({ _id: -1 })
      .then(data => {
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

//根据Id查询文章
exports.findsingleArticle = async (req, res) => {
  const body = req.query
  console.log(body.id)
  try {
    await Article.findOne({ _id: body.id }).then(data => {
      return res.status(200).json({
        code: 0,
        message: '查询成功',
        data: data
      })
    })
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: '服务端出错'
    })
  }
}

// 删除文章
exports.removeArticle = async (req, res) => {
  const body = req.query
  try {
    if (await Article.deleteOne({ _id: body._id })) {
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
