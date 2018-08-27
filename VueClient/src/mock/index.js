import Mock from 'mockjs'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
  })
// 用户相关
Mock.mock(/\/api\/list/, 'get', () => {
    return [1, 2, 3, 4]
}) //模拟分页查询用户信息接口
// Mock.mock(/\/user\/remove/, 'get', deleteUser)   //模拟删除用户信息接口
// Mock.mock(/\/user\/add/, 'get', createUser)     //模拟添加用户信息接口
// Mock.mock(/\/user\/edit/, 'get', updateUser)   //模拟编辑用户信息接口

export default Mock;