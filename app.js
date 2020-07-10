//开启服务
const express =require('express')
const app = express();
const router = require('./src/router/router.js')

//设置静态目录
app.use(express.static('./static'))

const BodyParser = require('body-parser')  //express的中间件
app.use(BodyParser.urlencoded({ extended: true}))
app.use(BodyParser.json())


//设置模板引擎
app.engine('art',require('express-art-template'))
app.set('views','./src/views')




app.use('/',router); //中间件：访问根路径，使用router 
app.listen(3300);