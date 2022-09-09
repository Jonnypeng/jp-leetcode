package algorithm

import (
	"regexp"
	"strings"
)

/*
 * @lc app=leetcode.cn id=125 lang=golang
 *
 * [125] 验证回文串
 */

// @lc code=start
func isPalindrome(s string) bool {
	str := s
	res := ""
	pattern := regexp.MustCompile(`[^\w]`)
	str = pattern.ReplaceAllString(str, "")
	pattern = regexp.MustCompile(`_`)
	str = pattern.ReplaceAllString(str, "")
	str = strings.ToLower(str)
	n := len(str)
	if n == 0 {
		return true
	}
	strArr := strings.Split(str, "")
	for i := 0; i <= (n-1)/2; i++ {
		strArr[i], strArr[(n-1)-i] = strArr[(n-1)-i], strArr[i]
	}
	res = strings.Join(strArr, "")
	return res == str
}

// @lc code=end

func IsPalindrome(s string) bool {
	return isPalindrome(s)
}
