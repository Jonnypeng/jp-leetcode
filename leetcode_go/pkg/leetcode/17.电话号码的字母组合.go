

/*
 * @lc app=leetcode.cn id=17 lang=golang
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

func backtrack(curStr string, res *[]string, index int, digits string, digitsMap map[byte][]string) {
	if index == len(digits) {
		*res = append(*res, curStr)
		return
	}
	for _, s := range digitsMap[digits[index]] {
		backtrack(curStr+s, res, index+1, digits, digitsMap)
	}
}

func letterCombinations(digits string) []string {
	var dict = map[byte][]string{
		'0': {"0"},
		'1': {"1"},
		'2': {"a", "b", "c"},
		'3': {"d", "e", "f"},
		'4': {"g", "h", "i"},
		'5': {"j", "k", "l"},
		'6': {"m", "n", "o"},
		'7': {"p", "q", "r", "s"},
		'8': {"t", "u", "v"},
		'9': {"w", "x", "y", "z"},
	}

	var res = []string{}

	if len(digits) == 0 {
		return res
	}

	backtrack("", &res, 0, digits, dict)

	return res
}

// @lc code=end

// func main() {
// 	letterCombinations("234")
// }
