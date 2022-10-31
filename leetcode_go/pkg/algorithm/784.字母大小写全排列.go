package algorithm

import (
	"unicode"
)

/*
 * @lc app=leetcode.cn id=784 lang=golang
 *
 * [784] 字母大小写全排列
 */

// @lc code=start

func letterCasePermutation(s string) []string {
	q := []string{""}
	ans := []string{}
	for len(q) > 0 {
		cur := q[0]
		pos := len(cur)
		if pos == len(s) {
			ans = append(ans, cur)
			q = q[1:]
		} else {
			if unicode.IsLetter(rune(s[pos])) {
				q = append(q, cur+string(s[pos]^32))
			}
			q[0] += string(s[pos])
		}
	}
	return ans
}

// @lc code=end

func LetterCasePermutation(s string) []string {
	return letterCasePermutation(s)
}
