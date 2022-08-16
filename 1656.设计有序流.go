// package main

/*
 * @lc app=leetcode.cn id=1656 lang=golang
 *
 * [1656] 设计有序流
 */

// @lc code=start
type OrderedStream struct {
	ptr  int
	data map[int]string
	size int
}

func Constructor(n int) OrderedStream {
	return OrderedStream{
		ptr:  1,
		data: make(map[int]string, n),
		size: n,
	}
}

func (this *OrderedStream) Insert(idKey int, value string) []string {
	this.data[idKey] = value
	if this.ptr == idKey {
		res := []string{}
		lastId := this.ptr
		for i := idKey; i <= this.size; i++ {
			if _, ok := this.data[i]; ok {
				res = append(res, this.data[i])
				lastId = i
			} else {
				break
			}
		}
		this.ptr = lastId + 1
		return res
	}
	return []string{}
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Insert(idKey,value);
 */
// @lc code=end
