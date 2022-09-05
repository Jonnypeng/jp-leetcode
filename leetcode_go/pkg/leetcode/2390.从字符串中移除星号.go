package leetcode

/*
 * @lc app=leetcode.cn id=2390 lang=golang
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
func removeStars(s string) string {
	temp := []rune{}
	for _, c := range s {
		if c == '*' {
			temp = temp[:len(temp)-1]
		} else {
			temp = append(temp, c)
		}
	}
	return string(temp)
}

// @lc code=end
