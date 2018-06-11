// pages/edit/edit.js
Page({


  data: {
    diary: null
  },

 
  onLoad: function (options) {
    // 获取 naviTo 传输的数据
    const data = wx.getPageData()
    this.setData({
      diary: data
    })
    console.log('页面传输数据：', data)
  },

  formSubmit(event) {
    const value = event.detail.value
    const content = value.textarea

    wx.naviBack({
      content: content,
      date: new Date()
    })
  }
})