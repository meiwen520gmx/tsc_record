var flag = false;
var a = 123;
console.log(a);
var str = "this is tsc";
console.log(str);
//第一种定义数组的方式
var arr = [1, 2, 3, 4, 5];
var arr1 = ["gao", "min", "xue"];
console.log(arr1); //["gao", "min", "xue"]
//第二种定义数组的方式
var arr3 = [2, 3, 6, 7, 8];
//第三种定义数组的方式
var arr11 = ['2', 3, 6, false, 8];
//定义元组,元组属于数组的一种，它可以指定数组里面元素的类型
var arr4 = ["ts", 12.3, true];
console.log(arr4); // ["ts", 12.3, true]
//定义枚举,用于标识状态以及固定值
//pay_status 0未支付 1支付 2交易成功
//flag 1表示true 2表示false
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f); //1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red;
console.log(c); //打印出索引值 0
//定义任意类型
var num = 123;
num = "str";
console.log(num); //"str"
//任意类型的用处
var oBox = document.getElementById("box");
oBox.style.color = "red";
//null和undefined 其他（never类型）数据类型的子类型
var num1;
console.log(num1); //undefined 会报错
var num2;
console.log(num2); //undefined  正确
//定义并且赋值
var num3;
num3 = 222;
console.log(num3); //222
//定义没有赋值
var num4;
console.log(num4); //undefined 不会报错
//一个元素可能是number类型可能是null可能是undefined
var abc;
var ddd;
//void类型：表示没有任何类型，一般用于定义方法的时候方法没有返回值
//es5：：：
// function fun(){
//   console.log("run")
// }
// fun()
//ts：：：
function fun() {
    //表示这个方法没有任何类型，这个函数没有返回值
    console.log("run");
}
fun();
function numfun() {
    //指定返回的类型
    return 123;
}
//never类型：是其他类型（包括Null和undefined）的子类型，代表从不会出现的值
//这意味着声明never的变量只能被never类型所赋值
var aa;
aa = undefined;
var bb = null;
bb = null;
var cc;
//cc = 123 错误的写法
cc = (function () {
    throw new Error("错误");
})();
