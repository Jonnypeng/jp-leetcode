/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = [...nums1, ...nums2];
  nums.sort((x, y) => x - y);
  const n = nums.length;
  let res = 0;
  if (n % 2 !== 0) {
    let index = Math.floor(n / 2);
    res = nums[index];
  } else {
    let l1 = n / 2;
    let l2 = l1 - 1;
    res = (nums[l1] + nums[l2]) / 2;
  }
  return res;
}
// @lc code=end

findMedianSortedArrays([1, 3], [2]);