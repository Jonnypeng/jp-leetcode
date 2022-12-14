package algorithm

/*
 * @lc app=leetcode.cn id=374 lang=golang
 *
 * [374] 猜数字大小
 */

func guess(num int) int {
	return 0
}

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * func guess(num int) int;
 */

func guessNumber(n int) int {
	var left = 1
	var right = n
	for left <= right {
		mid := (left + right) / 2
		switch guess(mid) {
		case -1:
			right = mid - 1
		case 1:
			left = mid + 1
		case 0:
			return mid
		}
	}
	return 0
}

// @lc code=end
