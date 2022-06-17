/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */


 function sortNodeArr(nums: number[], p: number) {
  if(p === nums.length - 1){
    return nums;
  }

  let index = p;
  let minVal = Number.MAX_VALUE;
  let minIndex = -1;
  let finesed: boolean = false;

  while (!finesed) {
    if (nums[index] < minVal) {
      minVal = nums[index];
      minIndex = index;
    }
    if (index === nums.length - 1) {
      let temp = nums[p];
      nums[p] = nums[minIndex];
      nums[minIndex] = temp;
      p += 1;
      if (index === p) {
        finesed = true;
      } else {
        index = p;
        minVal = Number.MAX_VALUE;
      }
    } else {
      index += 1;
    }
  }
  return nums;
}


function nextPermutation(nums: number[]): void {
  const mySet = new Set(nums);

  if (mySet.size === 1) {
    return;
  }

  if (nums.length === 1) {
    return;
  }

  let i = nums.length - 2; // 倒数升序区间的第一个值
  let j = nums.length - 1;  // 倒数升序区间的第二个值
  let k = nums.length - 1;  // 倒数大于第i个值的第一个值

  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
    if (i === -1) {
      i = nums.length - 1;
    }
    if (j === -1) {
      j = nums.length - 1;
    }
  }

  while (k >= 0 && nums[k] <= nums[i]) {
    k--;
    if (k === -1) {
      k = nums.length - 1;
    }
  }
  console.log(i, j, k);

  let tempI = nums[i];
  nums[i] = nums[k];
  nums[k] = tempI;

  sortNodeArr(nums,j); 

  console.log(nums);

};
// @lc code=end

// nextPermutation([1, 2, 3, 8, 5, 7, 6, 4])
// sortNodeArr([5, 1, 3, 2, 1, 4,6,7,8,9,1,2,3], 2)