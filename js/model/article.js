define(["require", "exports", "../modules/mysql"], function (require, exports, mysql_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArticleModel = exports.ArticleClass = void 0;
    var ArticleClass = /** @class */ (function () {
        function ArticleClass() {
        }
        return ArticleClass;
    }());
    exports.ArticleClass = ArticleClass;
    var ArticleModel = new mysql_1.mysqlDBcommon();
    exports.ArticleModel = ArticleModel;
});
