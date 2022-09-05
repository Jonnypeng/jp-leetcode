package leetcode

/*
 * @lc app=leetcode.cn id=641 lang=golang
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
type MyCircularDeque struct {
	data       []int
	dataLength int
}

func Constructor(k int) MyCircularDeque {
	return MyCircularDeque{
		data:       []int{},
		dataLength: k,
	}
}

func (this *MyCircularDeque) InsertFront(value int) bool {
	if this.IsFull() {
		return false
	}
	this.data = append([]int{value}, this.data[0:]...)
	return true
}

func (this *MyCircularDeque) InsertLast(value int) bool {
	if this.IsFull() {
		return false
	}
	this.data = append(this.data, value)
	return true
}

func (this *MyCircularDeque) DeleteFront() bool {
	if this.IsEmpty() {
		return false
	}
	this.data = this.data[1:]
	return true
}

func (this *MyCircularDeque) DeleteLast() bool {
	if this.IsEmpty() {
		return false
	}
	this.data = this.data[0 : len(this.data)-1]
	return true
}

func (this *MyCircularDeque) GetFront() int {
	if this.IsEmpty() {
		return -1
	}
	return this.data[0]
}

func (this *MyCircularDeque) GetRear() int {
	if this.IsEmpty() {
		return -1
	}
	return this.data[len(this.data)-1]
}

func (this *MyCircularDeque) IsEmpty() bool {
	empty := len(this.data) == 0
	if empty {
		return true
	}
	return false
}

func (this *MyCircularDeque) IsFull() bool {
	full := len(this.data) == this.dataLength
	if full {
		return true
	}
	return false
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.InsertFront(value);
 * param_2 := obj.InsertLast(value);
 * param_3 := obj.DeleteFront();
 * param_4 := obj.DeleteLast();
 * param_5 := obj.GetFront();
 * param_6 := obj.GetRear();
 * param_7 := obj.IsEmpty();
 * param_8 := obj.IsFull();
 */
// @lc code=end

// func main() {
// 	obj := Constructor(5)
// 	param_1 := obj.InsertFront(2)
// 	print(param_1)
// }
