const fs = require("fs");

//fs.writeFile(file,data[,options],callback);
//参数1：必选参数，需要指定一个文件路径的字符串，表示文件存放路径。
//参数2：必选参数，表示要写入的内容。
//参数3：可选参数，表示以什么格式写入文件内容，默认utf-8。
//参数4：必选参数，文件写入完成后的回调函数。

//调用方法
fs.writeFile('./file/2.txt', 'is your father', function (err) {
    //如果文件写入成功，则err的值为null
    //如果文件写入失败，则err的值为一个错误对象
    // console.log(err);

    if (err) {
        return console.log('文件写入失败' + err.message);//打印失败信息
    } else {
        console.log('文件写入成功！');
    }
})