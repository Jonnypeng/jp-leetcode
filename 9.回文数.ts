/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x: number) {
  let tempX = `${Math.abs(x)}`;
  tempX = tempX.toString().split("").reverse().join("");
  if(x<1){
      tempX = tempX + "-";
  }
  let isRight;
  if(tempX===x.toString() || x===0){
      isRight = true;
  }else{
      isRight = false;
  } 
  return isRight; 
};
// @lc code=end

