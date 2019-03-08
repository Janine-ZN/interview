/**
 * Q：随机取出三个不重复的数
 * var arr = [1,2,3,4,5,6,7,8,9] 遍历数组输出三个不同的随机数
 */
function getArray() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var temp = [];
    for (var i = 0; i < 3; i++) {
        var delete_arr = parseInt(Math.random() * arr.length);// 随机获取一个下标

        console.log("随机获取的下标===》", arr[delete_arr]);

        temp.push(arr[delete_arr]); // 将取出来的值追加进来

        arr.splice(delete_arr, 1);  // 因为已经取出来的，为了避免重复，将其删除

        arr = arr;  // 得到一个删除后的数组
        console.log("删除后的数组", arr);
    }
    return temp;// 返回随机取出三个数形成的数组
}
var result = getArray();
console.log("执行的结果：",result);
