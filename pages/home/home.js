// pages/home/home.js
Page({
  handleJump:function(e){
    var id = e.target.dataset.id;
    if(id==1){
      wx.navigateTo({
        url:'/pages/shoplist/shoplist'
      })
    } else if (id === 2) {
      wx.navigateTo({
        url: '/pages/cat/cat'
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 1,
        img_url: "http://127.0.0.1:3000/img/banner1.jpg"
      },
      {
        id: 2,
        img_url: "http://127.0.0.1:3000/img/banner2.jpg"
      },
      {
        id: 3,
        img_url: "http://127.0.0.1:3000/img/banner3.jpg"
      }
    ],
    router: [{
        id: 1,
        name: "狗狗",
        icon: "http://127.0.0.1:3000/img/icons/grid-01.png"
      },
      {
        id: 2,
        name: "猫猫",
        icon: "http://127.0.0.1:3000/img/icons/grid-03.png"
      },
      {
        id: 3,
        name: "水族",
        icon: "http://127.0.0.1:3000/img/icons/grid-04.png"
      },
      {
        id: 4,
        name: "小宠",
        icon: "http://127.0.0.1:3000/img/icons/grid-05.png"
      },
      {
        id: 5,
        name: "领券中心",
        icon: "http://127.0.0.1:3000/img/icons/grid-06.png"
      },
      {
        id: 6,
        name: "奇奇豆",
        icon: "http://127.0.0.1:3000/img/icons/grid-07.png"
      },
      {
        id: 7,
        name: "新品尝鲜",
        icon: "http://127.0.0.1:3000/img/icons/grid-08.png"
      },
      {
        id: 8,
        name: "奇奇国际",
        icon: "http://127.0.0.1:3000/img/icons/grid-09.png"
      },
      {
        id: 9,
        name: "更多",
        icon: "http://127.0.0.1:3000/img/icons/grid-02.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})