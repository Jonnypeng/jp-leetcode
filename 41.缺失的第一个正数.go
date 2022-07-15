// package main

// import (
// 	"math"
// 	"sort"
// )

/*
 * @lc app=leetcode.cn id=41 lang=golang
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
func firstMissingPositive(nums []int) int {
	n := len(nums)
	res := math.MinInt

	// 边界条件，当数组的长度为1，且为负数时候，最小的正整数一定为1
	if n == 1 && nums[0] <= 0 {
		res = 1
		return res
	}

	// 排序数组
	sort.Ints(nums)

	// 边界条件1,当最小数大于1时，最小正整数一定为1
	// 边界条件2，当最大值为负数时，最小正整数一定为1
	if nums[0] > 1 || nums[n-1] <= 0 {
		res = 1
		return res
	}

	// 双指针进行比对
	for i, j := 0, 1; j < n; i, j = i+1, j+1 {
		// 当双指针的值相等，则各前进1位
		if nums[i] == nums[j] {
			continue
		}
		// 当负数与正数之间缺少1时，最小正整数一定为1
		if nums[i] < 0 && nums[j] > 1 {
			res = 1
			break
		}
		// 当两个正数递进缺1时，则找到缺少的最小整数
		if nums[i]+1 != nums[j] && nums[i]+1 > 0 {
			res = nums[i] + 1
			break
		}
	}

	// 找到最大边界的正整数
	if res == math.MinInt {
		res = nums[n-1] + 1
	}

	return res

}

// // @lc code=end

// func main() {
// 	// firstMissingPositive([]int{3, 4, -1, 1}) //2
// 	// firstMissingPositive([]int{7, 8, 9, 11, 12}) //1
// 	// firstMissingPositive([]int{3, 4, -1, 1}) //2
// 	firstMissingPositive([]int{-10, -3, -100, -1000, -239, 1}) //2
// }
