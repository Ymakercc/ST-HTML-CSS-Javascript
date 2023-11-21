const express = require('express');

const app = express();



app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5000");
    response.send('hello CORS')
})

app.listen(8000, () => {
    console.log("服务已启动...");
});