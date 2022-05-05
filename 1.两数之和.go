package main

/*
 * @lc app=leetcode.cn id=1 lang=golang
 *
 * [1] 两数之和
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
	var dict map[int]int = make(map[int]int)
	var res []int = []int{}

	for i := 0; i < len(nums); i++ {
		v := nums[i]
		another := target - v
		if _, ok := dict[another]; ok {
			j := dict[another]
			res = []int{i, j}
		}
		dict[v] = i
	}

	return res
}

// @lc code=end
