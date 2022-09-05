/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  // 只要是2的幂次方，二进制表示下最高位一定是1，且只有1位是1
  return (/^10*$/.test(n.toString(2)))
};
// @lc code=end

