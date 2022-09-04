package main

/*
 * @lc app=leetcode.cn id=1582 lang=golang
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start

func isSpe(mat *[][]int, i int, j int, n int) bool {
	_mat := *mat
	res := false

	left, up, right, down := false, false, false, false

	if i-1 == -1 {
		up = true
	} else {
		up = _mat[i-1][j] == 0
	}

	if i+1 > n-1 {
		down = true
	} else {
		down = _mat[i+1][j] == 0
	}

	if j-1 == -1 {
		left = true
	} else {
		left = _mat[i][j-1] == 0
	}

	if j+1 > n-1 {
		right = true
	} else {
		right = _mat[i][j+1] == 0
	}

	if !up {
		up = _mat[i-1][j] == 0
	}

	if !down {
		down = _mat[i+1][j] == 0
	}

	if !right {
		right = _mat[i][j+1] == 0
	}

	if !left {
		left = _mat[i][j-1] == 0
	}

	if left && right && up && down {
		res = true
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

func main() {
	numSpecial([][]int{{1, 0, 0}, {0, 0, 1}, {1, 0, 0}})
}
