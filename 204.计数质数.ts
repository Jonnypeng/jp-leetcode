/*
 * @lc app=leetcode.cn id=204 lang=typescript
 *
 * [204] 计数质数
 */

// @lc code=start

function isPrimes(n: number): boolean {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  let res: boolean = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      res = false;
      break;
    }
  }
  return res;
}

function countPrimes(n: number): number {
    let count:number = 0;

    for(let i = 1;i<n;i++){
      if(isPrimes(i)){
        count++;
      }
    }

    return count;
};
// @lc code=end

countPrimes(10); //4