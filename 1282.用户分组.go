package main

import "sort"

/*
 * @lc app=leetcode.cn id=1282 lang=golang
 *
 * [1282] 用户分组
 */

// @lc code=start
func groupThePeople(groupSizes []int) [][]int {
	dict := make(map[int][]int)
	res := [][]int{{}}
	total := -1 // 一共多少个
	count := 0  // 填充多少个

	for i, v := range groupSizes {
		if _, ok := dict[v]; !ok {
			dict[v] = []int{}
		}
		dict[v] = append(dict[v], i)
	}

	sort.Ints(groupSizes)

	for index, v := range groupSizes {
		// res[len(res)-1] = append(res[len(res)-1], dict[v])
		n := len(dict[v])
		myValue := dict[v][n-1]
		dict[v] = dict[v][0 : n-1]
		total = v
		res[len(res)-1] = append(res[len(res)-1], myValue)
		count++
		if total-count == 0 && index < len(groupSizes)-1 {
			count = 0
			res = append(res, []int{})
		}
	}

	return res
}

// @lc code=end
