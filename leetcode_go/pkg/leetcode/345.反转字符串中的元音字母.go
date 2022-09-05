

/*
 * @lc app=leetcode.cn id=345 lang=golang
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
func reverseVowels(s string) string {
	r := []byte(s)
	var indexs []int
	var dict map[string]bool = make(map[string]bool)
	dict["a"] = true
	dict["e"] = true
	dict["i"] = true
	dict["o"] = true
	dict["u"] = true
	dict["A"] = true
	dict["E"] = true
	dict["I"] = true
	dict["O"] = true
	dict["U"] = true

	for i, v := range r {
		if _, ok := dict[string(v)]; ok {
			indexs = append(indexs, i)
		}
	}

	if len(indexs) >= 2 {
		i := 0
		j := len(indexs) - 1
		for i < j {
			r[indexs[i]], r[indexs[j]] = r[indexs[j]], r[indexs[i]]
			i++
			j--
		}
	}

	return string(r)
}

// @lc code=end

// func main() {
// 	// reverseVowels("leetcode")
// 	// reverseVowels("a.")
// 	reverseVowels("A man, a plan, a canal: Panama")
// 	// reverseVowels("race car")
// }
