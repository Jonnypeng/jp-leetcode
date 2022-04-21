/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string{
  const res: number[][] = [];
  let max: number = 0;
  const judgmentPalindrome = (l: number, r: number) => {
    if (s[l] === s[r]) {
      return 2;
    } else {
      return 0;
    }
  }
  for (let i = 0; i < s.length; i++) {
    res[i] = [];
    for (let j = 0; j < s.length; j++) {
      res[i][j] = 0;
      if (i === j || i === 0 || j === 0) {
        res[i][j] = 1;
        continue;
      }
      if (res[j]&&res[j][i]) {
        res[i][j] = res[j][i];
        continue;
      }
      res[i][j] = res[i][j] + judgmentPalindrome(i, j);
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j > 0; j--) {
      if (i === j) {
        continue;
      }
      res[i][j] = res[i][j] + res[i+1][j-1];
      max = Math.max(max,res[i][j]);
    }
  }
  console.log(res);
  return '';
};

// longestPalindrome('abbacd');
// @lc code=end

