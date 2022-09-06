package algorithm

/*
 * @lc app=leetcode.cn id=1475 lang=golang
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
func finalPrices(prices []int) []int {
	n := len(prices)
	i := 0
	j := 1
	res := []int{}

	for i < n {
		if i == n-1 {
			res = append(res, prices[i])
			i++
			continue
		}
		if j > n-1 {
			res = append(res, prices[i])
			i++
			j = i + 1
			continue
		}
		if prices[j] <= prices[i] {
			v := prices[i] - prices[j]
			res = append(res, v)
			i++
			j = i + 1
			continue
		}
		j++
	}

	return res

}

// @lc code=end

// func main() {

// }
