// pop
func arrPop(arr *[]int) {
	last := len(*arr) - 1
	if last <= 0 {
		*arr = []int{}
		return
	}
	*arr = (*arr)[0:last]
}