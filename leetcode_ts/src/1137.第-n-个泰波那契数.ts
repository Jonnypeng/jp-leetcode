/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
const arr = [0, 1, 1];
function tribonacci(n: number): number {
    arr[n] ??= tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    return arr[n]
};
// @lc code=end

tribonacci(8)