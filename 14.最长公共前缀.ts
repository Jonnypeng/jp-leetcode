/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let _strs = strs.sort((a, b) => b.length - a.length);
  let minStr = _strs[0];

  function mkRegexp(str: string) {
    let _str = str;
    let seek: RegExp|string = "";
    let _arr = [];
    for (let i = 0; i < _str.length; i++) {
      seek += _str[i];
      _arr.push(seek);
    }
    _arr.sort((a, b) => b.length - a.length);
    _arr = _arr.map(v => `(^${v})`);
    seek = _arr.join("|");
    seek = new RegExp(seek);
    return seek;
  }

  let regexp = mkRegexp(minStr);
  let testStrs = _strs.map(v => v.match(regexp));

  let checkoutNull = () => {
    return testStrs.some(v => v === null);
  }

  if (checkoutNull()) {
    return "";
  } else {
    (testStrs as RegExpMatchArray[]).sort((a, b) => {
      return a[0].length - b[0].length;
    });
    return (testStrs[0] as string[])[0];
  }
};
// @lc code=end

