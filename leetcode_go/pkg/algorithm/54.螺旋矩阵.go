package algorithm

/*
 * @lc app=leetcode.cn id=54 lang=golang
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
func spiralOrder(matrix [][]int) []int {
	m := len(matrix)
	n := len(matrix[0])
	totalCount := m * n
	count := 0

	left := 0
	right := n - 1
	top := 1
	down := m - 1

	i := 0
	j := 0

	direction := "right"
	res := make([]int, totalCount)

	for count < totalCount {
		if direction == "right" {
			if j > right {
				j = right
				i++
				right--
				direction = "down"
				continue
			}
		}
		if direction == "down" {
			if i > down {
				i = down
				j--
				down--
				direction = "left"
				continue
			}
		}
		if direction == "left" {
			if j < left {
				j = left
				i--
				left++
				direction = "up"
				continue
			}
		}
		if direction == "up" {
			if i < top {
				i = top
				j++
				top++
				direction = "right"
				continue
			}
		}
		res[count] = matrix[i][j]
		count++
		if direction == "right" {
			j++
		}
		if direction == "down" {
			i++
		}
		if direction == "left" {
			j--
		}
		if direction == "up" {
			i--
		}
	}

	return res

}

// @lc code=end

func SpiralOrder(matrix [][]int) []int {
	return spiralOrder(matrix)
}
