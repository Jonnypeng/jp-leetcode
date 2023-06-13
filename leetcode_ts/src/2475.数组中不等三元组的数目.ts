/*
 * @lc app=leetcode.cn id=2475 lang=typescript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
function unequalTriplets(nums: number[]): number {
    const cat:Record<number,number> = { };
    let res = 0;
    let t = 0;
    const n = nums.length;
    nums.forEach(v=>{
      if(cat[v]){
        cat[v] = cat[v] + 1;
      }else{
        cat[v] = 1;
      }
    })
    for(let c in cat){
      res+=( t * cat[c] * (n - t - cat[c]));
      t+=cat[c]
    }
    return res;
};
// @lc code=end

unequalTriplets([4,4,2,4,3])
