const express = require('express')
let router = express.Router()
let index = require('./controll/index.js')

//url请求过来了，执行请求方法
router.get('/',index)

module.exports = router