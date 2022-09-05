/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let tempX: string | number = Math.abs(x);
    tempX = tempX.toString().split("").reverse().join("");
    tempX = Number(tempX);
    if(x<1){
        tempX = tempX * -1;
    }
    if(tempX>Math.pow(2,31) - 1 || tempX <Math.pow(-2,31)){
        tempX = 0;
    }
    return tempX;
};
// @lc code=end

