const fs = require("fs");


fs.readFile('./file/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);//打印失败的信息
    } else {
        console.log('读取文件成功！' + dataStr);//读取成功的结果
    }
})