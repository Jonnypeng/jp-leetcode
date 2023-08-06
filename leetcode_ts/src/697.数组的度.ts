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

function getRepeatVal(nums: number[]): number {
  const dict: Map<number, Res> = new Map();
  let _maxValue = 0;
  let _minLength = Number.MAX_VALUE;
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
      if (_minLength > dict.get(v)?.maxLength!) {
        _minLength = dict.get(v)?.maxLength!;
      }
    }
  }
  return _minLength;
}

function findShortestSubArray(nums: number[]): number {
  const rl = getRepeatVal(nums)
  return rl
};
// @lc code=end

// findShortestSubArray([1,2,2,3,1])
findShortestSubArray([1, 2, 2, 3, 1, 4, 2])
