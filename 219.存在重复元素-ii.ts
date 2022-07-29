/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let res = false;
  const dict: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (dict.has(val)) {
      const j = (dict.get(val) as number);
      res = Math.abs(i - j) <= k;
      if(res){
        break;
      }
    }
    dict.set(val, i);
  }
  return res;
};
// @lc code=end

// containsNearbyDuplicate([1, 0, 1, 1], 1);