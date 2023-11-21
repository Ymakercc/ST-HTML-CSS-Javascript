# HTTP //HTTP请求报文由客户端（通常是浏览器）发送给服务器，以请求特定资源或执行特定操作//
HTTP(hypertevt transport protocol)协议【超文本传输协议】，协议详细规定了浏览器和万维网服器之间互相通信的规则。

## 请求报文
重点是格式与参数
···
请求行      POST /s?ie=utf-8 HTTP/1.1  //请求行包含了请求的方法、目标URL和协议版本。常见的请求法包括GET、POST、PUT、DELETE等。//

请求头      HOST: atguigu.com          //请求头部包含了关于请求的元信息，如用户代理信息、Cookie、授权信息等。这些信息帮助服务器理解请求的上下文//

        Cookie:name=guigu
        Content-type:application/x-www-form-urlencoded
        User-Agent:chrome 83

空行                               //空行用于分隔请求头部和请求体。//

请求体      如果是GET不为空，POST可以为空//对于一些请求方法（如POST），数据可以包含在请求体中。这通常用于向服务器提交表单数据、JSON数据等。//
···

## 响应报文 //HTTP响应报文由服务器发送给客户端，包含了对请求的响应信息//
···
状态行      HTTP/1.1  200  OK          //状态行包含了响应的状态码和状态消息。状态码表示请求的处理结果，如200表示成功，404表示资源未找到//

响应头      Content-type:text/html;charset=utf-8   //响应头部包含了响应的元信息，如服务器信息、响应内容类型、响应日期等。//

空行    //空行用于分隔响应头部和响应体。//

响应体      //响应体包含了服务器返回的实际数据，如HTML页面、JSON数据、图片等。//
···