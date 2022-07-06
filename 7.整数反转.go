/*
 * @lc app=leetcode.cn id=7 lang=golang
 *
 * [7] 整数反转
 */
package jp_leetcode

import (
	"math"
	"strconv"
	"strings"
)

// @lc code=start
func reverse(x int) int {
	var tempFloat float64 = float64(x)
	var tempInt int = int(math.Abs(tempFloat))
	var tempX string = strconv.Itoa(tempInt)
	var tempArr = strings.Split(tempX, "")
	var abs = math.Pow(2, 31)
	var min = int(abs * -1)
	var max = int(abs - 1)

	for i, j := 0, len(tempArr)-1; i < j; i, j = i+1, j-1 {
		tempArr[i], tempArr[j] = tempArr[j], tempArr[i]
	}

	tempX = strings.Join(tempArr, "")

	tempInt, _ = strconv.Atoi(tempX)

	if x < 1 {
		tempInt = tempInt * -1
	}

	if tempInt < min || tempInt > max {
		tempInt = 0
	}

	return tempInt

}

// @lc code=end

func main() {
	//reverse(123)
	reverse(1534236469)
}
