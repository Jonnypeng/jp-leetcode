package algorithm

import (
	"math"
	"regexp"
)

/*
 * @lc app=leetcode.cn id=1417 lang=golang
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start

func sortArr(numArr *[]string, strArr *[]string) string {
	nl := len(*numArr)    // 数字数组长度
	sl := len(*strArr)    // 字符串数组长度
	var bigArr []string   // 大的数组
	var smallArr []string // 小的数组

	res := ""

	// 当数字数组或字符数组的长度等于0时
	if nl == 0 || sl == 0 {
		return ""
	}

	if nl > sl && nl-sl > 1 {
		return ""
	}

	if sl > nl && sl-nl > 1 {
		return ""
	}

	if nl >= sl {
		bigArr = *numArr
		smallArr = *strArr
	} else {
		bigArr = *strArr
		smallArr = *numArr
	}

	for i := 1; i < nl+sl+1; i++ {
		index := float64(i) / 2
		if i%2 != 0 {
			myIndex := int(math.Round(index)) - 1
			res += bigArr[myIndex]
		}
		if i%2 == 0 {
			myIndex := int(index) - 1
			res += smallArr[myIndex]
		}
	}

	return res
}

func reformat(s string) string {
	// 当字符串长度只有1时，直接返回值
	if len(s) == 1 {
		return s
	}

	numArr := []string{}
	strArr := []string{}
	numReg := regexp.MustCompile(`\d`)
	strReg := regexp.MustCompile(`[^\d]`)

	// 遍历数组，将字符串与数字进行分离
	for _, v := range s {
		_v := string(v)
		isNum := numReg.MatchString(string(_v))
		isStr := strReg.MatchString(string(_v))
		if isNum {
			numArr = append(numArr, _v)
		}
		if isStr {
			strArr = append(strArr, _v)
		}
	}

	return sortArr(&numArr, &strArr)
}

// @lc code=end

// func main() {
// 	reformat("swsa23313sd")

// }
