package leetcode

import (
	"math"
	"math/rand"
)

/*
 * @lc app=leetcode.cn id=478 lang=golang
 *
 * [478] 在圆内随机生成点
 */

// @lc code=start
type Solution struct {
	radius float64
	x      float64
	y      float64
}

func Constructor(radius float64, x_center float64, y_center float64) Solution {
	s := &Solution{
		radius,
		x_center,
		y_center,
	}
	return *s
}

func outputCirclePos(x float64, y float64, radius float64, angle float64) []float64 {
	angle *= math.Pi / 180
	_x := radius*math.Cos(angle) + x
	_y := radius*math.Sin(angle) + y
	return []float64{_x, _y}
}

func (this *Solution) RandPoint() []float64 {
	radius := math.Sqrt(rand.Float64()) * this.radius
	angle := rand.Float64() * 360
	pos := outputCirclePos(this.x, this.y, radius, angle)
	return pos
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(radius, x_center, y_center);
 * param_1 := obj.RandPoint();
 */
// @lc code=end
