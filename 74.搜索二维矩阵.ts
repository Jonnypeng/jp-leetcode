/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let length = m * n;

  let left = 0;
  let right = length - 1;

  let index = [-1, -1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const i = Math.ceil((mid + 1) / n) - 1;
    const j = mid % n;
    const val = matrix[i][j];
    if (target === val) {
      index = [i, j];
      break;
    } else if (target > val) {
      left = mid + 1
    } else if (target < val) {
      right = mid - 1
    }
  }

  if (index[0] === -1 && index[1] === -1) {
    return false;
  }

  return true;

};
// @lc code=end

