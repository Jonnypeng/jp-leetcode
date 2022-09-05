function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;

  if(n < 3){
    return result;
  }

  nums.sort((x,y)=>x-y);

  for (let i = 0; i < n - 2; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = nums[i] * -1;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        right--;
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }
  return result;
};

// const r = threeSum([-1,0,1,2,-1,-4]);
// console.log(r);