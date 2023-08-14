
/**
 * 给你一个下标从 0 开始的整数数组 nums 。请你从 nums 中找出和 最大 的一对数，且这两个数数位上最大的数字相等。

返回最大和，如果不存在满足题意的数字对，返回 -1 。
 * 
输入：nums = [51,71,17,24,42]
输出：88
解释：
i = 1 和 j = 2 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 71 + 17 = 88 。 
i = 3 和 j = 4 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 24 + 42 = 66 。
可以证明不存在其他数对满足数位上最大的数字相等，所以答案是 88 。
 * 
 * 输入：nums = [1,2,3,4]
输出：-1
解释：不存在数对满足数位上最大的数字相等。

输入：nums = [1,2,3,4]
输出：-1
解释：不存在数对满足数位上最大的数字相等。
 */

function getIsVail(a: number, b: number): boolean {
  let a_arr = `${a}`.split('');
  a_arr.sort((x, y) => Number(y) - Number(x));
  let b_arr = `${b}`.split('');
  b_arr.sort((x, y) => Number(y) - Number(x));
  if(a_arr[0]===b_arr[0]){
    return true;
  }
  return false;
}

function maxSum(nums: number[]): number {
  const n = nums.length;
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if(getIsVail(nums[i],nums[j]) === false){
        continue;
      }
      let val = nums[i] + nums[j];
      res = Math.max(val, res);
    }
  }

  res = res === Number.MIN_SAFE_INTEGER ? -1 : res;

  return res;

};

// maxSum([51,71,17,24,42])
maxSum( [1,2,3,4])