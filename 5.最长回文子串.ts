/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const n = s.length;
  const isEven =  n % 2 === 0;
  const halfMax = isEven ? (n / 2) - 1 : Math.floor(n / 2);
  
};
// @lc code=end

