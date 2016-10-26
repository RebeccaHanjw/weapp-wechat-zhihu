//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
});
