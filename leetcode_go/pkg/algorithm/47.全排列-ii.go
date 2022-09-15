package algorithm

import (
	"strconv"
)

/*
 * @lc app=leetcode.cn id=47 lang=golang
 *
 * [47] 全排列 II
 */

// @lc code=start

func isRepeat47(nums *[]int, dict *map[string]int, n int) bool {
	str := ""
	for _, v := range *nums {
		str += "-" + strconv.Itoa(v)
	}
	if _, ok := (*dict)[str]; !ok {
		(*dict)[str]++
		return false
	}
	return true
}

func back47(nums *[]int, res *[][]int, first int, dict *map[string]int, n int) {
	if first == n && !(isRepeat47(nums, dict, n)) {
		temp := []int{}
		temp = append(temp, *nums...)
		*res = append(*res, temp)
	}
	for i := first; i < n; i++ {
		(*nums)[first], (*nums)[i] = (*nums)[i], (*nums)[first]
		back47(nums, res, first+1, dict, n)
		(*nums)[first], (*nums)[i] = (*nums)[i], (*nums)[first]
	}
}

func permuteUnique(nums []int) [][]int {
	dict := make(map[string]int)
	res := [][]int{}
	back47(&nums, &res, 0, &dict, len(nums))
	return res
}

// @lc code=end

func PermuteUnique(nums []int) [][]int {
	return permuteUnique(nums)
}
