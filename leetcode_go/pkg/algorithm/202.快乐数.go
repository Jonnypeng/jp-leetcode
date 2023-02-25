package algorithm

/*
 * @lc app=leetcode.cn id=202 lang=golang
 *
 * [202] 快乐数
 */

// @lc code=start
func isHappy(n int32) bool {
	// 创建一个map，过滤已经进行循环过的数，当出现一个已经循环过的数字，说明会出现死循环，应该立即弹出
	m := make(map[int32]bool, 0)
	// 迭代器的条件是此数没有被循环过，且不为1
	for !m[n] && n != 1 {
		m[n] = true   // 进行已循环标记
		n = getAns(n) // 计算出一个平方数，并赋值给新的数
	}

	return n == 1 // 比较此数是不是1
}

func getAns(n int32) int32 {
	var val int32
	for n > 0 {
		c := n % 10  // 取出最后一位数
		val += c * c // 计算平方
		n /= 10      // 丢掉最后一位数
	}
	return val
}

// @lc code=end

func IsHappy(n int32) bool {
	return isHappy(n)
}
