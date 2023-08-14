/*
 * @Author: 彭江
 * @Date: 2022-04-25 20:29:19
 * @LastEditors: 彭江
 * @LastEditTime: 2022-04-25 23:32:12
 */
/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start


function longestPalindrome(s: string): string {
  let longAnswer: string = '';
  const n = s.length;

  if (!s || n === 1) {
    longAnswer = s;
  }

  const expond = (l: number, r: number) => {
    while (l >= 0 && r <= n - 1 && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  }

  for (let i = 0; i < n - 1; i++) {
    const l1 = expond(i, i);
    const l2 = expond(i, i+1);
    const arr = [l1,l2];
    arr.forEach(str => {
      if (str.length > longAnswer.length) {
        longAnswer = str;
      }
    })
  }

  return longAnswer;
};

// longestPalindrome("babad");
// @lc code=end

