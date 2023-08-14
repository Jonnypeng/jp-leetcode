/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const backtrack = (open: number, close: number, str: string, _res: string[]) => {
    if (open === 0 && close === 0) {
      res.push(str);
      return;
    }
    if (open > 0) {
      let str1 = str;
      str1 += "(";
      backtrack(open - 1, close, str1, _res);
    }
    if (close > open) {
      let str2 = str;
      str2 += ")";
      backtrack(open, close - 1, str2, _res);
    }
  }
  const res: string[] = [];
  backtrack(n, n, "", res);
  return res;
};
// @lc code=end

// generateParenthesis(3);