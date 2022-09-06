package algorithm

import (
	"strings"
)

/*
 * @lc app=leetcode.cn id=316 lang=golang
 *
 * [316] 去除重复字母
 */

// @lc code=start

func removeDuplicateLetters(s string) string {
	res := "" // 返回的字符串,类单调递增栈

	for i, ch := range s {

		// 当栈中发现有重复的字符，就抛弃该字符，因为此栈为一个单调递增栈
		if strings.IndexRune(res, ch) > -1 {
			continue
		}

		// 当栈大于0时
		// 当栈顶大于当前值
		// 当栈顶值在当前字符串之后的切片中还有值时
		for len(res) > 0 && int(res[len(res)-1]) > int(ch) && strings.Index(s[i:], res[len(res)-1:]) > -1 {
			// 清空栈顶
			res = res[:len(res)-1]
		}

		// 入栈
		res += string(ch)
	}

	return res

}

// @lc code=end

// func main() {
// 	removeDuplicateLetters("bbcaac") //"bac"
// }
