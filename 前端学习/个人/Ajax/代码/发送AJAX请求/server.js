//1. 引用express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request  对请求报文的封装
//response 对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO AJAX');
})

//all 可以接受所有请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义请求头后要设置一个特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    response.send('HELLO AJAX');
})

//JSON响应
app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义请求头后要设置一个特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'Ymiker'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
})

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000)
})

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义请求头后要设置一个特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Yamiker' };
    response.send(JSON.stringify(data));
})

//axios服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义请求头后要设置一个特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Yamiker' };
    response.send(JSON.stringify(data));
})

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中....");
})