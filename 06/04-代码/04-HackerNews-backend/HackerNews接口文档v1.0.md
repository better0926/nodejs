# 获取所有新闻信息

+ 接口地址：http://localhost:9999/getNewsList
+ 请求方式：get
+ 请求的参数： 无
+ 响应的参数
  - code 状态码
  - msg: 信息
  - list: 列表数据 
+ 响应示例
```js
{
    "code": 200,
    "msg": "获取新闻列表数据成功",
    "list": [
        {
            "_id": "5b42d20c07fbb281b79e2858",
            "title": "今天天真热",
            "url": "111",
            "text": "打败我们的不是天真，而是天真热"
        },
        {
            "_id": "5b42dc2b871ec00f6cd95c7f",
            "title": "后来",
            "url": "刘若英",
            "text": "后来，我终于学会了如何去爱，可惜你，早已消失在人海"
        },
        {
            "_id": "5b4304f1547033036c3f668e",
            "title": "我不愿让你一个人",
            "url": "五月天",
            "text": "我不愿让你一个人，一个人在人海里浮沉"
        }
    ]
}
```


# 添加新闻
+ 接口地址：http://localhost:9999/addNews
+ 请求方式：post
+ 请求参数
  - title:新闻的标题
  - url: 新闻的地址
  - text: 新闻的内容
+ 响应参数
  - code
  - msg
+ 响应示例
```js
  {
    "code": 200,
    "msg": "添加新闻成功"
  
  }
```

# 获取新闻详情
+ 接口地址：http://localhost:9999/getNewsInfo
+ 请求方式：get
+ 请求参数：
  - id: 新闻的id
+ 响应
  - code
  - msg
  - info

+ 响应示例
```js
{
    "code": 200,
    "msg": "获取详情成功",
    "info": {
        "_id": "5b4304f1547033036c3f668e",
        "title": "我不愿让你一个人",
        "url": "五月天",
        "text": "我不愿让你一个人，一个人在人海里浮沉"
    }
}
```

# 删除新闻
+ 接口地址：http://localhost:9999/deleteNews
+ 请求方式：get
+ 请求参数：
  - id: 新闻的id
+ 响应
  - code
  - msg

+ 响应示例
```js
{
    "code": 200,
    "msg": "删除新闻成功"
}
```