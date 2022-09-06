package algorithm

import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=1460 lang=golang
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start

// func isEqual(target *[]int, arr *[]int) bool {

// }

func convertStr(src *[]int) string {
	res := ""
	for _, v := range *src {
		f := "-" + string(v)
		res += f
	}
	return res
}

func canBeEqual(target []int, arr []int) bool {
	if len(target) != len(arr) {
		return false
	}

	sort.Ints(target)
	sort.Ints(arr)

	t := convertStr(&target)
	a := convertStr(&arr)

	return t == a
}

// @lc code=end
