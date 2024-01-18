type Fn = (...params: number[]) => number

/**
 * [记忆函数](https://leetcode.cn/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript)
 * @param fn 
 * @returns 
 */
function memoize(fn: Fn) {
	const map = new Map();
	const myFn = fn;
	return function (...args:number[]) {
		const myFnKey = myFn;
		const argKey = args.join(',');
		let fnMap = map.get(myFnKey);
		if (!fnMap) {
			map.set(myFnKey, new Map());
			fnMap = map.get(myFnKey);
		}
		let value = fnMap.get(argKey);
		if (value !== undefined) {
			return fnMap.get(argKey);
		}
		value = myFn(...args);
		fnMap.set(argKey, value);
		return value;
	}
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
// console.log(callCount) // 1 