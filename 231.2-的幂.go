package jp_leetcode

import "math"

/*
 * @lc app=leetcode.cn id=231 lang=golang
 *
 * [231] 2 的幂
 */

// @lc code=start
func isPowerOfTwo(n int) bool {
	var res int = math.MinInt

	for x := 0; res < n; x++ {
		res = int(math.Pow(2.0, float64(x)))
	}

	return res == n

}

// @lc code=end

// func main() {
// 	isPowerOfTwo(1)
// }
