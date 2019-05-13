/* 已知有字符串 foo = ”get-element-by-id”, 
写一个 function 将其转化成驼峰表示法 "getElementById"。 */

function combo(msg) {
    var arr = msg.split("-");// 字符串转成数组
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
    }
    msg = arr.join(""); // 数组转成字符串
    return msg;
}
var msg = combo("get-element-by-id");
console.log(msg);