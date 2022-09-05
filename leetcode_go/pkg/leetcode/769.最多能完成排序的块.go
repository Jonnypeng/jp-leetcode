

/*
 * @lc app=leetcode.cn id=769 lang=golang
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
func maxChunksToSorted(arr []int) int {
	res := 0
	max := 0

	for i := 0; i < len(arr); i++ {
		if arr[i] > max {
			max = arr[i]
		}
		if max == i {
			res++
		}
	}

	return res
}

// @lc code=end
