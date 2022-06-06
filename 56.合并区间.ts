/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start

// 判断两个数组是否具有相交的特征，并返回相交的特性，并返回合并的数组
function intersectionOfIntervals(a: number[], b: number[], callBack: (state: boolean) => void): number[] | null {
  let m: number[] = [];
  // b 与 a 相交
  if (b[0] <= a[1] && b[1] >= a[1]) {
    m[0] = a[0];
    m[1] = b[1];
    callBack(true);
    return m;
  }
  // b在a中
  if (b[0] <= a[1] && b[1] <= a[1]) {
    m[0] = a[0];
    m[1] = a[1];
    callBack(false);
    return m;
  }
  // b[0] > a[1]
  return null;
}

function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  const res: number[][] = [];
  const mergedIndex: number[] = [];

  if (n === 1) {
    res.push(intervals[0]);
    return res;
  }

  // 首先按照起点进行排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  })

  const callBack = (l: number, r: number) => {
    return (isIntersection: boolean) => {
      if (isIntersection) {
        mergedIndex.push(l);
        mergedIndex.push(r);
        return;
      }
      mergedIndex.push(r);
    }
  }

  for (let i = 0; i < 2; i++) {
    let left = i;
    let right = left + 1;
    while (right < n) {
      if (mergedIndex.includes(left)) {
        left++;
        continue;
      }
      if (mergedIndex.includes(right)) {
        right++;
        continue;
      }
      const a = intervals[left];
      const b = intervals[right];
      const cb = callBack(left, right);
      const nums = intersectionOfIntervals(a, b, cb);
      if (nums) {
        res.push(nums);
        mergedIndex.push(left, right);
      }
      left++;
      right++;
    }
  }

  for (let i = 0; i < n; i++) {
    if(mergedIndex.includes(i)){
      continue;
    }
    res.push(intervals[i]);
  }

  return res;
};
// @lc code=end


// test
// merge([[0, 3], [2, 10], [3, 9]])
// merge([[1, 3], [2, 6], [8, 10], [15, 18]]) //[[1,6],[8,10],[15,18]]
// merge([[1,4],[0,2],[3,5]]) //[0,5]
merge([[1,4],[0,2],[3,5]]) //[[0,5]]