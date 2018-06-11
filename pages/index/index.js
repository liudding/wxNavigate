
Page({
  data: {
    diaries: [
      { content: '无言独上西楼，月如钩。寂寞梧桐深院，锁清秋。剪不断，理还乱，是离愁。别是一般滋味，在心头。', date: '2018-06-01' },
      { content: '风回小院庭芜绿，柳眼春相续。凭阑半日独无言，依旧竹声新月似当年。笙歌未散尊前在，池面冰初解', date: '2018-06-02' },
      { content: '一重山，两重山。山远天高烟水寒，相思枫叶丹。菊花开，菊花残。塞雁高飞人未还，一帘风月闲。', date: '2018-06-03' }
    ]
  },

  onTapNew() {
    const that = this

    wx.naviTo('/pages/edit/edit', {}, res => {
      console.log('收到回调数据', res)

      that.data.diaries.push(res)
      that.setData({
        diaries: that.data.diaries
      })
    })
  },

  onTapDiary(event) {
    const diary = event.currentTarget.dataset.item;
    const index = event.currentTarget.dataset.index;

    const that = this

    // 路由使用相对于根目录的路径
    // 当 wx.naviBack 时，才会调用回调函数。
    wx.naviTo('/pages/edit/edit', diary, res => {
      console.log('收到回调数据', res)

      that.data.diaries.splice(index, 1, res)

      that.setData({
        diaries: this.data.diaries
      })
    })
  }
  
})
