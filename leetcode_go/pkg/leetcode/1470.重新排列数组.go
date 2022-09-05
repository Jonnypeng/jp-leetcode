package leetcode

/*
 * @lc app=leetcode.cn id=1470 lang=golang
 *
 * [1470] 重新排列数组
 */

// @lc code=start
func shuffle(nums []int, n int) []int {
	xArr := nums[:n]
	yArr := nums[n:]
	res := make([]int, n*2)

	for i := 0; i < n*2; i++ {
		if (i+1)%2 != 0 {
			res[i] = xArr[i/2]
			continue
		}
		res[i] = yArr[i/2]
	}

	return res
}

// @lc code=end
