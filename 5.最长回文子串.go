/*
 * @Author: 彭江
 * @Date: 2022-04-25 20:29:19
 * @LastEditors: 彭江
 * @LastEditTime: 2022-04-25 22:16:14
 */
package main

/*
 * @lc app=leetcode.cn id=5 lang=golang
 *
 * [5] 最长回文子串
 */

// @lc code=start

func longestPalindrome(s string) string {
	var longAnswer string = ""
	var dataMap map[string]bool = make(map[string]bool)
	var n int = len(s)

	if n == 1 {
		longAnswer = s
	} else {
		longAnswer = ""
	}

	var getPalindrome func(str string, preStr string) bool
	getPalindrome = func(str string, preStr string) bool {
		key := str
		if _, ok := dataMap[key]; ok {
			val := dataMap[key]
			dataMap[preStr] = val
			return val
		}
		if len(str) == 1 || str == "" {
			dataMap[preStr] = true
			return true
		}
		if str[0] == str[len(str)-1] {
			return getPalindrome(str[1:len(str)-1], str)
		} else {
			dataMap[preStr] = false
			return false
		}
	}

	if longAnswer != "" {
		return longAnswer
	}

	for i := 0; i < len(s); i++ {
		for j := 0; j < len(s); j++ {
			if j < i {
				continue
			}
			if i == j {
				continue
			}
			tempStr := s[i : j+1]
			if getPalindrome(tempStr, tempStr) {
				if len(tempStr) > len(longAnswer) {
					longAnswer = tempStr
				}
			}
		}
	}

	if longAnswer == "" {
		longAnswer = s[0:1]
	}

	return longAnswer
}

func main() {
	var pa string = "ajgiljtperkvubjmdsefcylksrxtftqrehoitdgdtttswwttmfuvwgwrruuqmxttzsbmuhgfaoueumvbhajqsaxkkihjwevzzedizmrsmpxqavyryklbotwzngxscvyuqjkkaotitddlhhnutmotupwuwyltebtsdfssbwayuxrbgihmtphshdslktvsjadaykyjivbzhwujcdvzdxxfiixnzrmusqvwujjmxhbqbdpauacnzojnzxxgrkmupadfcsujkcwajsgintahwgbjnvjqubcxajdyyapposrkpqtpqfjcvbhlmwfutgognqxgaukpmdyaxghgoqkqnigcllachmwzrazwhpppmsodvxilrccfqgpkmdqhoorxpyjsrtbeeidsinpeyxxpsjnymxkouskyhenzgieybwkgzrhhrzgkwbyeigznehyksuokxmynjspxxyepnisdieebtrsjypxroohqdmkpgqfccrlixvdosmppphwzarzwmhcallcginqkqoghgxaydmpkuagxqngogtufwmlhbvcjfqptqpkrsoppayydjaxcbuqjvnjbgwhatnigsjawckjuscfdapumkrgxxznjozncauapdbqbhxmjjuwvqsumrznxiifxxdzvdcjuwhzbvijykyadajsvtklsdhshptmhigbrxuyawbssfdstbetlywuwputomtunhhlddtitoakkjquyvcsxgnzwtoblkyryvaqxpmsrmzidezzvewjhikkxasqjahbvmueuoafghumbszttxmquurrwgwvufmttwwstttdgdtioherqtftxrsklycfesdmjbuvkreptjligja"
	longestPalindrome(pa)
}

// @lc code=end
