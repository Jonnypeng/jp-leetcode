/*
 * @lc app=leetcode.cn id=1156 lang=typescript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
/**
 * 查询最长子串，并返回开始与结束
 */

function maxRepOpt1(text: string): number {
  const dictArr: number[] = new Array(26).fill(0);
  const n = text.length;
  let res = 1;
  const a = "a";

  for (let i = 0; i < n; i++) {
    const index = text.charCodeAt(i) - a.charCodeAt(0);
    dictArr[index]++;
  }

  for (let i = 0; i < n;) {
    let r = i;
    while (r < n && text[i] === text[r]) {
      r += 1;
    }
    let newR = r + 1;
    while (newR < n && text[i] === text[newR]) {
      newR += 1;
    }
    let len1 = r - i;
    let len2 = newR - r - 1;
    const index = text.charCodeAt(i) - a.charCodeAt(0);
    if (dictArr[index] > len1 + len2) {
      res = Math.max(res, len1 + len2 + 1);
    } else {
      res = Math.max(res, len1 + len2);
    }
    i = r;
  }

  return res;

};
// @lc code=end

maxRepOpt1("ababa");
