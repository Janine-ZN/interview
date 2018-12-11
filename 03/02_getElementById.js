// 已知有字符串 str="get-element-by-id",写一个function 将其转化为驼峰表示法 "getElementById"
var str = "get-element-by-id";
var arr = str.split("-");
console.log(typeof arr.join(" "));

var newStr = arr.join(" ").replace(/\b[a-z]/ig, function (keyword) {
    console.log(keyword);
    return keyword.toUpperCase();
});
// str.replace(/^\s+/,"");
console.log(newStr.replace(/\s+/ig,""))

