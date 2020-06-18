/**
 * 接口的作用：定义行为和动作的规范，起到一种限制和规范的作用，定义标准，接口不关心类的内部状态数据，也不关心类里方法的实现细节，他只规定类里必须提供某些方法
 */
/**
 * 1.属性类接口 对json的约束
 */
//ts中定义方法传入参数
function printLabel(label) {
    console.log(label);
}
printLabel("heiheihei");
//ts中自定义方法传入参数对
function print1(labelInfo) {
    console.log("hahaha");
}
print1({ label: "heiheihei" });
function printName(name) {
    console.log(name);
}
// printName({这样写会报错，因为多了一个age
//   age: 20,
//   firstName: "张",
//   secondName: "三"
// })
var obj = {
    age: 20,
    firstName: "张",
    secondName: "三",
};
printName(obj); //这样写就不会报错，而且对象里面可以添加除了firstName，secondName的其他参数
//原生js封装的ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("success");
            if (config.dataType == "json") {
                JSON.parse(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "get",
    url: "http://www.baidu.com",
    data: "name=zhangsan",
    dataType: "json",
});
var md5 = function (key, value) {
    return "哈哈哈";
};
var arrr = ["aa", "bb"];
console.log(arrr[0]);
var obj1 = { name: "gao", age: "18" };
var Dog3 = /** @class */ (function () {
    function Dog3(name) {
        this.name = name;
    }
    Dog3.prototype.eat = function (str) {
        console.log(this.name + "要吃" + str);
    };
    return Dog3;
}());
var dog3 = new Dog3("狗");
dog3.eat("骨头");
var WebPeople = /** @class */ (function () {
    function WebPeople(name) {
        this.name = name;
    }
    WebPeople.prototype.eat = function () {
        console.log(this.name + "在吃饭");
    };
    ;
    WebPeople.prototype.work = function () {
        console.log(this.name + "在工作中");
    };
    return WebPeople;
}());
var webpeople = new WebPeople("小花");
webpeople.eat();
webpeople.work();
