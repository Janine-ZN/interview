/**
 * 随机删除输出数组中的三个值
 */
function getColors() {
    // 定义一个原始数组
    colors = ['#000000', '#FF0000', '#FFFF00', '#808000', '#00FF00',
        '#00FFFF', '#FA8072', '#454545', '#FFFF00', '#FF5733'];// 原始数组的长度
    color_length = colors.length; 
    newColor = [];
    // 从原始数组中随机删除三个
    for (let i = 0; i < 7; i++) {
        // 随机获取一个下标,并准备将其从原数组中删除
        var delete_arr = parseInt(Math.random() * colors.length);
        newColor.push(colors[delete_arr]); 
        colors.splice(delete_arr, 1); // 从几开始，删除几个
    }
    console.log("新数组==》", newColor);
    return newColor;
}
var newColor = getColors();
console.log("新数组--》" + newColor);