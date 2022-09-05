package leetcode

/*
 * @lc app=leetcode.cn id=292 lang=golang
 *
 * [292] Nim 游戏
 */

// @lc code=start
// 最优的解决方案
func bestAction(n int) int {
	// 只有剩下1、2、3才能绝对赢，同时1+3，2+3，3+3都可以双手赢，所以i就是n%4的余数
	for i := 1; i <= 3; i++ {
		if n%4 == i {
			return i
		}
	}
	// 若剩下4*n个石头，都会会面临被剿灭
	return -1
}

func canWinNim(n int) bool {
	// 合的副本
	var total = n
	// 计数器，判断最后一次是谁拿石头
	var count = 0
	// 迭代终止
	var isEnd = false
	for !isEnd {
		// 取出石头
		r := bestAction(total)
		// 判断是否成功
		if r == -1 {
			isEnd = true
		} else {
			// 合分解
			total -= r
			// 计数前进
			count++
		}
	}
	// 得出结论，计数器是不是奇数
	return count%2 != 0
}

// @lc code=end
