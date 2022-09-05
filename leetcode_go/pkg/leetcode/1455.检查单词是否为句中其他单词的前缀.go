package leetcode

import (
	"regexp"
	"strings"
)

/*
 * @lc app=leetcode.cn id=1455 lang=golang
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
func isPrefixOfWord(sentence string, searchWord string) int {
	res := -1
	stringArr := strings.Split(sentence, " ")
	pattern := regexp.MustCompile("^" + searchWord)

	for i, _ := range stringArr {
		if pattern.MatchString(stringArr[i]) {
			res = i + 1
			break
		}
	}

	return res
}

// @lc code=end
