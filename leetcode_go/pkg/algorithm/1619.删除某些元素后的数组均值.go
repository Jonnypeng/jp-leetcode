package algorithm

import (
	"sort"
)

/*
 * 1. 计算长度为5%的边界值
 * 2. 对原数组进行升序
 * 3. 对升序后的数组进行求和，边界两端不在其中
 */

/*
 * @lc app=leetcode.cn id=1619 lang=golang
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start

func trimMean(arr []int) float64 {
	n := len(arr)
	end := float64(n - 1)
	trim := end * 0.05
	sort.Ints(arr)
	sum := 0
	count := 0.0
	res := 0.0

	for i := 0; i < n; i++ {
		if float64(i) <= trim || float64(i) >= end-trim {
			continue
		}
		sum += arr[i]
		count++
	}

	res = float64(sum) / count
	return res
}

// @lc code=end

func TrimMean(arr []int) float64 {
	return trimMean(arr)
}
