// pages/product/product.js
Page({

  checkForm: function(e) {
    // console.log(e);
    var pno = e.detail.value.pno;
    var name = e.detail.value.name;
    //  console.log(pno)
    //  console.log(name)
    var reg = /^[a-z0-9]{6}$/i;
    //验证pno格式
    if (!reg.test(pno)) {
      wx.showToast({
        title: '商品格式错误',
        icon: 'none'
      });
      setTimeout(function() {
        wx.hideToast();
      }, 1500);
      return;
    }
    if(!name){
      wx.showToast({
        title: '请输入商品名称',
        icon: 'none'
      });
      setTimeout(function () {
        wx.hideToast();
      }, 1500);
      return;
    }
    //发送ajax请求
    wx.request({
      url:'http://127.0.0.1:3000/addProduct',
      data:{pno:pno,name:name},
      success:(res)=>{
        if(res.data.code > 0){
          wx.showToast({
            title:res.data.msg,
          });
          setTimeout(function(){
            wx.hideToast();
          },1500)
        }else{
          wx.showToast({
            title: "商品添加失败",
            icon:'none'
          });
          setTimeout(function () {
            wx.hideToast();
          }, 1500)
        }
        
      }
    })
    //返回成功信息
  },
  /**
   * 页面的初始数据
   */
  data: {

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