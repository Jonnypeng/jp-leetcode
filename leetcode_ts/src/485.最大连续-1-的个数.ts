/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
	let n = nums.length;
	let count = 0;
	let max = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		const val = nums[i];
		if(val === 1){
			count++;
		}
		max = Math.max(count,max);
		if(val === 0){
			count = 0;
		}
	}
	return max;
};
// @lc code=end

// findMaxConsecutiveOnes([1,1,0,0,1,1,1,0,0])

