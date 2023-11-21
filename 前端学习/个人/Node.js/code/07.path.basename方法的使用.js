//使用 path.basename0 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
//path.basename(path[,ext])
//参数解读
//path <string>必选参数，表示一个路径的字符串  提取文件名
//ext<string>可选参数，表示文件扩展名  移除文件拓展名
//返回:<string>表示路径中的最后一部分


const path = require('path');

// 定义文件的存放路径
const fpath = '/a/b/c/index.html';

// const fullName = path.basename(fpath)
// console.log(fullName)//index.html

const nameWithoutExt = path.basename(fpath, '.html');//去掉拓展名
console.log(nameWithoutExt);//index
