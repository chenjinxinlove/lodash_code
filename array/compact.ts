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

 function compact(array:any[]) :any[] {
     let resIndex: number = 0;
     const result = [];
     //如果组数为空直接返回空数组
     if(array == null) {
         return result;
     }
     //循环数组，如果value为真，添加到返回的数组中
     for (const value of array) {
         if(value) {
             result[resIndex++] = value;
         }
     }
     return result;   
 }

 console.log(compact([1,0,false, NaN]))
 export default compact;