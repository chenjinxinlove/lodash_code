/**
 * 将array拆分成多个size长度的块，把那些块组成一个新的数组。如果array无法被分隔成全部等长的块，那么最后剩余的元素将组成一个块
 * 参数
 * 1.array(Array):需要被处理的数组
 * 2.[size=1](number):每个块的长度
 * 返回值
 * (Aarry):返回一个包括拆分数组的新数组(相对于一个二维数组)
 * chunk[tʃʌŋk] 数据块 组块
 * chunk(['a', 'b', 'c', 'd'], 2)
 * => [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3)
 * => [['a', 'b', 'c'], ['d']]
 */

import slice from './slice'

 function chunk(array: any[], size: number): any[] {
    //size不能为负值 
    size = Math.max(size, 0);
    //取array的长度，如果等于null长度为0
    const length: number = array == null? 0 :array.length;
    //如果长度为0或者size为0，返回空数组
    if(!length || size < 1) {
        return [];
    }
    let index: number = 0;
    let resIndex: number = 0;
    //新建一个size大小的组数
    const result: any[] = new Array(Math.ceil(length / size));
    //切割数组
    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size));
    }
    return result;
 }

 console.log(chunk(['a', 'b', 'c', 'd'], 2));
 export default chunk;