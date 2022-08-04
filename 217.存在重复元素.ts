/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let res = false;
  const dict: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (dict.has(val)) {
      res = true;
        break;
    }
    dict.set(val, i);
  }
  return res;
};
// @lc code=end

