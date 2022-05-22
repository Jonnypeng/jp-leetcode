/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  nums.sort((x,y)=>y-x);
  return nums[k - 1];
};
// @lc code=end


findKthLargest([3,2,3,1,2,4,5,5,6],4)