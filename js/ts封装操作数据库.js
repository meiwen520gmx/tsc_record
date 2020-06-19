//定义一个操作mysql数据库的类 注意：要实现泛型接口这个类也应该是一个泛型类
var mysqlDB = /** @class */ (function () {
    function mysqlDB() {
    }
    mysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    mysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    mysqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return mysqlDB;
}());
//操作用户表 定义一个Users类和数据表做映射
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var uu = new Users();
uu.username = "张三";
uu.password = "123";
var mysqldata = new mysqlDB();
mysqldata.add(uu);
