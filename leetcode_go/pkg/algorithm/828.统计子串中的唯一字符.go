package algorithm

/*
 * @lc app=leetcode.cn id=828 lang=golang
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start

func noRepeat(s string, m_dict *map[string]int) int {
	if _, ok := (*m_dict)[s]; ok {
		return (*m_dict)[s]
	}
	dict := make(map[string]int, 0)
	res := 0
	for _, v := range s {
		ch := string(v)
		if _, ok := (dict)[ch]; !ok {
			(dict)[ch] = 1
		} else {
			(dict)[ch] = 0
		}
	}
	for _, v := range dict {
		res += v
	}
	(*m_dict)[s] = res
	return res
}

func uniqueLetterString(s string) int {
	dict := make(map[string]int, 0)
	m_dict := make(map[string]int, 0)
	n := len(s)

	if n == 1 {
		return 1
	}

	l := 0
	start := 0
	end := l
	finsed := false
	res := 0

	for !finsed {
		for end < n {
			ch := s[start : end+1]
			if _, ok := dict[ch]; !ok {
				dict[ch] = noRepeat(ch, &m_dict)
			} else {
				dict[ch] = noRepeat(ch, &m_dict)
			}
			start++
			end++
			if end == n {
				l++
				if l == n {
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
	return res
}

// @lc code=end

func UniqueLetterString(s string) int {
	return uniqueLetterString(s)
}
