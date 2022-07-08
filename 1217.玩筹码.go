// package main

/*
 * @lc app=leetcode.cn id=1217 lang=golang
 *
 * [1217] 玩筹码
 */

// @lc code=start
func minCostToMoveChips(position []int) int {
	odd, even := 0, 0

	for _, v := range position {
		if v%2 == 0 {
			odd++
		} else {
			even++
		}
	}

	if odd < even {
		return odd
	}

	return even

}

// @lc code=end

// func main() {
// 	// minCostToMoveChips([]int{2, 2, 2, 3, 3})
// 	minCostToMoveChips([]int{3, 3, 1, 2, 2}) //2
// 	// minCostToMoveChips([]int{1, 2, 3})       //1
// 	// minCostToMoveChips([]int{1, 1000000000})
// }
