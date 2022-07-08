

/*
 * @lc app=leetcode.cn id=16 lang=golang
 *
 * [16] 最接近的三数之和
 */

import (
	"sort"
)

// @lc code=start

// 获取绝对值
func abs(num int) int {
	if num < 0 {
		return num * -1
	}
	return num
}

func threeSumClosest(nums []int, target int) int {
	var n = len(nums) - 1
	var sum = nums[0] + nums[1] + nums[2]

	// 将数组进行排序
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	// 遍p点
	for p := 0; p < n-1; p += 1 {
		// 求出差值
		anoter := target - nums[p]
		// 赋低、矮两个指针
		l, h := p+1, n
		for l < h {
			if l == p || h == p {
				continue
			}
			v := nums[l] + nums[h]
			w := v + nums[p]
			if abs(target-w) < abs(target-sum) {
				sum = w
			}
			if v > anoter {
				h--
			} else if v < anoter {
				l++
			} else {
				break
			}
		}
	}
	return sum
}

// @lc code=end

// func main() {
// 	threeSumClosest([]int{-1, 2, 1, -4}, 2) //2
// }
