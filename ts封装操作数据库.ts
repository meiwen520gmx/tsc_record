/**
 * 功能：定义一个操作数据库的库，支持mysql,mssql,mongodb
 * 
 * 要求：mysql,mssql mongodb都有add,update,delete,get方法
 * 
 * 注意：约束统一的规范，以及代码重用
 * 
 * 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
 * 1.接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
 * 2.泛型：泛型就是解决类 接口 方法的复用性
 */
interface BDT<T>{
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}
//定义一个操作mysql数据库的类 注意：要实现泛型接口这个类也应该是一个泛型类
class mysqlDB<T> implements BDT<T>{
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

//操作用户表 定义一个Users类和数据表做映射
class Users{
  username: string | undefined;
  password: string | undefined;
}
let uu = new Users();
uu.username = "张三";
uu.password = "123";
let mysqldata = new mysqlDB<Users>();
mysqldata.add(uu);
