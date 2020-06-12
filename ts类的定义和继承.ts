//1.ts中类的定义
class Person {
  name: string; //属性 前面省略了Public关键字
  constructor(params: string) {
    //构造函数 实例化类的时候触发的方法
    this.name = params;
  }
  run() {
    alert(this.name);
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
let p = new Person("gaominxue");
p.run();
// alert(p.getName());
p.setName("zzxuexi");
// alert(p.getName());

//2.ts中实现继承 extends,super 子类在继承父类的方法时还可以扩展自己的方法
class Person1 {
  name: string;
  constructor(params: string) {
    this.name = params;
  }
  run(): string {
    return `${this.name}在上学`;
  }
  work():string{
    return `${this.name}在工作`
  }
}

class Web extends Person1 {
  constructor(params: string) {
    super(params)//把实例化的实参传给父类
  }
}
let w1 = new Web("王五");
w1.run();
// alert(w1.work())

//3.类里面的修饰符， tsc里面定义属性的时候给我们提供了三种修饰符
/**
 * public  公有     在类里面 子类 类外面都可以访问
 * protected  保护  在类里面 子类里面可以访问，类外面没法访问
 * private 私有     在类里面可以访问 子类和类外面没法访问
 * 属性如果不加修饰符 默认就是公有的
 */
class Person2{
  name:string;
  private age:number;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
  getinfo():string{
    return `${this.name}的年龄是：${this.age}`
  }
}
class Web2 extends Person2{
  constructor(name:string, age:number){
   super(name, age);
  }
  work():string{
    return  `工人的名字是：${this.name}`
  }
}
let w2 = new Web2("张三", 40);
alert(w2.getinfo())
let p2 = new Person2("李四", 50);
// alert(p2.age);类外面不能访问私有属性