import { mysqlDBcommon } from "../modules/mysql"//模块引入模块

class UsersClass{
  username: string | undefined;
  password: string | undefined;
}

let userModel = new mysqlDBcommon<UsersClass>();

export { 
  UsersClass,
  userModel
}