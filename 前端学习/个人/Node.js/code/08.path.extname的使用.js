//使用 path.extname0方法，可以获取路径中的扩展名部分，语法格式如下:
//path.extname(path);
//参数解读
//path <string>必选参数，表示一个路径的字符串
//返回:<string>返回得到的扩展名字符串

const path = require('path');

// 这是文件的存放路径
const fpath = '/a/b/c/index.html';//路径字符串

const fext = path.extname(fpath);
console.log(fext);//输出.html
