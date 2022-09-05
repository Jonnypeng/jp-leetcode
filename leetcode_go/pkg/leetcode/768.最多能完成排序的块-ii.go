

import "sort"

/*
 * @lc app=leetcode.cn id=768 lang=golang
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
func maxChunksToSorted(arr []int) int {
	res := 0
	sortArr := make([]int, len(arr))
	copy(sortArr, arr)
	sort.Ints(sortArr)
	sum1, sum2 := 0, 0

	for i := 0; i < len(arr); i++ {
		sum1, sum2 = sum1+arr[i], sum2+sortArr[i]
		if sum1 == sum2 {
			res++
		}
	}

	return res
}

// @lc code=end
