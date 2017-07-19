"use strict";
/**
 * _.compact(array)
 * 创建一个新数组并包含原数组中所有的非假值元素。例如false、null、0、“”、undefined和NaN都是假值
 * 参数
 * 1、array(Array) 数组参数
 * 返回值
 * （Array）：返回过滤假值的数组
 * _compact([0, 1, false, 2, '', 3]);
 * //=> [1, 2, 3]
 */
exports.__esModule = true;
function compact(array) {
    var resIndex = 0;
    var result = [];
    //如果组数为空直接返回空数组
    if (array == null) {
        return result;
    }
    //循环数组，如果value为真，添加到返回的数组中
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}
console.log(compact([1, 0, false, NaN]));
exports["default"] = compact;
