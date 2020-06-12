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
alert(p.getName());
p.setName("zzxuexi");
alert(p.getName());
//2.ts中实现继承 extends,super
var Person1 = /** @class */ (function () {
    function Person1(params) {
        this.name = params;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u4E0A\u5B66";
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
