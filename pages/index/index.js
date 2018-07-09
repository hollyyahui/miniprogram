Page({
  data: {
    items: [
      { 
        title: "Hello World", 
        time: "2018-7-9 23:01:59", 
        images: "./images/article.png", 
        content: "It’s the most famous program. Known as the first example in nearly every programming language for every programmer, where did this message come from?As a function, the computer program simply tells the computer to display the words Hello, World!",
        url: 'article/article'
      },
      { 
        title: "程序员如何获得升职加薪", 
        time: "2018-8-5 23:02:59", 
        images: "./images/article.png", 
        content: "根据Robert Half Technology的调查，89%的美国员工相信自己值得更高的薪水，但是只有54%的人提出加薪，13%的人宁愿跳槽。"  
      }
    ],
    navData: [
      {
        name: "文章",  //文本
        current: 1,    //是否是当前页，0不是  1是
        ico: 'icon-gonglve',  //不同图标
        fn: 'gotoIndex'   //对应处理函数
      }, {
        name: "话题",
        current: 0,
        ico: 'icon-liuyan',
        fn: 'gotoDiscussion'
      }, {
        name: "我的",
        current: 0,
        ico: 'icon-wode',
        fn: 'bindViewMy'
      },
    ],
    
  },
  gotoDiscussion: function (event) {
    wx.navigateTo({
      url: '../discussion/discussion'
    })
  },
  bindViewMy: function (event) {
    wx.navigateTo({
      url: '../my/my'
    })
  }

})
