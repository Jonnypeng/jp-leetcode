/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start

// 判断两个数组的值对应的索引是否具有相交的特征，并返回相交的新数组或大数组
const intersectionOfIntervals = function (a: number[], b: number[]): number[] | null {
  let m: number[] = [];

  // b 与 a 相交 返回全新的数组
  if (b[0] <= a[1] && b[1] >= a[1]) {
    m[0] = a[0];
    m[1] = b[1];
    return m;
  }
  // b在a中 返回a
  if (b[0] <= a[1] && b[1] <= a[1]) {
    m[0] = a[0];
    m[1] = a[1];
    return m;
  }
  // 当b[0] > a[1]
  return null;
}


function merge(intervals: number[][]): number[][] {
  let _intervals = [...intervals];
  const n = _intervals.length;
  const res: number[][] = [];

  if (n === 1) {
    res.push(_intervals[0]);
    return res;
  }

  // 首先按照起点进行排序
  _intervals.sort((a, b) => {
    return a[0] - b[0];
  })

  while (_intervals.length > 0) {
    if (_intervals.length === 1) {
      res.push(_intervals[0]);
      break;
    }
    let a = _intervals[0];
    let b = _intervals[1];
    const nums = intersectionOfIntervals(a, b);
    if (nums) {
      if (nums[1] > a[1]) {
        _intervals.shift();
        _intervals.shift();
        _intervals.unshift(nums);
      } else {
        let a0 = _intervals.shift() as number[];
        _intervals.shift();
        _intervals.unshift(a0);
      }
    } else {
      res.push(a);
      _intervals.shift();
    }
  }

  return res;
};
// @lc code=end


// test
// merge([[1, 3], [2, 6], [8, 10], [15, 18]]) //[[1,6],[8,10],[15,18]]
// merge([[1,4],[0,2],[3,5]]) //[0,5]
// merge([[1, 4], [0, 2], [3, 5]]) //[[0,5]]