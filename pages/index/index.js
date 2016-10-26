//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {

  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  upper: function () {
    //使用本地 fake 数据实现刷新效果
    var feed = util.getData2();
    console.log(feed);
    console.log("upper");
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },
  lower: function (e) {

    console.log("lower")
  },
  scroll: function (e) {
    //console.log("scroll")
  },

  //网络请求数据, 实现首页刷新
  refresh: function(){
    var index_api = '';
    util.getData(index_api)
        .then(function(data){
          //this.setData({
          //
          //});
          console.log(data);
        });
  }

})
