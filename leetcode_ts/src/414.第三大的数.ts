/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
function thirdMax(nums: number[]): number {
	let _nums = Array.from(new Set(nums));
	const n = _nums.length;
	_nums.sort((a, b) => a - b)
	if (n >= 3) {
		return _nums[n-3]
	}
	return _nums[n - 1]
}
// @lc code=end


// thirdMax([1, -2147483648, 2])
thirdMax([3,2,1])
