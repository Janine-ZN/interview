/*用原生Js 写一个小demo (任意demo皆可，只要用到一下技术)
要使用的一下技术点：
l。 使用mvc的思维模式写原生js代码
2. 使用原型链，作用域链和闭包等技术
3. 尝试使用面向对象的思维方式解决问题*/
/**
 * 通过原型链判断某个变量是不是数组
 */
console.log("======================== 原型链 ===========================")
function prototypePlain() {
    var obj1 = {"x": 1, "y": 2},
        obj2 = [1, 2, 3],
        obj3 = new Date()

    console.log(obj1.__proto__ == Array.prototype);
    console.log(obj2.__proto__ == Array.prototype);
    console.log(obj3.__proto__ == Array.prototype);
}
prototypePlain();



console.log("======================== 作用域、作用域链 ===========================")
// 作用域链
var a = 10;

function fun() {    // 函数作用域
    var a = 100;    // 局部变量：执行结果 101
    // a = 100;        // 全局变量：执行结果 101
    a++;
    console.log(a); // 101
}
fun();
console.log(a);     // 加 var ：10 （此处的 a 为局部变量）|| 不加var ：101（此处的 a 为全局变量）

for (var i = 1, sum = 0; i <= 100; i++) {   // 块，不是作用域
    sum += i;
}
console.log(sum);// 5050

console.log("======================== 闭包 ===========================")
function  outer() {
    var i=1;
    return function () {
        console.log(i++);
    }
}
var getNum = outer();
getNum();
getNum();
i=1
getNum();