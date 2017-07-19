import isLength from './isLength';

/**
 * 判断是否为一个类数组
 * 参数
 * 1.value
 * 返回值
 * boolean 返回true或者false
 * isArrayLike([1, 2, 3])
 */

 function isArrayLike(value: any) :boolean {
     return value != null && typeof value != 'function' && isLength(value.length);
 }
 export default isArrayLike;
