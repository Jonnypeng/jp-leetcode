/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  if(digits[0]===0){
    return [1];
  }
  if(digits.length>0){
    return digits.map(v=>v+1);
  }
  // 余数集合
  const remainders = [0];
  // const results = [];
  let p2 = digits.length - 1;
  let p1 = p2 - 1;
  let one = true;
  while(p1>=0&&remainders.length>0){
    if(one){
      digits[p2] = digits[p2] +=1;
      if(digits[p2]>9){
        digits[p2] = 0;
        remainders.push(1);
      }
      one = false;
    }else{
      const remainder = remainders.pop();
      digits[p1] = digits[p1] + 1;
      if(digits[p1]>9){
        digits[p1] = 0;
        remainders.push(1); 
      }
      p1--;
    }
  }
  return digits;
};
// @lc code=end

