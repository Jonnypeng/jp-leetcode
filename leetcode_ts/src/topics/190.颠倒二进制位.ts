/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  let str = n.toString(2);
  let arr = new Array(32).fill(0);
  for(let i = str.length;i >= 0;i--){
    let j = str.length - 1 - i;
    arr[j] = str[i];
  }
  str = arr.join("");
  let res = parseInt(str,2);
  return res;
};
// @lc code=end

reverseBits(parseInt("00000010100101000001111010011100",2));