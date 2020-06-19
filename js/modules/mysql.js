define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mysqlDBcommon = void 0;
    //定义一个操作mysql数据库的类 注意：要实现泛型接口这个类也应该是一个泛型类
    var mysqlDBcommon = /** @class */ (function () {
        function mysqlDBcommon() {
        }
        mysqlDBcommon.prototype.add = function (info) {
            console.log(info);
            return true;
        };
        mysqlDBcommon.prototype.update = function (info, id) {
            throw new Error("Method not implemented.");
        };
        mysqlDBcommon.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        mysqlDBcommon.prototype.get = function (id) {
            throw new Error("Method not implemented.");
        };
        return mysqlDBcommon;
    }());
    exports.mysqlDBcommon = mysqlDBcommon;
});
