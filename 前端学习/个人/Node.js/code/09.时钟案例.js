//案例实现步骤
//1.创建两个正则表达式，分别用来匹配<style>和<script>标签
//2.使用fs模块，读取需要被处理的HTML文件
//3.自定义resolveCSS方法，写入index.css样式文件
//4.自定义resolveJS方法，写入index.js脚本文件
//5.自定义resolveHTML方法，写入index.html文件

//1.1导入fs文件系统处理模块

const fs = require('fs');
//1.2导入path路径处理模块
const path = require('path');

//1.3定义正则表达式分别匹配 <style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf-8', function (err, dataStr) {
    //2.2读取文件失败
    if (err) return console.log("读取文件失败" + err.message);

    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

//3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
    //3.2使用正则提取页面中的CSS标签
    const r1 = regStyle.exec(htmlStr);
    //3.3将提取出来的字符串进一步处理
    const newCSS = r1[0].replace('<style>', ' ').replace('</style>', ' ');
    //3.4 将提取出来的css样式，写入到index.css文件中
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) return console.log('写入CSS样式失败!' + err.message);
        console.log("写入成功");
    });
};


// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则，提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3 将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
        console.log('写入 JS 脚本成功！')
    })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}
