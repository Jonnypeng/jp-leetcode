/*
 * @lc app=leetcode.cn id=478 lang=typescript
 *
 * [478] 在圆内随机生成点
 */

// @lc code=start
function outputCirclePos(x: number, y: number, radius: number, angle: number): number[] {
    angle*=(Math.PI/180);
    const _x = radius * Math.cos(angle) + x;
    const _y = radius * Math.sin(angle) + y;
    return [_x,_y];
}

class Solution {
    radius: number;
    x_center: number;
    y_center: number;
    constructor(radius: number, x_center: number, y_center: number) {
        this.radius = radius;
        this.x_center = x_center;
        this.y_center = y_center;
    }

    randPoint(): number[] {
        const radius = Math.sqrt(Math.random())*this.radius;
        const ang = Math.random()*360; 
        const pos = outputCirclePos(this.x_center,this.y_center,radius,ang);
        return pos;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
// @lc code=end

