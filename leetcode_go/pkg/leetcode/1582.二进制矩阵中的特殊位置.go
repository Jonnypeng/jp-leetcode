

/*
 * @lc app=leetcode.cn id=1582 lang=golang
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start

func isSpe(mat *[][]int, i int, j int, n int) bool {
	_mat := *mat
	res := true

	for index, _ := range _mat {
		if index == i {
			continue
		}
		if _mat[index][j] != 0 {
			res = false
			break
		}
	}

	for index, _ := range _mat[i] {
		if index == j {
			continue
		}
		if _mat[i][index] != 0 {
			res = false
			break
		}
	}

	return res

}

func numSpecial(mat [][]int) int {
	count := 0
	n := len(mat)

	for i, r := range mat {
		for j, v := range r {
			if v == 0 {
				continue
			}
			if isSpe(&mat, i, j, n) {
				count++
			}
		}
	}

	return count

}

// @lc code=end

// func main() {
// 	numSpecial([][]int{{1, 0, 0}, {0, 0, 1}, {1, 0, 0}}) //
// }
