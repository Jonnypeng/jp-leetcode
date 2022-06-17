/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let length = s.length;

  if (length % 2 !== 0 || /^[\}\]\)]/.test(s)) {
      return false;
  }

  let rightZidian: any = { "}": "{", "]": "[", ")": "(" };

  let rightExp: RegExp = /[\]\)\}]/;

  let leftArr: string[] = [];

  let strs: string[] = s.split("");

  let result: boolean = true;
  for (let i = 0; i < strs.length; i++) {
      let value = strs[i];
      if (rightExp.test(value)) {
          if (leftArr[leftArr.length-1]===rightZidian[value]) {
              leftArr.pop();
          } else {
              result = false;
              break;
          }
      }else{
          leftArr.push(value); 
      }
  }

  if (leftArr.length > 1) {
      result = false;
  }

  return result;
};
// @lc code=end

