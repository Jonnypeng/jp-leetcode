/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 */

// @lc code=start

interface Res {
  maxLength?: number;
  maxValue?: number;
  indesxs?: number[];
}

function getRepeatVal(nums: number[], dict: Map<number, Res>): number {
  let _maxValue = 0;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (dict.has(v)) {
      const { indesxs, maxValue } = dict.get(v)!
      dict.set(v, {
        maxValue: maxValue! + 1,
        indesxs: [indesxs![0], i],
        maxLength: (i + 1) - indesxs![0]
      })
    } else {
      dict.set(v, {
        maxValue: 1,
        maxLength: 1,
        indesxs: [i]
      })
    }
    if (dict.get(v)!.maxValue! > _maxValue) {
      _maxValue = dict.get(v)!.maxValue!;
    }
  }
  return _maxValue;
}

function findShortestSubArray(nums: number[]): number {
  const dict: Map<number, Res> = new Map();
  const rl = getRepeatVal(nums,dict);
  let res = Number.MAX_VALUE;
  dict.forEach(value=>{
    const { maxValue,maxLength} = value;
    if(maxValue === rl){
      res = Math.min(res,maxLength!)
    }
  })
  return res;
};
// @lc code=end

// findShortestSubArray([1,2,2,3,1])
findShortestSubArray([1, 2, 2, 3, 1, 4, 2])
