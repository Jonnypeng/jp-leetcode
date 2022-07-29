/*
 * @lc app=leetcode.cn id=204 lang=typescript
 *
 * [204] 计数质数
 */

// @lc code=start

function countPrimes(n: number): number {
  let count: number = 0;
  const dict: boolean[] = new Array(n);// 合数字典

  dict.fill(false); // 初始化为false
  dict[0] = true;
  dict[1] = true;


  for (let i = 2; i * i < n; i++) {
    for (let j = i * i; j <= n; j += i) {
      dict[j] = true;
    }
  }

  for (let i = 1; i < dict.length; i++) {
    if (!dict[i]) {
      count++;
    }
  }

  return count;
};
// @lc code=end

// countPrimes(10); //4
countPrimes(2); //0