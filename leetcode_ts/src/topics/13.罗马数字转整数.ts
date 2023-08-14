/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
 var romanToInt = function (s: string) {
  let dictionaries:Record<string,number> = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };

  let result = s.split("")
      .map(s => dictionaries[s])
      .reduce((x, y, index, arr) => {
          if ((arr[index] === 1 && arr[index + 1] === 5) || (arr[index] === 1 && arr[index + 1] === 10) || (arr[index] === 10 && arr[index + 1] === 50) || (arr[index] === 10 && arr[index + 1] === 100) || (arr[index] === 100 && arr[index + 1] === 500) || (arr[index] === 100 && arr[index + 1] === 1000)) {
              y = y * -1;
          }
          //console.log(x, y);
          return x + y;
      }, 0)

  return result;

};
// @lc code=end

