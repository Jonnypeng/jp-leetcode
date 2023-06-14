/*
 * @lc app=leetcode.cn id=1375 lang=typescript
 *
 * [1375] 二进制字符串前缀一致的次数
 */

// @lc code=start
function numTimesAllBlue(flips: number[]): number {
  const n = flips.length;
  let res = 0;
  const arr = new Array(n).fill(0);
  let lp = n - 1;
  let rp = 0;

  for (let i = 0; i < n; i++) {
    const j = flips[i];
    const index = j - 1;
    arr[index] = 1;
    lp = Math.min(lp, index);
    rp = Math.max(rp, index);
    if (lp > index) {
      continue;
    }
    if (rp < index) {
      continue;
    }
    const headArr = arr.slice(0, i + 1);
    const tailArr = arr.slice(i + 1);
    let a = headArr.every(v => v === 1);
    let b = tailArr.every(v => v === 0);
    if (a && b) {
      res += 1;
    }
  }

  return res;

};
// @lc code=end


numTimesAllBlue([3, 2, 4, 1, 5])
