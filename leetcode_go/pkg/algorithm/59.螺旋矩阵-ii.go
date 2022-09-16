package algorithm

/*
 * @lc app=leetcode.cn id=59 lang=golang
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
func generateMatrix(n int) [][]int {
	m := n
	totalCount := m * n
	count := 0

	left := 0
	right := n - 1
	top := 1
	down := m - 1

	i := 0
	j := 0

	direction := "right"

	matrix := make([][]int, n)

	for i := 0; i < n; i++ {
		matrix[i] = make([]int, n)
	}

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
		matrix[i][j] = count + 1
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

	return matrix
}

// @lc code=end

func GenerateMatrix(n int) [][]int {
	return generateMatrix(n)
}
