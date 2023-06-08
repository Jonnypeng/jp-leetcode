/*
 * @lc app=leetcode.cn id=2611 lang=typescript
 *
 * [2611] 老鼠和奶酪
 */

// @lc code=start
function checkout(value:number,r1:number[],reward1: number[],reward2: number[]):boolean{

}

function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
  const n = reward1.length;
  const res: number[] = [];
  const r1: number[] = [];

  for (let i = 0; i < n; i++) {
    if(reward1[i]>reward2[2]){
        res.push(reward1[i]);   
        r1.push(i);
    }else{
      res.push(reward2[i]);
    }
  }

  return res.reduce((x,y)=>x+y);

};
// @lc code=end

