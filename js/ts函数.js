//1.函数的定义
//es5函数声明
function run() {
    return "run";
}
//es5匿名函数
var run2 = function () {
    return "run2";
};
//ts定义函数
function run1() {
    return "run1";
}
var run22 = function () {
    return 22;
};
//2.ts中定义方法传参
function getInfo(name, age) {
    return name + "---" + age;
}
var getinfo = function (name, age) {
    return name + "---" + age;
};
//3.没有返回值的方法
function noreturndata() {
    console.log("没有返回值");
}
//4.方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数   注意：可选参数必须配置到参数的最后面
function getInfogmx(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
getInfogmx("gmx"); //年龄可传可不传
//5.默认参数es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfozz(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
getInfozz("gmx"); //年龄可传可不传
//6.剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
sum(1, 2, 3, 4);
//三点运算符，接收形参传过来的值
function summ() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function getuserinfo(str) {
    if (typeof str === 'string') {
        return "我叫" + str;
    }
    else {
        return "我的年龄是：" + str;
    }
}
alert(getuserinfo(10));
function getuserinfo1(name, age) {
    if (age) {
        return "我叫" + name + "我的年龄是：" + age;
    }
    else {
        return "我叫" + name;
    }
}
//8.箭头函数 箭头函数里面的this指向上下文
