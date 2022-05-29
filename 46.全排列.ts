/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start


function swap<T>(arr: T[], index1: number, index2: number) {
  const tempElement = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tempElement;
  return arr;
}

let count: number = 0;

const backtrack46 = (n: number, output: number[], res: number[][], first: number) => {
  if (first === n) {
      res.push([...output]);
  }
  for (let i = first; i < n; i++) {
      swap(output, first, i);
      backtrack(n, output, res, first + 1);
      swap(output, first, i);
  }
}

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const output: number[] = [];

  for (let num of nums) {
      output.push(num);
  }

  const n = nums.length;
  backtrack(n, output, res, 0);
  return res;
};

// @lc code=end

