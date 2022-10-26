package algorithm

/*
 * @lc app=leetcode.cn id=62 lang=golang
 *
 * [62] 不同路径
 */

// @lc code=start
func uniquePaths(m int, n int) int {
	ans := make([][]int, m)
	for i := 0; i < m; i++ {
		ans[i] = make([]int, n)
		for j := 0; j < n; j++ {
			if i == 0 || j == 0 {
				ans[i][j] = 1
				continue
			}
			ans[i][j] = ans[i-1][j] + ans[i][j-1]
		}
	}
	return ans[m-1][n-1]
}

// @lc code=end

func UniquePaths(m int, n int) int {
	return uniquePaths(m, n)
}
