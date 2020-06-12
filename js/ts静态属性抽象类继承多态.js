var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.静态属性 静态方法
var Personsuper = /** @class */ (function () {
    function Personsuper(name) {
        this.name = name;
    }
    Personsuper.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    Personsuper.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    Personsuper.print = function () {
        return "\u5F53\u524D\u6027\u522B\u4E3A\uFF1A" + this.sex; //
    };
    Personsuper.sex = '女'; //静态属性被静态方法访问
    return Personsuper;
}());
var people = new Personsuper("张三");
people.run();
alert(Personsuper.print()); //调用静态方法都是用类去调用
alert(Personsuper.sex); //类也可以直接调用静态属性
//2.多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("吃的是什么");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5403\u9AA8\u5934";
    };
    return Dog;
}(Animal));
var Dog1 = new Dog("旺旺");
alert(Dog1.eat());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "\u5403\u9C7C";
    };
    return Cat;
}(Animal));
//3.tsc中的抽象类：它是提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象方法只能放在抽象类里面
//Animal 这个类要求它的子类必须包含eat方法
var Animall = /** @class */ (function () {
    function Animall(name) {
        this.name = name;
    }
    return Animall;
}());
var smallDog = /** @class */ (function (_super) {
    __extends(smallDog, _super);
    function smallDog(name) {
        return _super.call(this, name) || this;
    }
    smallDog.prototype.eat = function () {
        console.log(this.name);
    };
    return smallDog;
}(Animall));
