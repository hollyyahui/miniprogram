Page({
  data: {
    navData: [
      {
        name: "文章",  //文本
        current: 0,    //是否是当前页，0不是  1是
        ico: 'icon-gonglve',  //不同图标
        fn: 'gotoIndex'   //对应处理函数
      }, {
        name: "话题",
        current: 0,
        ico: 'icon-liuyan',
        fn: 'gotoDiscussion'
      }, {
        name: "我的",
        current: 1,
        ico: 'icon-wode',
        fn: 'bindViewMy'
      },
    ],
    userInfo: {
      nickName: '点击登录',
      avatarUrl: 'avatar.png'
    }

  },
  gotoDiscussion: function (event) {
    wx.navigateTo({
      url: '../discussion/discussion'
    })
  },
  gotoIndex: function (event) {
    wx.navigateTo({
      url: '../index/index'
    })
  },

  getUserInfo() {
    const that = this
    wx.getUserInfo({
      success(res) {
        console.log(res)
        that.setData({ userInfo: res.userInfo })
      }
    })
  },

  onLoad() {
    wx.login({
      success(res) {
        if (res.code) {
          console.log('登录成功！' + res.code)
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail() { },
      complete() { },
    })
  }

})
