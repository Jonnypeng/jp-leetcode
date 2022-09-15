package algorithm

/*
 * @lc app=leetcode.cn id=238 lang=golang
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
func productExceptSelf(nums []int) []int {
	n := len(nums)
	prefix := 1
	postfix := 1

	preArr := make([]int, n)
	postArr := make([]int, n)
	res := make([]int, n)

	for i := 0; i < n; i++ {
		if i == 0 {
			preArr[i] = 1
			prefix = 1
			continue
		}
		prefix *= nums[i-1]
		preArr[i] = prefix
	}

	for i := n - 1; i >= 0; i-- {
		if i == n-1 {
			postArr[i] = 1
			postfix = 1
			continue
		}
		postfix *= nums[i+1]
		postArr[i] = postfix
	}

	for i := 0; i < n; i++ {
		res[i] = preArr[i] * postArr[i]
	}

	return res

}

// @lc code=end

func ProductExceptSelf(nums []int) []int {
	return productExceptSelf(nums)
}
