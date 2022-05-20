package leetcode

/*
 * @lc app=leetcode.cn id=5 lang=golang
 *
 * [5] 最长回文子串
 */

// @lc code=start

func longestPalindrome(s string) string {
	var longAnswer string = ""
	var n int = len(s)

	if n <= 1 {
		longAnswer = s
	}

	var expond = func(l int, r int) string {
		for l >= 0 && r <= n-1 && s[l] == s[r] {
			l--
			r++
		}
		return s[l+1 : r]
	}

	for i := 0; i < n-1; i++ {
		l1 := expond(i, i)
		l2 := expond(i, i+1)
		var arr [2]string = [2]string{l1, l2}
		for j := 0; j < len(arr); j++ {
			val := arr[j]
			if len(val) > len(longAnswer) {
				longAnswer = val
			}
		}
	}

	return longAnswer
}

// func main() {
// 	var pa string = "ajgiljtperkvubjmdsefcylksrxtftqrehoitdgdtttswwttmfuvwgwrruuqmxttzsbmuhgfaoueumvbhajqsaxkkihjwevzzedizmrsmpxqavyryklbotwzngxscvyuqjkkaotitddlhhnutmotupwuwyltebtsdfssbwayuxrbgihmtphshdslktvsjadaykyjivbzhwujcdvzdxxfiixnzrmusqvwujjmxhbqbdpauacnzojnzxxgrkmupadfcsujkcwajsgintahwgbjnvjqubcxajdyyapposrkpqtpqfjcvbhlmwfutgognqxgaukpmdyaxghgoqkqnigcllachmwzrazwhpppmsodvxilrccfqgpkmdqhoorxpyjsrtbeeidsinpeyxxpsjnymxkouskyhenzgieybwkgzrhhrzgkwbyeigznehyksuokxmynjspxxyepnisdieebtrsjypxroohqdmkpgqfccrlixvdosmppphwzarzwmhcallcginqkqoghgxaydmpkuagxqngogtufwmlhbvcjfqptqpkrsoppayydjaxcbuqjvnjbgwhatnigsjawckjuscfdapumkrgxxznjozncauapdbqbhxmjjuwvqsumrznxiifxxdzvdcjuwhzbvijykyadajsvtklsdhshptmhigbrxuyawbssfdstbetlywuwputomtunhhlddtitoakkjquyvcsxgnzwtoblkyryvaqxpmsrmzidezzvewjhikkxasqjahbvmueuoafghumbszttxmquurrwgwvufmttwwstttdgdtioherqtftxrsklycfesdmjbuvkreptjligja"
// 	longestPalindrome(pa)
// }

// @lc code=end
