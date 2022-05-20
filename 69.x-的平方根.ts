/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 1;
  let right = x;
  let maxLeftVal: number = -1;  // 找到最左值

  if(x === 0){
    return 0;
  }

  // 缩小最左值的范围
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = mid * mid;
    if (x > val) {
      left = mid + 1;
    } else if (x <= val) {
      maxLeftVal = right;
      right = mid - 1;
    }
  }

  // 继续左移
  while (maxLeftVal * maxLeftVal > x) {
    maxLeftVal-=1;
  }

  return maxLeftVal;

};
// @lc code=end

mySqrt(15);