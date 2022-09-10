package algorithm

/*
 * @lc app=leetcode.cn id=171 lang=golang
 *
 * [171] Excel 表列序号
 */

// @lc code=start
func titleToNumber(columnTitle string) int {
	res := 0
	for _, ch := range columnTitle {
		res *= 26
		res += int(ch-'A') + 1
	}
	return res
}

// @lc code=end
