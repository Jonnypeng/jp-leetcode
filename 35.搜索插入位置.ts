/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let index = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];
    let lv = nums[mid - 1] ?? Number.MIN_SAFE_INTEGER;
    let rv = nums[mid + 1] ?? Number.MAX_SAFE_INTEGER;
    if (target === val) {
      index = mid;
      break;
    } else if (target < val) {
      if (mid === 0 || target > lv) {
        index = mid
        break;
      }
      right = mid - 1;
    } else if (target > val) {
      if (mid === n - 1 || target < rv) {
        index = mid + 1;
        break;
      }
      left = mid + 1;
    }
  }

  return index;
};
// @lc code=end

// test
// searchInsert([1, 3, 5, 6], 2);
// searchInsert([1, 3, 5, 6], 7);
// searchInsert([1,3],2);