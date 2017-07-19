import isArrayLike from './isArrayLike';
import isObjectLike from './isObjectLike';

/**
 * isArrayLikeObject([1,2,3])
 * //=> true
 * isArrayLikeObject(document.body.children)
 * //=>true
 * 
 */

 function isArrayLikeObject(value: any) :boolean {
     return isArrayLike(value) && isObjectLike(value);
 }

 export default isArrayLikeObject;