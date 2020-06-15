/**
 * 接口的作用：定义行为和动作的规范，起到一种限制和规范的作用，定义标准，接口不关心类的内部状态数据，也不关心类里方法的实现细节，他只规定类里必须提供某些方法
 */

/**
 * 1.属性类接口 对json的约束
 */
//ts中定义方法传入参数
function printLabel(label: string): void {
  console.log(label);
}
printLabel("heiheihei");

//ts中自定义方法传入参数对
function print1(labelInfo: { label: string }): void {
  console.log("hahaha");
}
print1({ label: "heiheihei" });

//对批量方法传入参数进行约束
interface FullName {
  //属性接口：规定传入的参数必须包括：firstName和secondName
  firstName: string; //注意;结束
  secondName: string;
  height?: number; //这个参数可传可不传  可选属性
}
function printName(name: FullName): void {
  console.log(name);
}
// printName({这样写会报错，因为多了一个age
//   age: 20,
//   firstName: "张",
//   secondName: "三"
// })
let obj = {
  age: 20,
  firstName: "张",
  secondName: "三",
};
printName(obj); //这样写就不会报错，而且对象里面可以添加除了firstName，secondName的其他参数

//举个例子
// $.ajax({
//   type: "get",
//   url: "test.json",
//   data: {username: $("#username").val(), content: $("#content").val()},
//   dataType: "json"
// })
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}
//原生js封装的ajax
function ajax(config: Config) {
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("success");
      if (config.dataType == "json") {
        JSON.parse(xhr.responseText);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}
ajax({
  type: "get",
  url: "http://www.baidu.com",
  data: "name=zhangsan",
  dataType: "json",
});

/**
 * 2.函数类型接口 对方法传入的参数以及返回值进行约束
 */
interface encrypt {
  (key: string, value: string): string;
}
let md5: encrypt = function (key, value) {
  return "哈哈哈";
};

/**
 * 3.可索引接口:数组，对象的约束（不常用）
 */
interface UserArr {
  [index: number]: string;
}
let arrr: UserArr = ["aa", "bb"];
console.log(arrr[0]);

interface UserObj {
  [index: string]: string;
}
let obj1: UserObj = { name: "gao", age: "18" };

/**
 * 4.类类型接口 ：对类的约束和抽象类有点相似  常用
 */

interface Animal3 {
  name: string;
  eat(str: string): void;
}

class Dog3 implements Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(str:string) {//str:string不传参数也可以
    console.log(this.name+"要吃"+str);
  }
}
let dog3 = new Dog3("狗");
dog3.eat("骨头")

/**
 * 5.接口扩展：接口可以继承接口
 */
interface Animal4{
  eat():void;
}
interface Personson extends Animal4{
  work():void;
}
class WebPeople implements Personson{
  name:string;
  constructor(name:string){
    this.name = name
  }
  eat():void{
    console.log(this.name+"在吃饭")
  };
  work():void{
    console.log(this.name+"在工作中")
  }
}

let webpeople = new WebPeople("小花")
webpeople.eat();
webpeople.work();