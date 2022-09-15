package algorithm

import "strings"

/*
 * @lc app=leetcode.cn id=557 lang=golang
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
func reverseLeeter(word string) string {
	n := len(word)
	byteRes := make([]byte, n)
	strRes := ""
	for i := n - 1; i >= 0; i-- {
		byteRes[(n-1)-i] = word[i]
	}
	strRes = string(byteRes)
	return strRes
}

func reverseWords(s string) string {
	strNum := strings.Split(s, " ")
	for i, ch := range strNum {
		strNum[i] = reverseLeeter(ch)
	}
	res := strings.Join(strNum, " ")
	return res
}

// @lc code=end

func ReverseWords(s string) string {
	return reverseWords(s)
}
