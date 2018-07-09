Page({
  data: {
    uploadimgs: [], //上传图片列表
    editable: false, //是否可编辑
    navData: [
      {
        name: "文章",  //文本
        current: 0,    //是否是当前页，0不是  1是
        ico: 'icon-gonglve',  //不同图标
        fn: 'gotoIndex'   //对应处理函数
      }, {
        name: "话题",
        current: 1,
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
  bindViewMy: function (event) {
    wx.navigateTo({
      url: '../my/my'
    })
  },
  gotoIndex: function (event) {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  chooseImage: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        _this.setData({
          uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
        })
      }
    })
  },
  editImage: function () {
    this.setData({
      editable: !this.data.editable
    })
  },
  deleteImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
    // Array.prototype.remove = function(i){
    //   const l = this.length;
    //   if(l==1){
    //     return []
    //   }else if(i>1){
    //     return [].concat(this.splice(0,i),this.splice(i+1,l-1))
    //   }
    // }
    this.setData({
      uploadimgs: imgs.remove(e.currentTarget.dataset.index)
    })
  },
  questionSubmit: function () {

  }

})
