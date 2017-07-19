/**
 * _.slice(array, [start = 0], [end=array.length])
 * 从start位置到end（但不包含end的位置），截取array数组
 * 此方法是用来在ie9一下版本替代Array#slice来支持节点列表，确保密集数组返回
 * 参数
 * 1.array(array):需要截取的数组
 * 2.[start = 0](number):截取开始位置
 * 3.[end=array.length](number):结束的位置
 * 返回值：
 * （Array）: 返回截取后的数组array
 */

 function slice(array: any[], start: number = 0, end: number): any[] {
     //取数组的长度
     let length: number = array == null ? 0 : array.length;
     //如果数组长度为0返回空数组
     if(!length) {
         return [];
     }
     //开始如果为空默认0开始   
    //  start = start == null ? 0 : start;   
    // 结束位置默认是数组的长度
    end = end === undefined ? length : end;
    //为负数从长度减去从末尾开始的
    if(start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    //如果输入的长度大于数组的长度把数组的长度等于默认的长度
    end = end > length ? length : end;
    //如果输入的结束长度是负数加长度
    if(end < 0) {
        end += length;
    }
    //如果开始大于结束把截取的长度设为0，end大于start相减并向下取正,同时start也向下取正
    length = start >　end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    let index: number = -1;
    const result: any[] = new Array(length);
    //从开始加开始到长度的数组，从而实现截取
    while(++index < length) {
        result[index] = array[index + start];
    }
    return result;
 } 

 export default slice;