package algorithm

import (
	"strconv"
)

/*
 * @lc app=leetcode.cn id=190 lang=golang
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
func reverseBits(num uint32) uint32 {
	str := strconv.FormatInt(int64(num), 2)
	arr := [32]string{}
	for i := len(str) - 1; i >= 0; i-- {
		j := len(str) - 1 - i
		arr[j] = string(str[i])
	}
	str = ""
	for i := 0; i < 32; i++ {
		str += arr[i]
	}
	offset := 32 - len(str)
	for i := 0; i < offset; i++ {
		str += "0"
	}
	res, _ := strconv.ParseInt(str, 2, 64)
	return uint32(res)
}

// @lc code=end

func ReverseBits(num uint32) uint32 {
	return reverseBits(num)
}
