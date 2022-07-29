

/*
 * @lc app=leetcode.cn id=278 lang=golang
 *
 * [278] 第一个错误的版本
 */

// test
func isBadVersion(version int) bool {
	return version >= 4
}

// @lc code=start
/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
	var left = 1
	var right = n
	var version = 0
	for left <= right {
		mid := (left + right) / 2
		switch isBadVersion(mid) {
		// 返回true，说明版本号在错误序列中，最右边界左移动 <- right
		case true:
			version = mid
			right = mid - 1
			// 返回false，说明版本号不在在错误序列中，最左边界右移 left ->
		case false:
			left = mid + 1
		}
	}
	return version
}

// @lc code=end

// func main() {
// 	firstBadVersion(5)
// }
