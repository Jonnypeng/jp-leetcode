/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let res: number[] = [-1, -1];

  let left = -1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left+1;
    const val = nums[mid];
    if(target === val){
      res.push(mid);
      left = mid;
    }else if(target > val){
      left++;
    }else if(target < val){
      right--;
    }
  }

  if(nums.length === 1){
    let index = nums.indexOf(target);
    res = [index,index];
  }

  if(res.length === 3){
    res.splice(0,2);
    res[1] = res[0];
  }

  if(res.length === 4){
    res.splice(0,2);
  }

  if(res.length > 4){
    res.splice(0,2);
    let end = res[res.length - 1];
    res = [
      res[0],
      end
    ]
  }

  return res;
};
// @lc code=end

//searchRange([3,3,3],3); //[0,2]
// searchRange([5,7,7,8,8,10],8) // [3,4]
//searchRange([2,2],2); //[0,1]
// searchRange([5, 7, 7, 8, 8, 10], 8); //[3,4]
// searchRange([1], 1); //[0,0]
// searchRange([2, 2], 2); //[0,1]
// searchRange([5, 7, 7, 8, 8, 10], 8); //[3,4]
// searchRange([1,4],4); //[1，1]