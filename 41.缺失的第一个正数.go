package main

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
	dict := make(map[int]int)

	// 将数组的值映射到map中，方便1:1读取
	for _, v := range nums {
		dict[v] = v
	}

	// 最优是1...n都是nums的value，若不是，则表示缺少此值
	for i := 1; i <= n; i++ {
		if _, ok := dict[i]; !ok {
			return i
		}
	}

	// 当没有找到缺少的值时，说明最小正整数是最后一位
	return n + 1

}

// // @lc code=end

// func main() {
// 	// firstMissingPositive([]int{3, 4, -1, 1}) //2
// 	// firstMissingPositive([]int{7, 8, 9, 11, 12}) //1
// 	// firstMissingPositive([]int{3, 4, -1, 1}) //2
// 	firstMissingPositive([]int{-10, -3, -100, -1000, -239, 1}) //2
// }
