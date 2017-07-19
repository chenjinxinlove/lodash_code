/**
 * 判断value是否是array-like的长度
 * 参数
 * value
 * 返回
 * boolean 返回true是false不是
 */
const MAX_SAFE_INTEGER: number = 9007199254740991;
 function isLength(value: any): boolean {
    return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
 } 

 export default isLength;