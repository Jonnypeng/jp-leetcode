package main

/*
 * @lc app=leetcode.cn id=22 lang=golang
 *
 * [22] 括号生成
 */

// @lc code=start

func backtrack(start int, end int, str string, _res *[]string) {
	if start == 0 && end == 0 {
		*_res = append(*_res, str)
		return
	}
	if start > 0 {
		str1 := str
		str1 += "("
		backtrack(start-1, end, str1, _res)
	}
	if end > start {
		str2 := str
		str2 += ")"
		backtrack(start, end-1, str2, _res)
	}
}

func generateParenthesis(n int) []string {
	var res []string = []string{}
	backtrack(n, n, "", &res)
	return res
}

// @lc code=end
