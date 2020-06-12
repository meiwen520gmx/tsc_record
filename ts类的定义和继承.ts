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
alert(p.getName());
p.setName("zzxuexi");
alert(p.getName());

//2.ts中实现继承 extends,super
class Person1 {
  name: string;
  constructor(params: string) {
    this.name = params;
  }
  run(): string {
    return `${this.name}在上学`;
  }
}

class Web extends Person1 {
  constructor(params: string) {
    super(params)//把实例化的实参传给父类
  }
}
let w1 = new Web("王五");
w1.run();
