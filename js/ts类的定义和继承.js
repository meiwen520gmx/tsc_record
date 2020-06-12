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
//1.ts中类的定义
var Person = /** @class */ (function () {
    function Person(params) {
        //构造函数 实例化类的时候触发的方法
        this.name = params;
    }
    Person.prototype.run = function () {
        alert(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("gaominxue");
p.run();
// alert(p.getName());
p.setName("zzxuexi");
// alert(p.getName());
//2.ts中实现继承 extends,super 子类在继承父类的方法时还可以扩展自己的方法
var Person1 = /** @class */ (function () {
    function Person1(params) {
        this.name = params;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u4E0A\u5B66";
    };
    Person1.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    return Person1;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(params) {
        return _super.call(this, params) || this; //把实例化的实参传给父类
    }
    return Web;
}(Person1));
var w1 = new Web("王五");
w1.run();
// alert(w1.work())
//3.类里面的修饰符， tsc里面定义属性的时候给我们提供了三种修饰符
/**
 * public  公有     在类里面 子类 类外面都可以访问
 * protected  保护  在类里面 子类里面可以访问，类外面没法访问
 * private 私有     在类里面可以访问 子类和类外面没法访问
 * 属性如果不加修饰符 默认就是公有的
 */
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.getinfo = function () {
        return this.name + "\u7684\u5E74\u9F84\u662F\uFF1A" + this.age;
    };
    return Person2;
}());
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name, age) {
        return _super.call(this, name, age) || this;
    }
    Web2.prototype.work = function () {
        return "\u5DE5\u4EBA\u7684\u540D\u5B57\u662F\uFF1A" + this.name;
    };
    return Web2;
}(Person2));
var w2 = new Web2("张三", 40);
alert(w2.getinfo());
var p2 = new Person2("李四", 50);
// alert(p2.age);类外面不能访问私有属性
