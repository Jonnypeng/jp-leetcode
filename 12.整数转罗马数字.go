/*
 * @lc app=leetcode.cn id=12 lang=golang
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
func intToRoman(num int) string {
	var temp int = num
	var res string = ""

	for temp > 0 {
		if temp >= 1000 {
			temp -= 1000
			res += "M"
			continue
		}
		if temp >= 900 {
			temp -= 900
			res += "CM"
			continue
		}
		if temp >= 500 {
			temp -= 500
			res += "D"
			continue
		}
		if temp >= 400 {
			temp -= 400
			res += "CD"
			continue
		}
		if temp >= 100 {
			temp -= 100
			res += "C"
			continue
		}
		if temp >= 90 {
			temp -= 90
			res += "XC"
			continue
		}
		if temp >= 50 {
			temp -= 50
			res += "L"
			continue
		}
		if temp >= 40 {
			temp -= 40
			res += "XL"
			continue
		}
		if temp >= 10 {
			temp -= 10
			res += "X"
			continue
		}
		if temp >= 9 {
			temp -= 9
			res += "IX"
			continue
		}
		if temp >= 5 {
			temp -= 5
			res += "V"
			continue
		}
		if temp >= 4 {
			temp -= 4
			res += "IV"
			continue
		}
		if temp >= 2 {
			temp -= 2
			res += "II"
			continue
		}
		if temp >= 1 {
			temp -= 1
			res += "I"
		}
	}

	return res
}

// @lc code=end

