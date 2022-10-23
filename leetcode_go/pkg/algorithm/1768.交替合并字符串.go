package algorithm

/*
 * @lc app=leetcode.cn id=1768 lang=golang
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
func mergeAlternately(word1 string, word2 string) string {
	minStr := ""
	maxStr := ""
	ptr := 0
	res := ""

	if len(word1) >= len(word2) {
		maxStr = word1
		minStr = word2
	} else {
		maxStr = word2
		minStr = word1
	}

	for i := 0; i < len(minStr); i++ {
		res += string(word1[i])
		res += string(word2[i])
		ptr = i
	}

	res += maxStr[ptr+1:]

	return res
}

// @lc code=end

func MergeAlternately(word1 string, word2 string) string {
	return mergeAlternately(word1, word2)
}
