

/*
 * @lc app=leetcode.cn id=189 lang=golang
 *
 * [189] 轮转数组
 */

// @lc code=start
func ireverse(nums []int, start int, end int) {
	for start < end {
		nums[start], nums[end] = nums[end], nums[start]
		start++
		end--
	}
}

func rotate(nums []int, k int) {
	n := len(nums)
	k = k % n

	ireverse(nums, 0, n-1)
	ireverse(nums, 0, k-1)
	ireverse(nums, k, n-1)

}

// @lc code=end
