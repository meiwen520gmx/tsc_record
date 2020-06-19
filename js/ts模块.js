/*
模块：
"内部模块"现在称为“命名空间”，“外部模块”现在称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里，这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的、
除非你明确地使用export形式之一导出他们，相反，如果想要使用其它模块导出的变量，函数，类，接口等等的时候，你必须要导入它们，可以使用import形式之一
*/
define(["require", "exports", "./modules/db", "./modules/mysql", "./model/user"], function (require, exports, db_1, mysql_1, user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    db_1.getuserdata();
    var Users2 = /** @class */ (function () {
        function Users2() {
        }
        return Users2;
    }());
    var uu = new Users2();
    uu.username = "张三";
    uu.password = "123";
    var mysqldata2 = new mysql_1.mysqlDBcommon();
    mysqldata2.add(uu);
    var uuu = new user_1.UsersClass();
    uuu.username = "李四";
    uuu.password = "123";
    user_1.userModel.add(uuu);
});
