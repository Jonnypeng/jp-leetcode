/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
function getIndexSum(length: number) {
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += i;
  }
  return sum;
}

function getStrsIsRepeat(strs: string[]): boolean {
  let isRepeat: boolean = false;
  let str1: string = strs.join('-');
  let str2: string = Array.from(new Set(str1.split('-'))).join('-');
  isRepeat = !(str1 === str2);
  return isRepeat;
}


function canPartitionKSubsets(nums: number[], k: number): boolean {
  let result: boolean = false;
  const temp: number[][] = [];
  const sums: Map<number, string[]> = new Map();
  const valueSum: number = nums.reduce((x, y) => x + y);
  const childTotal: number = valueSum / k;

  const dfs1 = (index: number) => {
    if (index > nums.length) {
      return;
    }

    if (temp.length !== 0) {
      const sum: number = temp.map(v => v[1]).reduce((x, y) => x + y);
      if (sum === childTotal) {
        const sumStr = temp.map(v => v[0]).join('-');
        if (sums.has(sum)) {
          const sumsArr: string[] = sums.get(sum);
          !(sumsArr.some(v => v === sumStr)) && sumsArr.push(sumStr);
        } else {
          sums.set(sum, []);
          sums.get(sum).push(sumStr);
        }
      }
    }
    temp.push([index, nums[index]]);
    dfs1(index + 1);
    temp.pop();
    dfs1(index + 1);
  }

  dfs1(0);

  const childs: string[] = sums.get(childTotal);

  if (!childs) {
    return false;
  }

  const temp2: string[] = [];

  const dfs2 = (index: number) => {
    if (index > childs.length) {
      return;
    }
    if (result) {
      return;
    }
    if (temp2.length === k) {
      console.log(temp2);
      if (!getStrsIsRepeat(temp2)) {
          console.log('hit',temp2);
           result = true;
      }
      return;
    }
    temp2.push(childs[index]);
    dfs2(index + 1);
    temp2.pop();
    dfs2(index + 1);
  }

  dfs2(0);

  return result;
};
// @lc code=end

