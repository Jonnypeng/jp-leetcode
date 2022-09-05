package leetcode

/*
 * @lc app=leetcode.cn id=1224 lang=golang
 *
 * [1224] 最大相等频率
 */

// @lc code=start

func JudgmentIsQual(nums []int) bool {
	dict := make(map[int]int)
	prev := -1
	isQual := true

	for _, v := range nums {
		dict[v]++
	}

	for _, v := range dict {
		if prev == -1 {
			prev = v
			continue
		}
		if v != prev {
			isQual = false
		}
	}

	return isQual
}

func maxEqualFreq(nums []int) int {

}

// @lc code=end
