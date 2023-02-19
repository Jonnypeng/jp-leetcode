package algorithm

/*
 * @lc app=leetcode.cn id=168 lang=golang
 *
 * [168] Excel表列名称
 */

// @lc code=start
func convertToTitle(columnNumber int) string {
	ans := []byte{}
	for columnNumber > 0 {
		r := columnNumber % 26
		if r == 0 {
			// 因为0，说明columenNumber是26的倍数，26是z，需要输入26
			r = 26
			columnNumber -= 26
		}
		a := byte(r + 'A' - 1)
		ans = append(ans, a)
		columnNumber /= 26
	}
	// 需要作为镜像倒叙
	for h, t := 0, len(ans)-1; h < t; h, t = h+1, t-1 {
		ans[h], ans[t] = ans[t], ans[h]
	}
	return string(ans)
}

// @lc code=end
