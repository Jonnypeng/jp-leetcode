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


function dfs(index: number, nums: number[], n: number) {
  if (index === n) {
    return;
  }
  const temp: number[] = [nums[index]];
  const arr: number[] = [...nums];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      swap(arr,i,j);
    }
  }
  console.log(arr);

  dfs(index++, nums, n);
  // dfs(index++, nums, n);
}

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const output: number[] = [];
  const temp: number[] = [...nums];

  dfs(1,  nums, nums.length);

  return res;
};

// @lc code=end

