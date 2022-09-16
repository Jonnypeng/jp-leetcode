package algorithm

import "math"

func searchDistance(station *[]int, p int, n int) int {
	left := 0
	right := n - 1
	index := -1

	for left <= right {
		mid := (left + right) / 2
		val := (*station)[mid]
		if p == val {
			index = mid
			break
		} else if p < val {
			right = mid - 1
		} else if p > val {
			left = mid + 1
		}
	}

	if index != -1 {
		return index
	}

	if right < 0 {
		right = 0
	}

	if right > n-1 {
		right = n - 1
	}

	if left > n-1 {
		left = n - 1
	}

	if left < 0 {
		left = 0
	}

	if math.Abs(float64(p-(*station)[left])) < math.Abs(float64(p-(*station)[right])) {
		index = left
	} else {
		index = right
	}

	if math.Abs(float64(p-(*station)[left])) == math.Abs(float64(p-(*station)[right])) {
		if (*station)[left] < (*station)[right] {
			index = left
		} else {
			index = right
		}
	}

	return index
}

func explorationSupply(station []int, pos []int) []int {
	n := len(station)
	res := make([]int, len(pos))
	for i := range pos {
		res[i] = searchDistance(&station, pos[i], n)
	}
	return res
}

func ExplorationSupply(station []int, pos []int) []int {
	return explorationSupply(station, pos)
}
