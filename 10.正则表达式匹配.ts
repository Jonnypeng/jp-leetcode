/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  let partner = "^" + p + "$";
  return new RegExp(partner).test(s);
};
// @lc code=end

