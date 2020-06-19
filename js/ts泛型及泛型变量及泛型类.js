/**
 * 泛型：通俗理解就是解决类、接口、方法的复用性，以及对不特定数据类型的支持，要求：传入的参数和返回的参数要一致
 */
//1.同时返回string类型和number类型 (代码冗余)
function getData(value) {
    return value;
}
function getData1(value) {
    return value;
}
//2.同时返回 string和number类型  any可以解决问题但是传入的参数类型和返回的参数类型可以不一致
function getData2(value) {
    return value;
}
//any放弃类型检查 想要的是传入什么就返回什么
//T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData3(value) {
    return value;
}
console.log(getData3(123));
//3.泛型：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型，通过类的泛型来实现
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(3);
m.add(33);
m.add(5);
m.add(55);
m.add(35);
console.log(m.min());
//4.泛型类
var MinClass1 = /** @class */ (function () {
    function MinClass1() {
        this.list = [];
    }
    MinClass1.prototype.add = function (val) {
        this.list.push(val);
    };
    MinClass1.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass1;
}());
var m1 = new MinClass1();
var m2 = new MinClass1();
//泛型类
//定义一个User的类的作用是映射数据库字段
//然后定义一个mysql的类这个类用于操作数据库
//然后把User类作为参数传入到mysql中
// class User{
// 	username:string | undefined
// 	password:string | undefined
// }
// class mysql{
// 	add(user:User):boolean{//把类作为参数来约束传入数据的类型
// 		console.log("用户的信息："+user)
// 		return true
// 	}
// }
// let user11 = new User();
// user11.username = "gmx";
// user11.password = "123";
// let mysql1 = new mysql();
// mysql1.add(user11);
//操作数据库的泛型类
var Mysqld = /** @class */ (function () {
    function Mysqld() {
    }
    Mysqld.prototype.add = function (info) {
        return true;
    };
    return Mysqld;
}());
//想给User表增加数据
//定义一个User类和数据库进行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Article = /** @class */ (function () {
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return Article;
}());
//第一种
var u = new User();
u.username = "hhhh";
u.password = "111";
var d = new Mysqld();
d.add(u);
//第二种
var article1 = new Article({ title: "好文章", desc: "真好" });
var dddddd = new Mysqld();
dddddd.add(article1);
var getdata = function (value) {
    return value;
};
getdata("13");
function getdataa(value) {
    return value;
}
var mydata = getdataa;
mydata("18");
