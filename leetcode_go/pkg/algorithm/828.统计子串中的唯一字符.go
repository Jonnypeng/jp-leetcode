package algorithm

/*
 * @lc app=leetcode.cn id=828 lang=golang
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start
func uniqueLetterString(s string) int {
	dict := make(map[string]int, 0)
	n := len(s)
	l := n - 2
	start := 0
	end := l
	finsed := false
	res := 0

	for !finsed {
		for end < n {
			ch := s[start : end+1]
			if _, ok := dict[ch]; !ok {
				dict[ch] = len(ch)
			} else {
				dict[ch] = 0
			}
			start++
			end++
			if end == n {
				l--
				if l == -1 {
					finsed = true
					break
				}
				start = 0
				end = l
			}
		}
	}

	for _, v := range dict {
		res += v
	}
	res += n
	return res
}

// @lc code=end

func UniqueLetterString(s string) int {
	return uniqueLetterString(s)
}
