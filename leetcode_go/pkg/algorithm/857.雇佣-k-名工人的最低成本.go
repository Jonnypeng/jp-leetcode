package algorithm

import (
	"math"
	"sort"
)

/*
 * @lc app=leetcode.cn id=857 lang=golang
 *
 * [857] 雇佣 K 名工人的最低成本
 */

// @lc code=start
func mincostToHireWorkers(quality []int, wage []int, k int) float64 {
	n := len(quality)
	qs := make([]float64, n)    // 比例集合
	ans := make([][]float64, n) // 比例乘集合
	res := make([]float64, n)
	minPay := math.MaxFloat64

	for i := 0; i < n; i++ {
		qs[i] = float64(wage[i]) / float64(quality[i])
		ans[i] = make([]float64, n)
		for j := 0; j < n; j++ {
			rmb := qs[i] * float64(quality[j])
			if rmb >= float64(wage[j]) {
				ans[i][j] = rmb
			}
		}
		sort.Float64s(ans[i])
	}

	for i, row := range ans {
		tempRes := 0.0
		count := 0
		for _, v := range row {
			if v == 0 {
				continue
			}
			tempRes += v
			count += 1
			if count == k {
				break
			}
		}
		if count < k {
			tempRes = 0.0
		}
		res[i] = float64(tempRes)
		if tempRes != 0 {
			if tempRes < minPay {
				minPay = tempRes
			}
		}
	}

	return minPay
}

// @lc code=end

func MincostToHireWorkers(quality []int, wage []int, k int) float64 {
	return mincostToHireWorkers(quality, wage, k)
}
