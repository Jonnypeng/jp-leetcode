package algorithm

import "strconv"

/*
 * @lc app=leetcode.cn id=38 lang=golang
 *
 * [38] 外观数列
 */

// @lc code=start
func getDesc(str string) string {
	n := len(str)
	res := ""
	ch := str[0:1]
	count := 1

	if n == 1 {
		return "1" + str
	}

	for i := 1; i < n; i++ {
		v := string(str[i])
		if v == ch {
			count++
			if i == n-1 {
				res += (strconv.Itoa(count) + ch)
			}
			continue
		}
		res += (strconv.Itoa(count) + ch)
		count = 1
		ch = v
		if i == n-1 {
			res += (strconv.Itoa(count) + ch)
		}
	}
	return res
}

func countAndSay(n int) string {
	res := "1"

	if n == 1 {
		return "1"
	}

	for i := 2; i <= n; i++ {
		res = getDesc(res)
	}

	return res
}

// @lc code=end

func CountAndSay(n int) string {
	return countAndSay(n)
}
