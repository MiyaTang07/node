const request = require('request')

function index(req,res){
    request({
        url:'http://localhost:3000',
        method:'GET',
    },function(error,response,body){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body)
            //返回给浏览器:数据+模板引擎
            res.render('./index.art',data) //art-template模板引擎后缀.art
        }
    })
}
module.exports = index;