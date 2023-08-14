/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let res: number[] = [-1, -1];

  if(nums.indexOf(target) === -1){
    return res;
  }

  // 查找左边界
  const getLeftBorder = () => {
    let left = 0;
    let right = nums.length - 1;
    let leftBorder = - 1;
    while (left <= right) {
      let mid = left + (Math.floor((right - left) / 2));
      let val = nums[mid];
      if (target <= val) {
        // 查找左边界，右指针会一直压缩右边界，一直找到左边界值为止
        leftBorder = mid;
        right = mid - 1;
      } else if (target > val) {
        left = mid + 1;
      }
    }
    return leftBorder;
  }

  // 查找右边界
  const getRightBorder = () => {
    let left = 0;
    let right = nums.length - 1;
    let rightBorder = - 1;
    while (left <= right) {
      let mid = left + (Math.floor((right - left) / 2));
      let val = nums[mid];
      if (target <val) {
        right = mid - 1;
      } else if (target >= val) {
        // 查找右边界，左指针会一直压缩左边界，一直找到右边界值为止
        rightBorder = mid;
        left = mid + 1;
      }
    }
    return rightBorder;
  }

  const leftBorder = getLeftBorder();
  const rightBorder = getRightBorder();

  if(leftBorder !== -1){
    res[0] = leftBorder;
  }

  if(rightBorder !== -1){
    res[1] = rightBorder;
  }

  return res;
};
// @lc code=end

//searchRange([3,3,3],3); //[0,2]
// searchRange([5, 7, 7, 8, 8, 10], 8) // [3,4]
//searchRange([2,2],2); //[0,1]
// searchRange([5, 7, 7, 8, 8, 10], 8); //[3,4]
// searchRange([1], 1); //[0,0]
// searchRange([2, 2], 2); //[0,1]
// searchRange([5, 7, 7, 8, 8, 10], 8); //[3,4]
// searchRange([1,4],4); //[1，1]
// searchRange([1],1); // [0,0]