// pop
func arrPop(arr *[]int) {
	last := len(*arr) - 1
	*arr = (*arr)[0:last]
}
