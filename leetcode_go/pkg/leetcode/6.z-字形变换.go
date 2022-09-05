

/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */

// @lc code=start
func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	var res [][]string = make([][]string, numRows)
	var resStr string = ""

	var x int = 0
	var y int = 0
	var index int = 0
	var upDown string = "down"

	for index <= len(s)-1 {

		if res[y] == nil {
			res[y] = make([]string, len(s))
		}

		res[y][x] = s[index : index+1]
		index += 1

		if upDown == "down" {
			y += 1
		}

		if upDown == "up" {
			x += 1
			y -= 1
		}

		if y == numRows-1 {
			upDown = "up"
		}

		if y == 0 {
			upDown = "down"
		}

	}

	for i := 0; i < len(res); i++ {
		for j := 0; j < len(res[i]); j++ {
			val := res[i][j]
			if val != "" {
				resStr += val
			}
		}
	}

	return resStr
}

// func main() {
// 	// convert("abcdefg", 3)
// 	convert("AB", 1)
// }

// @lc code=end
