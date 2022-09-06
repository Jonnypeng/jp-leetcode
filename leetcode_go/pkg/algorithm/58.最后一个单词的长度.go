package algorithm

import (
	"regexp"
	"strings"
)

/*
 * @lc app=leetcode.cn id=58 lang=golang
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
func lengthOfLastWord(s string) int {
	var pattern1 = regexp.MustCompile(`\w+\s{0,}$`)
	var pattern2 = regexp.MustCompile(`\s*$`)

	ns := pattern1.FindAllString(s, -1)
	newStr := pattern2.ReplaceAllString(ns[0], "")

	return strings.Count(newStr, "") - 1
}

// @lc code=end

// func main() {
// 	lengthOfLastWord("hoole world   ")
// }
