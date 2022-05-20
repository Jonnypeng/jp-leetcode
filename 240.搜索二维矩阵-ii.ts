/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */
namespace searchMatrix2{
// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  let row = 0;
  let left = 0;
  let right = n - 1;

  let index = [-1, -1];
  let end = false;

  while (!end && (row < m || left <= right)) {

    if (row >= m) {
      end = true;
      continue;
    }

    if (left > right) {
      row += 1;
      left = 0;
      right = n - 1;
      continue;
    }

    const mid = Math.floor((left + right) / 2);
    const val = matrix[row][mid];
    if (target === val) {
      index = [row, mid];
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
// searchMatrix([
//   [1,2,3,4],
//   [2,6,8,9],
//   [4,10,11,12],
//   [7,14,14,16,17]
// ],11)

// searchMatrix([[-5]],-5);
// searchMatrix([[1,1]],2);
// searchMatrix([[1, 4], [2, 5]], 2)
}