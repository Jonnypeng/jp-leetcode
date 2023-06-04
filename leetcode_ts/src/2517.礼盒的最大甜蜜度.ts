/*
 * @lc app=leetcode.cn id=2517 lang=typescript
 *
 * [2517] 礼盒的最大甜蜜度
 */

// @lc code=start

function maximumTastiness(price: number[], k: number): number {
  price.sort((x, y) => x - y);
  const n = price.length;
  let l = 0;
  let r = price[n - 1] - price[0];

  while (l < r) {
      const mid = Math.floor((l + r + 1) * 0.5);
      if (check(mid, price, k)) {
          l = mid;
      } else {
          r = mid - 1;
      }
  }

  return l;
};

function check(mid: number, prices: number[], k:number): boolean {
  let prev = -1 * Number.MAX_VALUE / 2;
  let count = 0;

  for (let p of prices) {
      if (p - prev >= mid) {
          count++;
          prev = p;
      }
  }

  return count >= k;

}
// @lc code=end

maximumTastiness([13,5,1,8,21,2],3)
