import { mysqlDBcommon } from "../modules/mysql"//模块引入模块

class ArticleClass{
  title: string | undefined;
  author: string | undefined;
}

let ArticleModel = new mysqlDBcommon<ArticleClass>();

export { 
  ArticleClass,
  ArticleModel
}