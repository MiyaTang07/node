###架构说明

>该项目架构express+art-template，主要使用express创建node服务器，art-template作为其视图模板，通过本地server模拟本地接口返回数据到node中间层，再结合视图模板生成字符串给浏览器端。

**node中间层的作用：**
* 传统的MVC模式后端压力过大，且前后端未分离开发，而MVVM模式浏览器压力过大，且不利于SEO爬虫检索，node中间层能有效缓解服务器和浏览器的压力
* node中间层相比于MVVM模式，不直接暴露接口，更加私密安全
* node中间层更重要的好处可以做相关优化（redis缓存，请求合并，负载均衡等）

#####启动项目
```
npm install
```

#####启动服务器
```
node server.js
```
#####启动node服务
```
node app.js
```