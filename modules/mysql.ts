interface BDTcommon<T>{
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}
//定义一个操作mysql数据库的类 注意：要实现泛型接口这个类也应该是一个泛型类
export class mysqlDBcommon<T> implements BDTcommon<T>{
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