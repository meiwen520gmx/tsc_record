define(["require", "exports", "../modules/mysql"], function (require, exports, mysql_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.userModel = exports.UsersClass = void 0;
    var UsersClass = /** @class */ (function () {
        function UsersClass() {
        }
        return UsersClass;
    }());
    exports.UsersClass = UsersClass;
    var userModel = new mysql_1.mysqlDBcommon();
    exports.userModel = userModel;
});
