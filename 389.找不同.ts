/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * 给定两个字符串 s 和 t ，它们只包含小写字母。字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。找出在 t 中被添加的字母。
 */
function findTheDifference(s: string, t: string): string {
  var sCodes: number = 0;
  var tCodes: number = 0;

  for (let i = 0; i < s.length; i++) {
    sCodes+=(s.charCodeAt(i));
  }

  for (let i = 0; i < t.length; i++) {
    tCodes+=(t.charCodeAt(i));
  }

  const offsetCode = tCodes - sCodes;

  const str = String.fromCharCode(offsetCode);

  return str;
};
// @lc code=end


// test

// findTheDifference('abcd','abecd');
