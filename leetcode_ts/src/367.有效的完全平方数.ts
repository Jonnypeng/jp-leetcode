/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  if (num === 1) {
    return true;
  }

  let r = false;
  let left = 0;
  let right = num;
  
  while(left <= right){
    let mid = Math.floor((left + right)*0.5);
    const v = mid * mid;
    if(v === num ){
      r = true;
      break;
    }else if(num > v){
      left = mid + 1;
    }else if(num < v){
      right = mid - 1;
    }
  }
  return r;
};
// @lc code=end

// isPerfectSquare(9);