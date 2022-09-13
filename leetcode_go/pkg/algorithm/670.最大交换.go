package algorithm

import (
	"strconv"
	"strings"
)

/*
 * @lc app=leetcode.cn id=670 lang=golang
 *
 * [670] 最大交换
 */

// @lc code=start

func maximumSwap(num int) int {
	strNum := strconv.Itoa(num)
	n := len(strNum)

	strArr := make([]string, n)
	maxStr := strNum

	for i, ch := range strNum {
		strArr[i] = string(ch)
	}

	start := 0
	end := start + 1

	for start < n-1 {
		if end >= n {
			start++
			end = start + 1
			continue
		}
		strArr[start], strArr[end] = strArr[end], strArr[start]
		res := strings.Join(strArr, "")
		if res > maxStr {
			maxStr = res
		}
		strArr[start], strArr[end] = strArr[end], strArr[start]
		end++
	}

	maxValue, _ := strconv.Atoi(maxStr)

	return maxValue
}

// @lc code=end

func MaximumSwap(num int) int {
	return maximumSwap(num)
}
