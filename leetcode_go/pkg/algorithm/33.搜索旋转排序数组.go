package algorithm

/*
 * @lc app=leetcode.cn id=33 lang=golang
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
func search(nums []int, target int) int {
	var tempNums = nums
	var n = len(tempNums)
	var k = 0 // 旋转的索引

	// 返回的边界条件
	if n == 1 {
		if target == tempNums[0] {
			return 0
		}
		return -1
	}

	// 将被旋转的数组进行旋转
	for i, j := 0, 1; j < n; i, j = i+1, j+1 {
		if tempNums[i] > tempNums[j] {
			slice := tempNums[0:j]
			tempNums = append(tempNums[j:n], slice...)
			k = j
			break
		}
	}

	var min = 0
	var max = n - 1
	var res = -1

	// 二分查找
	for min <= max {
		mid := int((float32(min) + float32(max)) * 0.5)
		val := tempNums[mid]
		if val == target {
			res = mid
			break
		} else if target > val {
			min = mid + 1
		} else if target < val {
			max = mid - 1
		}
	}

	if res != -1 {
		res += k
		res = res % n // 旋转本质就是循环数组，所以需要进行索引循环
	}

	return res
}

// @lc code=end

// func main() {
// 	search([]int{4, 5, 6, 7, 0, 1, 2}, 0)

// }
