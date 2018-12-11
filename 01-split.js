function  fn() {
    var s = "one two three";
    var arr = s.split(" ");
    console.log(arr);
    var str = arr[0]+"1 "+ arr[1]+"2 " + arr[2]+"3 ";
    console.log(str);
}
fn();