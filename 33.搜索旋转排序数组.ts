/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {

  let tempNums = [...nums];

  // 返回的边界条件
  if (tempNums.length === 1) {
    return target === tempNums[0] ? 0 : -1;
  }

  const n = tempNums.length;
  let k = 0;
  // 将被旋转的数组进行旋转
  for (let i = 0, j = i + 1; i < n - 1; i++, j++) {
    if (tempNums[i] > tempNums[j]) {
      const slice = tempNums.splice(0, j);
      tempNums = tempNums.concat(slice);
      k = j;
      break;
    }
  }

  let min = 0;
  let max = n - 1;
  let res: number = -1;


  // 二分查找
  while (min <= max) {
    let mid = Math.floor((min + max) * 0.5);
    let val = tempNums[mid];
    if (val === target) {
      res = mid;
      break;
    } else if (target > val) {
      min = mid + 1;
    } else if (target < val) {
      max = mid - 1;
    }
  }

  if (res !== -1) {
    res += k;
    res = res % n; // 循环数组，旋转到头部去值
  }
  return res;
};
// @lc code=end


// test
const myCase33 = [1, 2, 3, 4, 5, 6, 7];
const myCase34 = [4, 5, 6, 7, 0, 1, 2];
const myCase44 = [4, 5, 6, 7, 0, 1, 2];

search([3, 1], 3);