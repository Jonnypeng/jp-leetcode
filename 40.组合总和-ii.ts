/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const sortCandidates = [...candidates];
  sortCandidates.sort((x, y) => x - y);
  let res: number[][] = [];
  const n = candidates.length;
  const arr: string[] = [];

  if (sortCandidates[0] === sortCandidates[n - 1] && target >= sortCandidates[0]) {
    const x = target / sortCandidates[0];
    if (x > n) {
      return [];
    }
    if (x % 1 !== 0) {
      return [];
    }
    if(x >= 1){
      res[0] = [];
    }
    for (let i = 0; i < x; i++) {
      if (sortCandidates[i]) {
        res[0][i] = sortCandidates[i];
      }
    }
  }

  if (res.length > 0) {
    return res;
  }

  const dfs = (target: number, combin: number[], index: number) => {
    if (target === 0) {
      const str = combin.join('-');
      if (!(arr.includes(str))) {
        arr.push(str);
      }
      return;
    }
    if (index > n - 1) {
      return;
    }
    if (target - sortCandidates[index] >= 0) {
      dfs(target - sortCandidates[index], [...combin, sortCandidates[index]], index + 1);
    }
    dfs(target, combin, index + 1);
  }

  dfs(target, [], 0);

  res = arr.map(v => {
    const strArr = v.split('-');
    const numArr = strArr.map(v => Number(v));
    return numArr;
  })

  return res;
};
// @lc code=end

// test
const a1 = [10, 1, 2, 7, 6, 1, 5];
const a2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const p2 = 30;
combinationSum2(a2, p2);