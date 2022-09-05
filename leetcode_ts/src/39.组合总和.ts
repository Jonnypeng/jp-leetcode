/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const arr: number[][] = [];

  const dfs = (target: number, combin: number[], index: number) => {
    if (index > candidates.length - 1) {
      return;
    }
    if (target === 0) {
      arr.push(combin);
      return;
    }
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combin, candidates[index]], index);
    }
    dfs(target, combin, index + 1);
  }

  dfs(target, [], 0);

  return arr;
};

// @lc code=end

