/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map();
  const res:number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    const another = target - v;
    if(dict.has(another)){
      const j = dict.get(another) as number;
      res.push(i,j);
      break;
    }
    dict.set(v,i);
  }
  return res;
};
// @lc code=end

