/*
 * @lc app=leetcode.cn id=2460 lang=typescript
 *
 * [2460] 对数组执行操作
 */

// @lc code=start
function applyOperations(nums: number[]): number[] {
	const zeroArr:number[] = [];
	for (let i = 0; i < nums.length; i++) {
		if(nums[i] === 0){
			zeroArr.push(0);
		}
		if (nums[i] === nums[i + 1]) {
			nums[i+1] = 0;
			nums[i]*=2;
		}
	}
	nums = nums.filter(v=>v!==0).concat(zeroArr);
	return nums;
};
// @lc code=end

// applyOperations([1,2,2,1,1,0]);
applyOperations([0,1]);