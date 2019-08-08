# selector-refractor

## 文档信息模糊查询接口
接口描述	分页查询所有结构化文档信息
地址	http:// yjv-apptest01:4040/filesInfo
请求方式	HTTPGET
请求体
参数	含义	类型	必填
pageIndex	分页查询起始页	String	是
pageSize	每页显示文档条数	String	是
keyWord	文档文件名关键字	String	否
响应体
参数	含义	类型	必填	说明
totalNumber	查询到的文档总共条数	Number	是	
totalPage	查询到的文档页数	Number	是	
pageIndex	分页查询起始页	String	是	
pageSize	每页显示文档条数	String	是	
files	查询到的文档文件名列表	Array	是	files为JSON数组，格式为：
  "files": [
    {
      "filename": "文件名.nsd"
},
   ……
]

## 查询文档内容接口
接口描述	查询选中文档内容
地址	http:// yjv-apptest01:4040/queryFile
请求方式	HTTPGET
请求体
参数	含义	类型	必填
fileName	查询的文档文件名	String	是
响应体
查询到的文档内容，类型为String，格式为标准XML。

## 保存选择内容接口
接口描述	保存选择内容
地址	http:// yjv-apptest01:4040/addSelection
请求方式	HTTPPOST
请求体
参数	含义	类型	必填
fileName	选择内容所在的文档名	String	是
author	选择人	String	是
time	选择时间	String	是
title	选择标题	String	是
content	选择内容	String	是
响应体
文本信息：保存成功！

##  查询选择内容接口
接口描述	查询选择内容列表
地址	http:// yjv-apptest01:4040/getSelection
请求方式	HTTPGET
请求体
参数	含义	类型	必填
pageIndex	分页查询起始页	String	是
pageSize	每页显示文档条数	String	是
响应体
参数	含义	类型	必填	说明
totalNumber	查询到的内容条数	Number	是	
totalPage	查询到的选择内容页数	Number	是	
pageIndex	分页查询起始页	String	是	
pageSize	每页显示查询内容条数	String	是	
files	查询到的选择内容对象列表，每个对象中包括选择内容id、选择内容所在文档文件名、选择时间、选择内容等信息	Array	是	"files": [
    {
      "id": 自增ID,
      "filename": "文件名.nsd",
      "author": "选择人",
      "time": "选择时间",
      "content": "选择内容",
      "title": "选择标题"
},
……
  ]

## 删除选择内容接口
接口描述	删除选择内容
地址	http:// yjv-apptest01:4040/removeSelection
请求方式	HTTPGET
请求体
参数	含义	类型	必填	说明
id	选择内容的id列表	Array	是	id由查询选择内容接口得到，格式如：
["130301","130302"]
响应体
文本信息：删除成功！
