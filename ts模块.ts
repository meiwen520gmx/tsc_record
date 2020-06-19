/*
模块：
"内部模块"现在称为“命名空间”，“外部模块”现在称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里，这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的、
除非你明确地使用export形式之一导出他们，相反，如果想要使用其它模块导出的变量，函数，类，接口等等的时候，你必须要导入它们，可以使用import形式之一
*/

import { getuserdata } from "./modules/db";
getuserdata();

/*
export default 默认导出
每个模块都可以有一个default导出，默认导出使用default关键字标记，并且一个模块只能够有一个default导出，需要使用一种特殊的导入形式来进行
*/





//封装数据库类
import { mysqlDBcommon } from "./modules/mysql"
class Users2{
  username: string | undefined;
  password: string | undefined;
}
let uu = new Users2();
uu.username = "张三";
uu.password = "123";
let mysqldata2 = new mysqlDBcommon<Users2>();
mysqldata2.add(uu);
//进行再次封装
//1.定义了数据库类模块modules中的mysql（进行导出）
//2.封装了用户表模块model中的user（进行导出）
//在此操作用户表
import { UsersClass, userModel }  from "./model/user"//引入
let uuu = new UsersClass();
uuu.username = "李四";
uuu.password = "123";
userModel.add(uuu);