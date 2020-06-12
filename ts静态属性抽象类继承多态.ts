//1.静态属性 静态方法
class Personsuper{
  name:string;
  static sex:string = '女';//静态属性被静态方法访问
  constructor(name:string){
    this.name = name;
  }
  run():string{//实例方法
    return `${this.name}在运动`
  }
  work():string{//实例方法
    return `${this.name}在工作`
  }
  static print():string{//静态方法 里面没法直接调用类里面的属性
    return `当前性别为：${this.sex}`//
  }
}
let people = new Personsuper("张三");
people.run()
alert(Personsuper.print());//调用静态方法都是用类去调用
alert(Personsuper.sex);//类也可以直接调用静态属性

//2.多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承

class Animal{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  eat(){//具体吃什么，让继承它的子类去决定
    console.log("吃的是什么")
  }
}
class Dog extends Animal{
  constructor(name:string){
    super(name);
  }
  eat():string{
    return `${this.name}吃骨头`
  }
}
let Dog1 = new Dog("旺旺");
alert(Dog1.eat());


class Cat extends Animal{
  constructor(name:string){
    super(name);
  }
  eat():string{
    return `${this.name}吃鱼`
  }
}

//3.tsc中的抽象类：它是提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象方法只能放在抽象类里面
//Animal 这个类要求它的子类必须包含eat方法
abstract class Animall{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  abstract eat():any;
}

class smallDog extends Animall{
  constructor(name:string){
    super(name)
  }
  eat(){
    console.log(this.name)
  }
}