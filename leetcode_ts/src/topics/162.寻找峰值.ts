/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * 峰值元素是指其值严格大于左右相邻值的元素。 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回任何一个峰值 所在位置即可
 * @param nums 整数数组 nums
 * @return 返回索引
 */
function findPeakElement(nums: number[]): number {
  const n = nums.length;
  let index = 0;
  let left = 0;
  let right = n - 1;

  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  if (n === 3) {
    if(nums[0] > nums[1]){
      return 0;
    }
    if(nums[1] > nums[2] && nums[1] > nums[0]){
      return 1;
    }
    if(nums[2] > nums[1]){
      return 2;
    }
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const m_l = mid - 1;
    const m_r = mid + 1;
    const val = nums[mid];
    const leftVal =  nums[m_l] ?? Number.MIN_SAFE_INTEGER;
    const rightVal =  nums[m_r] ?? Number.MIN_SAFE_INTEGER;
    if (val > leftVal && val > rightVal) {
      index = mid;
      break;
    }
    if (val >= leftVal) {
      left++;
    } else if (val > rightVal) {
      right--;
    } else {
      right++;
    }

  };
  return index;
}
// @lc code=end

// findPeakElement([1, 2, 3, 1])
// findPeakElement([1, 2])
findPeakElement([1,9,2,1,31,2])