define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getuserdata = void 0;
    function getuserdata() {
        console.log("获取数据库的数据");
        return [
            {
                title: "123123"
            },
            {
                name: "gmx"
            }
        ];
    }
    exports.getuserdata = getuserdata;
});
// function getuserdata():any[]{
//   console.log("获取数据库的数据");
//   return [
//     {
//       title: "123123"
//     },
//     {
//       name: "gmx"
//     }
//   ]
// }
// export { getuserdata };
// export default getuserdata;   引入：import getuserdata from "..."
