# interview_question
面试题总结
### 一.link与@import区别与选择<br>
    link功能较多，可以定义 RSS，定义 Rel 等作用，而@import只能用于加载 css；
    当解析到link时，页面会同步加载所引的 css，而@import所引用的 css 会等到页面加载完才被加载；
    @import需要 IE5 以上才能使用；
    link可以使用 js 动态引入，@import不行；


### 二.JS中使用typeof 能得到哪些类型？
    var str = 'dsfakldj';   // string;
    var num = 123456;       // number;
    var bool = tru;         // boolen;
    var array =[];          // object;
    var obg = {};           // object;
    null                    // object;
    var fun  = function (){}// function; 

### 三.JS如果获取计算后的样式？
    1.使用jq
        $('id').css('width');
    2.原生js
        var id = document.querySelector('#id');
        document.defaultView.getComputedStyle(id,'null/css属性')// IE11以下不支持
        解决
        id.idVal.currentStyle.css属性;