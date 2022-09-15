package algorithm

/*
 * @lc app=leetcode.cn id=46 lang=golang
 *
 * [46] 全排列
 */

// @lc code=start

func back46(nums *[]int, res *[][]int, first int) {
	n := len(*nums)
	if first == n {
		temp := []int{}
		temp = append(temp, *nums...)
		*res = append(*res, temp)
	}
	for i := first; i < n; i++ {
		(*nums)[first], (*nums)[i] = (*nums)[i], (*nums)[first]
		back46(nums, res, first+1)
		(*nums)[first], (*nums)[i] = (*nums)[i], (*nums)[first]
	}
}

func permute(nums []int) [][]int {
	res := [][]int{}
	back46(&nums, &res, 0)
	return res
}

// @lc code=end

func Permute(nums []int) [][]int {
	return permute(nums)
}
