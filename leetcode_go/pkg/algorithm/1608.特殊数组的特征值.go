package algorithm

/*
 * @lc app=leetcode.cn id=1608 lang=golang
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start

func getSpec(nums []int, n int) bool {
	res := false
	count := 0
	for _, v := range nums {
		if v >= n {
			count++
		}
	}
	if count == n {
		res = true
	}
	return res
}

func specialArray(nums []int) int {
	n := len(nums)
	res := -1
	for i := 0; i <= n; i++ {
		if getSpec(nums[0:], i) {
			res = i
		}
	}
	return res
}

// @lc code=end

func SpecialArray(nums []int) int {
	return specialArray(nums)
}
