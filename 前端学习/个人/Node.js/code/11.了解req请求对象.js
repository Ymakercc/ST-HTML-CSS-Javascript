const http = require('http');
const server = http.createServer();
//req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    //req.url 是客户端请求的 url 地址
    const url = req.url;//从端口号开始
    //req.method 是客户端请求的 method 类型
    const method = req.method;

    const str = `你请求的URL地址是 ${url},请求的 method 类型为 ${method}`;
    console.log(str);

    //res 是响应对象，它包含了与服务器相关的数据和属性

    //为了防止中文乱码的问题，需要设置响应头 Content-Type 的值为 text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //调用 res.end() 方法，向客户端响应一些内容，并结束这次处理的过程
    res.end(str);
});

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});