/*
 * @lc app=leetcode.cn id=16 lang=golang
 *
 * [16] 最接近的三数之和
 */
package main

import "math"

// @lc code=start

func getSum(nums [3]int, target int) int {
	var sum = 0
	var res = 0
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
	}
	var r float64 = float64(target - sum)
	res = int(math.Abs(r))
	return res
}

func threeSumClosest(nums []int, target int) int {
	var res = math.MaxInt
	var x, y, z = 0, 0, 0
	var sum = 0
	var n = len(nums) - 1
	for p := 0; p <= n; p += 1 {
		for i := p - 1; i >= 0; i -= 1 {
			for j := p + 1; j <= n; j += 1 {
				a := nums[i]
				b := nums[p]
				c := nums[j]
				_res := getSum([3]int{a, b, c}, target)
				if _res < res {
					res = _res
					x = i
					y = p
					z = j
				}
			}
		}
	}
	sum = nums[x] + nums[y] + nums[z]
	return sum
}

// @lc code=end
