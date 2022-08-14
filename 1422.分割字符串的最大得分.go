package main

import "strings"

/*
 * @lc app=leetcode.cn id=1422 lang=golang
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start

func maxScore(s string) int {
	res := 0

	// 枚举所有的切割点，求和计算，找到最大值
	for i := 1; i < len(s); i++ {
		sum := strings.Count(s[:i], "0") + strings.Count(s[i:], "1")
		if sum > res {
			res = sum
		}
	}

	return res

}

// @lc code=end
