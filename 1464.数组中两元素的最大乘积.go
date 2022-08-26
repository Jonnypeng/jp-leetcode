package main

import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=1464 lang=golang
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
func maxProduct(nums []int) int {
	sort.Ints(nums)
	i := len(nums) - 2
	j := len(nums) - 1
	return (nums[i] - 1) * (nums[j] - 1)
}

// @lc code=end
