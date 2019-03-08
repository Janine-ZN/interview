function bar(){
    return foo;
    foo=10;
    var foo = '11';
    function foo() {

    }

}
var fun = bar();
console.log(typeof fun);
console.log(typeof bar);
console.log(typeof bar());