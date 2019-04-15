/**
 * Created by web-01 on 2018/12/11.
 */
var url = "http://item.taobao.com/item.html?a=1&b=2&c=&d=4&e";
var str = url.substring(url.indexOf("?") + 1);
console.log(str);
// var str = url.split("?")[1];
var charArray = str.split("&");
var obj = {};
for (var i=0;i<charArray.length;i++){
    var charItem = charArray[i];
    var item = charItem.split("=");
    // console.log(item);
    obj[item[0]] = item[1];
}
// console.log(obj);

Object.prototype.getParameter = function () {
    var str = this.split("?")[1];
    var charArray = str.split("&");
    var obj = {};
    for (var i=0;i<charArray.length;i++){
        var charItem = charArray[i];
        var item = charItem.split("=");
        console.log(item);
        obj[item[0]] = item[1];
    }
    return obj;
}
console.log(url.getParameter());














