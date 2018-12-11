// var arr = [1,2,3,4,5,6,7,8,9] 遍历数组输出三个不同的随机数
var arr = [1,2,3,4,5,6,7,8,9];
for(var i = 0;i < 3;i++){

    var delete_arr = parseInt(Math.random() * arr.length);// 随机获取一个下标
    console.log("取出这个随机数",arr[delete_arr]);
    console.log("取出要删除数的下标",delete_arr);
    arr.splice(delete_arr,1);// 从几开始，删除几个
    arr = arr;
    console.log("删除之后的数组",arr);
}
