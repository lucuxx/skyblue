import instance from '@/utils/http.js'
// 查询
export async function getuers() {
  try {
    const res = await instance.get('/api/users')
    return res
  } catch (error) {
    return error
  }
}

//注册
export async function register(params) {
  try {
    const res = await instance.post('/api/register', params)
    return res
  } catch (error) {
    return error
  }
}

//登录
export async function login(params) {
  try {
    const res = await instance.post('/api/login', params)
    return res
  } catch (error) {
    return error
  }
}

// 删除
export async function removeuser(params) {
  try {
    const res = await instance.delete('/api/removeuser', params)
    return res
  } catch (error) {
    return error
  }
}

//获取个人信息
export async function getuserinfo(params) {
  try {
    const res = await instance.get('/api/getUserInfo', params)
    return res
  } catch (error) {
    return error
  }
}

// 退出
export async function logout(params) {
  try {
    const res = await instance.get('/api/logout', params)
    return res
  } catch (error) {
    return error
  }
}

// 添加文章
export async function addArticle(params) {
  try {
    const res = await instance.post('/api/addarticle', params)
    return res
  } catch (error) {
    return error
  }
}
// 获取所有文章
export async function getArticle(params) {
  try {
    const res = await instance.get('/api/articlelist', params)
    return res
  } catch (error) {
    return error
  }
}

// 根据ID查询文章
export async function getArticleDetails(params) {
  try {
    const res = await instance.get('/api/articledetails', params)
    return res
  } catch (error) {
    return error
  }
}
// 删除文章
export async function deleteArticle(params) {
  try {
    const res = await instance.delete('/api/deletearticle', params)
    return res
  } catch (error) {
    return error
  }
}
