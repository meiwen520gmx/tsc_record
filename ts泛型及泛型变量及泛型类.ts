/**
 * 泛型：通俗理解就是解决类、接口、方法的复用性，以及对不特定数据类型的支持，要求：传入的参数和返回的参数要一致
 */

 //同时返回string类型和number类型 (代码冗余)
 function getData(value:string):string{
   return value
 }
 function getData1(value:number):number{
   return value
 }
 
 //同时返回 string和number类型  any可以解决问题但是传入的参数类型和返回的参数类型可以不一致
 function getData2(value:any):any{
   return value
 }
//any放弃类型检查 想要的是传入什么就返回什么
//T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData3<T>(value:T):T{
  return value;
}
console.log(getData3<number>(123));

//泛型：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型，通过类的泛型来实现
class MinClass{
  list:number[] = [];
  add(num:number):void{
    this.list.push(num)
  }
  min():number{
    let minNum = this.list[0];
    for(let i = 0;i < this.list.length;i++){
      if(minNum>this.list[i]){
        minNum = this.list[i]
      }
    }
    return minNum;
  }
}
let m = new MinClass();
m.add(3);
m.add(33);
m.add(5);
m.add(55);
m.add(35);
console.log(m.min())



class MinClass1<T>{
  list:T[] = [];
  add(val:T):void{
    this.list.push(val)
  }
  min():T{
    let minNum = this.list[0];
    for(let i = 0;i < this.list.length;i++){
      if(minNum>this.list[i]){
        minNum = this.list[i]
      }
    }
    return minNum;
  }
}
let m1 = new MinClass1<number>();
let m2 = new MinClass1<string>();