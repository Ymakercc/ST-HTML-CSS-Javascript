//path 模块是 Node.js 官方提供的、用来外理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求
//例如:
//path.join0 方法，用来将多个路径片段拼接成一个完整的路径字符串
//path.basename0 方法，用来从路径字符串中，将文件名解析出来

const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname, './file/1.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
});