package algorithm

import "math"

/*
 * @lc app=leetcode.cn id=915 lang=golang
 *
 * [915] 分割数组
 */

// @lc code=start
func partitionDisjoint(nums []int) int {
	n := len(nums)
	leftMaxMap := make(map[int]int)
	leftMax := math.MinInt32
	rightMinMap := make(map[int]int)
	rightMin := math.MaxInt32
	res := 0

	for i := n - 1; i >= 0; i-- {
		v := nums[i]
		if v < rightMin {
			rightMin = v
			rightMinMap[i] = v
		} else {
			rightMinMap[i] = rightMin
		}
	}

	for i := 0; i < n-1; i++ {
		v := nums[i]
		if v > leftMax {
			leftMax = v
			leftMaxMap[i] = v
		} else {
			leftMaxMap[i] = leftMax
		}
		v1 := leftMaxMap[i]
		v2 := rightMinMap[i+1]
		if v1 <= v2 {
			res = i + 1
			break
		}
	}

	return res
}

// @lc code=end

func PartitionDisjoint(nums []int) int {
	return partitionDisjoint(nums)
}
