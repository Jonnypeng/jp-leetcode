/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let s = n.toString(2);
  let p = /1/g;
  let arr = s.match(p);
  let l = arr?.length || 0;
  return l;
};
// @lc code=end

//hammingWeight();

