/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start

function sortMyObj(nums: number[]): number[] {
  let sort = function (arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    let pv: number = arr.splice(pivotIndex, 1)[0];
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    arr.forEach(v => {
      if (v <= pv) {
        leftArr.push(v);
      }
      if (v > pv) {
        rightArr.push(v);
      }
    })
    return sort(leftArr).concat(pv, sort(rightArr));
  }
  const res = sort(nums);
  return res;
};
// @lc code=end

// sortArray([10,2,4,4,32,2,3,4,4,5,3,2,3,4,3,2,1]);