package main

/*
 * @lc app=leetcode.cn id=169 lang=golang
 *
 * [169] 多数元素
 */

// @lc code=start
func majorityElement(nums []int) int {
	var maxMap map[int]int = make(map[int]int)
	var maxValue [2]int = [2]int{nums[0], 1}
	for i := 0; i < len(nums); i++ {
		var v = nums[i]
		if _, ok := maxMap[nums[i]]; ok {
			var currentValue = maxMap[nums[i]] + 1
			maxMap[v] = currentValue
			if currentValue > maxValue[1] {
				maxValue[1] = currentValue
				maxValue[0] = v
			}
		} else {
			maxMap[v] = 1
		}
	}
	return maxValue[0]
}

// func main() {
// 	arr := []int{1, 2, 2, 4, 5}
// 	r := majorityElement(arr)
// 	fmt.Print(r)
// }

// @lc code=end
