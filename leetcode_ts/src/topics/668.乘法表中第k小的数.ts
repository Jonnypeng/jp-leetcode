/*
 * @lc app=leetcode.cn id=668 lang=typescript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
function findKthNumber(m: number, n: number, k: number): number {

  // 获取在m*n矩阵下，小于等于x的值的个数
  const getMin = (x: number): number => {
    let sum: number = 0;
    for (let i = 1; i <= m; ++i) {
      let val = Math.min(Math.floor(x / i), n);
      sum += val;
    }
    return sum;
  }

  const search = (): number => {
    let left = 1;
    let right = m * n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      const val = getMin(mid);
      if (k > val) {
        left = mid + 1;
      } else if (k <= val) {
        right = mid;
      }
    }
    return left;
  }

  const r = search();

  return r;

};
// @lc code=end




// findKthNumber(5, 5, 5);
// findKthNumber(9, 9, 80);
findKthNumber(3, 3, 5); // 3
