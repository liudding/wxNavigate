# wxNavigate

## 使用
1. 将 wxNavigate 拷贝到你的项目中
2. 在 app.js 中引入 
 `require('/wxNaviate/index.js')`

 3. 页面传参
 ```
 wx.naviTo('/pages/edit/edit', {}, res => {
  console.log('这里是回调函数')
})
 ```

 4. 获取传输当参数

```
// 在 /pages/edit/edit 页面内
const data = wx.getPageData()
```

5. 导航返回，反向传参
```
wx.naviBack({
  content: content,
  date: new Date()
})
```
