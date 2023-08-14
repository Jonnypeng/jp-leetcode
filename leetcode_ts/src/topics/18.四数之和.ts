/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  const n = nums.length;
  if (nums.length < 4) {
    return res;
  }
  nums.sort((x, y) => x - y);
  for (let i = 0; i < n - 3; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j += 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) {
        continue;
      }
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left += 1;
          }
          left += 1;
          while (left < right && nums[right] === nums[right - 1]) {
            right -= 1;
          }
          right -= 1;
        } else if (sum < target) {
          left += 1;
        } else {
          right -= 1;
        }
      }
    }
  }
  return res;
};
// @lc code=end

