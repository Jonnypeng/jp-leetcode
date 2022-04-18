function threeSum(nums: number[]): number[][] {
  nums.sort();
  let ans: number[][] = [];
  const strs: string[] = [];
  const dict: Map<number, number> = new Map();

  const twoSum = (bi: number, nums: number[], target: number): number[][] => {
    let tempArr: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
      const b = target - nums[i];
      if (i === bi) {
        continue;
      }
      if (dict.has(b)) {
        const j = dict.get(b);
        if (i !== j && j !== bi) {
          const fv = nums[bi];
          const v1 = nums[j];
          const v2 = nums[i];
          const childArr = [fv, v1, v2];
          childArr.sort();
          const str = childArr.join('-');
          if (!(strs.includes(str))) {
            strs.push(str)
            tempArr.push(childArr);
          }
        }
      }
      dict.set(nums[i], i);
    }
    return tempArr;
  }

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    let temp: number[][];
    const target = first * -1;
    temp = twoSum(i, nums, target);
    if (temp.length === 0) {
      continue;
    }
    ans = ans.concat(temp);
  }
  return ans;
};