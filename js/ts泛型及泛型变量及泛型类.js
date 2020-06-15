/**
 * 泛型：通俗理解就是解决类、接口、方法的复用性，以及对不特定数据类型的支持，要求：传入的参数和返回的参数要一致
 */
//同时返回string类型和number类型 (代码冗余)
function getData(value) {
    return value;
}
function getData1(value) {
    return value;
}
//同时返回 string和number类型  any可以解决问题但是传入的参数类型和返回的参数类型可以不一致
function getData2(value) {
    return value;
}
//any放弃类型检查 想要的是传入什么就返回什么
//T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData3(value) {
    return value;
}
