package algorithm

import "math"

/**
 *
 * 给你一个整数数组 nums ，返回出现最频繁的偶数元素。 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。
 *
 *	输入：nums = [0,1,2,2,4,4,1]
	输出：2
	解释：
	数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。
	返回最小的那个，即返回 2 。
 *
 *
 *
 *
*/

func mostFrequentEven(nums []int) int {
	ans := make(map[int]int)
	maxCount := 0
	res := math.MaxInt

	for _, v := range nums {
		if v%2 == 0 {
			ans[v]++
		}
		if ans[v] > maxCount {
			maxCount = ans[v]
		}
	}

	for i, count := range ans {
		if count == maxCount {
			if i < res {
				res = i
			}
		}
	}

	if res == math.MaxInt {
		res = -1
	}

	return res

}

func MostFrequentEven(nums []int) int {
	return mostFrequentEven(nums)
}
