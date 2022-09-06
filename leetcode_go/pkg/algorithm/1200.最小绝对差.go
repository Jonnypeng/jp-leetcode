package algorithm

import (
	"math"
	"sort"
)

// import (
// 	"math"
// 	"sort"
// )

/*
 * @lc app=leetcode.cn id=1200 lang=golang
 *
 * [1200] 最小绝对差
 */
// @lc code=start
func minimumAbsDifference(arr []int) [][]int {
	res := [][]int{}
	n := len(arr)
	minOffSet := math.MaxInt
	sort.Ints(arr)

	for i, j := 0, 1; j < n; {
		minOffSet = int(math.Min(float64(minOffSet), float64(arr[j]-arr[i])))
		i++
		j++
	}

	for i, j := 0, 1; j < n; {
		if arr[j]-arr[i] == minOffSet {
			res = append(res, []int{arr[i], arr[j]})
		}
		i++
		j++
	}

	return res

}

// @lc code=end

// func main() {
// 	minimumAbsDifference([]int{1, 3, 6, 10, 15})
// }
