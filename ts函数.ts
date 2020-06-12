//1.函数的定义
//es5函数声明
function run() {
  return "run";
}
//es5匿名函数
let run2 = function () {
  return "run2";
};
//ts定义函数
function run1(): string {
  return "run1";
}
let run22 = function (): number {
  return 22;
};

//2.ts中定义方法传参
function getInfo(name: string, age: number): string {
  return `${name}---${age}`;
}
let getinfo = function (name: string, age: number): string {
  return `${name}---${age}`;
};

//3.没有返回值的方法
function noreturndata(): void {
  console.log("没有返回值");
}

//4.方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数   注意：可选参数必须配置到参数的最后面
function getInfogmx(name: string, age?: number): string {
  if (age) {
    return `${name}---${age}`;
  }else{
    return `${name}---年龄保密`;
  }
}
getInfogmx("gmx")//年龄可传可不传



//5.默认参数es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfozz(name: string, age: number=20): string {
  if (age) {
    return `${name}---${age}`;
  }else{
    return `${name}---年龄保密`;
  }
}
getInfozz("gmx")//年龄可传可不传


//6.剩余参数
function sum(a:number, b:number, c:number, d:number){
  return a+b+c+d;
}
sum(1,2,3,4);
//三点运算符，接收形参传过来的值
function summ(...result:number[]):number{
  let sum=0;
  for(let i=0;i<result.length;i++){
    sum+=result[i];
  }
  return sum;
}

//7.函数重载：java中方法的重载：重载指的是两个或两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
//tsc中的重载：通过为同一个函数提供多个函数类型定义来试一下多种功能的目的
//es5中出现同名方法，下面的会替换上面的方法
//ts中的重载
function getuserinfo(name:string):string;
function getuserinfo(age:number):string;
function getuserinfo(str:any):any{
  if(typeof str === 'string'){
    return "我叫"+ str;
  }else{
    return "我的年龄是："+str;
  }
}
alert(getuserinfo(10))
// alert(getuserinfo(true))//错误的写法

function getuserinfo1(name:string):string;
function getuserinfo1(name:string, age:number):string;
function getuserinfo1(name:any, age?:any):any{
  if(age){
    return "我叫"+ name+"我的年龄是："+age;
  }else{
    return "我叫"+ name;
  }
}


//8.箭头函数 箭头函数里面的this指向上下文
