/**
 * 判断一个value是否为类对象
 * isObjectLike({})
 * //=> true
 * isObjectLike([1, 2, 3])
 * //=>true
 * isObjectLike(Function)
 * //=>false
 * isObjectLike(null)
 * //=> false
 */

 function isObjectLike(value: any): boolean {
     return typeof value == 'object' && value !== null;
 }

 export default isObjectLike;