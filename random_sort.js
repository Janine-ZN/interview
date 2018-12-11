var arr = [6,56,75,78,89,98];

Array.prototype.randomSort = function () {
    var tem = [];
    var n = this.length
    for(var i=0 ; i< n;i++){
        var index = parseInt(Math.random()*this.length);
        console.log(index)
        tem.push(this[index]);
        this.splice(index,1)  //已选用的数，从数组a中移除， 实现去重复
    }
    return tem;
}
console.log(arr.randomSort());





