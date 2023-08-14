/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
      let temp: number = 0;
      let w: number = 0;
      let h: number = 0;

      w = end - start;
      if (height[start] < height[end]) {
          h = height[start];
          start+=1;
      }else{
          h = height[end];
          end-=1;
      }
      temp = w * h;
      maxArea = Math.max(maxArea,temp);
  }

  return maxArea;
};
// @lc code=end

