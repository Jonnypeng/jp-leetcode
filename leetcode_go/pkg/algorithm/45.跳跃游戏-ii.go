package algorithm

/*
 * @lc app=leetcode.cn id=45 lang=golang
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start

func jumpToIndex(currentIndex int, steps int) int {
	return currentIndex + steps
}

func getMaxIndex(subNums []int) int {
	maxSteps := 0
	index := 0
	for i, v := range subNums {
		steps := jumpToIndex(i, v)
		if steps > maxSteps {
			maxSteps = steps
			index = i
		}
	}
	return index + 1
}

func jump(nums []int) int {
	n := len(nums)
	count := 0
	i := 0
	for i < n-1 {
		value := nums[i]
		end := i + value + 1
		maxIndex := 0
		if end > n-1 {
			count++
			break
		} else {
			subNums := nums[i+1 : end]
			maxIndex = i + getMaxIndex(subNums)
		}
		i = maxIndex
		count++
	}
	return count
}

// @lc code=end

func Jump(nums []int) int {
	return jump(nums)
}
