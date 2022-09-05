

/*
 * @lc app=leetcode.cn id=946 lang=golang
 *
 * [946] 验证栈序列
 */

// @lc code=start

func arrPop(arr *[]int) {
	last := len(*arr) - 1
	if last <= 0 {
		*arr = []int{}
		return
	}
	*arr = (*arr)[0:last]
}

func validateStackSequences(pushed []int, popped []int) bool {
	if len(pushed) != len(popped) {
		return false
	}

	pushedPoint := 0
	poppedPoint := 0
	n := len(pushed)
	isError := false
	tempArr := []int{}

	for pushedPoint < n || poppedPoint < n {
		if isError {
			break
		}
		if pushedPoint == 0 && poppedPoint == 0 {
			tempArr = append(tempArr, pushed[pushedPoint])
			pushedPoint++
			continue
		}

		if len(tempArr) == 0 || (pushedPoint < n && tempArr[len(tempArr)-1] != popped[poppedPoint]) {
			tempArr = append(tempArr, pushed[pushedPoint])
			pushedPoint++
			continue
		}
		if tempArr[len(tempArr)-1] == popped[poppedPoint] {
			arrPop(&tempArr)
			poppedPoint++
			continue
		}

		isError = true
	}

	return !isError
}

// @lc code=end

// func main() {
// 	validateStackSequences([]int{1, 0}, []int{1, 0})
// }
