let flag: boolean = false;

let a: number = 123;
console.log(a);

let str: string = "this is tsc";
console.log(str);
//第一种定义数组的方式
let arr: number[] = [1, 2, 3, 4, 5];
let arr1: string[] = ["gao", "min", "xue"];
console.log(arr1); //["gao", "min", "xue"]
//第二种定义数组的方式
let arr3: Array<number> = [2, 3, 6, 7, 8];

//第三种定义数组的方式
let arr11: any[] = ['2', 3, 6, false, 8];

//定义元组,元组属于数组的一种，它可以指定数组里面元素的类型
let arr4: [string, number, boolean] = ["ts", 12.3, true];
console.log(arr4); // ["ts", 12.3, true]

//定义枚举,用于标识状态以及固定值
//pay_status 0未支付 1支付 2交易成功
//flag 1表示true 2表示false
enum Flag {
  success = 1,
  error = -1,
}
let f: Flag = Flag.success;
console.log(f); //1

enum Color {
  red,
  blue,
  orange,
}
let c: Color = Color.red;
console.log(c); //打印出索引值 0

//定义任意类型
let num: any = 123;
num = "str";
console.log(num); //"str"
//任意类型的用处
let oBox: any = document.getElementById("box");
oBox.style.color = "red";

//null和undefined 其他（never类型）数据类型的子类型
let num1: number;
console.log(num1); //undefined 会报错

let num2: undefined;
console.log(num2); //undefined  正确

//定义并且赋值
let num3: number | undefined;
num3 = 222;
console.log(num3); //222
//定义没有赋值
let num4: number | undefined;
console.log(num4); //undefined 不会报错

//一个元素可能是number类型可能是null可能是undefined
let abc: number | null | undefined;
let ddd: any;

//void类型：表示没有任何类型，一般用于定义方法的时候方法没有返回值
//es5：：：
// function fun(){
//   console.log("run")
// }
// fun()
//ts：：：
function fun(): void {
  //表示这个方法没有任何类型，这个函数没有返回值
  console.log("run");
}
fun();

function numfun(): number {
  //指定返回的类型
  return 123;
}

//never类型：是其他类型（包括Null和undefined）的子类型，代表从不会出现的值
//这意味着声明never的变量只能被never类型所赋值

let aa: undefined;
aa = undefined;

let bb = null;
bb = null;

let cc:never;
//cc = 123 错误的写法
cc = (() => {//正确的写法
  throw new Error("错误")
})()