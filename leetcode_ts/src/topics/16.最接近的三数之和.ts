/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start

function getSum(nums: number[], target: number): number {
  const sum = nums.reduce((x, y) => x + y);
  const res = Math.abs(target - sum);
  return res;
}

function threeSumClosest(nums: number[], target: number): number {
  let res: number = Number.MAX_VALUE;
  let x = 0, y = 0, z = 0;
  let sum: number = 0;
  const n = nums.length - 1;
  for (let p = 0; p < n; p++) {
    for (let i = p - 1; i >= 0; i -= 1) {
      for (let j = p + 1; j <= n; j += 1) {
        let a = nums[i];
        let b = nums[p];
        let c = nums[j];
        const _res = getSum([a, b, c], target);
        if (_res < res) {
          res = _res;
          x = i;
          y = p;
          z = j;
        }
      }
    }
  }
  sum = nums[x] + nums[y] + nums[z];
  return sum;
};
// @lc code=end

// threeSumClosest([-1,2,1,-4], 1)
// threeSumClosest([-3, -2, -5, 3, -4], -1) // -2
// threeSumClosest([1,1,1,0], -100) // 2
threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)