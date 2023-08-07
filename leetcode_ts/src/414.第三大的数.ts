/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
function thirdMax(nums: number[]): number {
	const myArr: number[] = new Array(3).fill(Number.MIN_SAFE_INTEGER);
	let res = -1;
	for (let i = 0; i < nums.length; i++) {
		const val = nums[i];
		if(val === myArr[0]){
			continue;
		}
		if (val > myArr[0]) {
			myArr[1] = myArr[0];
			myArr[0] = val;
			continue;
		}
		if(val === myArr[1]){
			continue;
		}
		if (val > myArr[1]) {
			myArr[2] = myArr[1];
			myArr[1] = val;
			continue;
		}
		if(val === myArr[2]){
			continue;
		}
		if (val > myArr[2]) {
			myArr[2] = val;
		}
	}
	if (myArr[2] !== Number.MIN_SAFE_INTEGER) {
		return myArr[2]
	}
	return myArr[0]
};
// @lc code=end


thirdMax([1,-2147483648,2])
