// pages/message/message.js
Page({
  // 获取消息列表
  getMessage:function(){
    if(!this.data.hasMore) return;
    var pno = this.data.pageIndex+1,pageSize = this.data.pageSize;
    wx.request({
      url:'http://localhost:3000/getMessage',
      data:{pno:pno,pageSize:pageSize},
      success:(res)=>{
        //判断是否有下一页
        var pageCount = res.data.pageCount;
        var flag = pno<pageCount;
        var tempList=res.data.data;
        //更改日期格式
        for(let item of tempList){
           item.ctime = item.ctime.split("T")[0]
          //console.log(item.ctime);
        }
        //拼接请求回来的数据
        var rows = this.data.messageList.concat(tempList);
        this.setData({
          messageList:rows,
          pageIndex:pno,
          hasMore:flag
        })
        console.log(this.data.messageList);
        console.log(this.data.hasMore)
        
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    messageList:[],
    pageIndex:0,
    hasMore:true,
    pageSize:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessage();
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
    if(!this.data.hasMore) return;
    wx.showLoading({
      title: '正在加载...',
    });
    setTimeout(function(){
      wx.hideLoading();
    },1000);
    this.getMessage();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})