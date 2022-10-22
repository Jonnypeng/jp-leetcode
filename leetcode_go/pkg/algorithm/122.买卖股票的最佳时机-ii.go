package algorithm

/*
 * @lc app=leetcode.cn id=122 lang=golang
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
func maxProfit(prices []int) int {
	if len(prices) == 1 {
		return 0
	}

	res := 0
	stack := []int{prices[0]}

	for i := 1; i < len(prices); i++ {
		v := prices[i]
		if v < stack[len(stack)-1] {
			p := stack[len(stack)-1] - stack[0]
			res += p
			stack = []int{v}
		} else {
			stack = append(stack, v)
		}
	}

	if len(stack) > 0 {
		p := stack[len(stack)-1] - stack[0]
		res += p
		stack = nil
	}

	return res
}

// @lc code=end

func MaxProfit(prices []int) int {
	return maxProfit(prices)
}
