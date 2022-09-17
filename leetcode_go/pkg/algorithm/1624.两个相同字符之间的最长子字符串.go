package algorithm

import "math"

/*
 * @lc app=leetcode.cn id=1624 lang=golang
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start

func maxLengthBetweenEqualCharacters(s string) int {
	n := len(s)
	dict := make(map[byte][]int)
	res := math.MinInt32

	for i := 0; i < n; i++ {
		sByte := s[i]
		dict[sByte] = append(dict[sByte], i)
		ln := len(dict[sByte])
		if ln > 1 && (dict[sByte][ln-1]-(dict[sByte][0]+1) > res) {
			res = dict[sByte][ln-1] - (dict[sByte][0] + 1)
		}
	}

	if res == math.MinInt32 {
		res = -1
	}

	return res

}

// @lc code=end

func MaxLengthBetweenEqualCharacters(s string) int {
	return maxLengthBetweenEqualCharacters(s)
}
