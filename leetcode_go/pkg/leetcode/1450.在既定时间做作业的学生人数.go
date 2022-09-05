

/*
 * @lc app=leetcode.cn id=1450 lang=golang
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
func busyStudent(startTime []int, endTime []int, queryTime int) int {
	count := 0

	for i := range startTime {
		if queryTime >= startTime[i] && queryTime <= endTime[i] {
			count++
		}
	}

	return count
}

// @lc code=end
