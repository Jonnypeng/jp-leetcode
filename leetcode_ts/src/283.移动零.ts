/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let arr: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		if(nums[i]===0){
			arr.push(i)
		}
	}

	for (let i = 0; i < arr.length; i++) {
		let index = arr[i];
		nums.splice(index,1);
		arr = arr.map(v=>--v)
		nums.push(0)
	}
};
// @lc code=end


moveZeroes([1,0,2,0,3,4])
