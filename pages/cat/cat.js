// pages/shoplist/shoplist.js
Page({
  loadMore: function () {
    //加载下一页数据

    var pno = this.data.pageIndex + 1;
    var pageSize = this.data.pageSize;
    wx.request({
      url: "http://127.0.0.1:3000/catfood",
      data: { pno: pno, pageSize: pageSize },
      success: (res) => {
        //对图片路径处理
        for (let data of res.data.data) {
          data.imgUrl = "http://127.0.0.1:3000/img/cat/" + data.imgUrl
        }
        var rows = this.data.list.concat(res.data.data)
        //console.log(rows);
        this.setData({
          list: rows
        });
        //显示加载动画
        wx.showLoading({
          title: '正在加载...',
        });
        //卸载动画加载效果
        setTimeout(function () {
          wx.hideLoading();
        }, 1500)
      }
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 0,
    pageSize: 7,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // if(this.data.pageIndex){}
    var pno = this.data.pageIndex;
    pno++;
    this.setData({
      pageIndex: pno
    });
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})