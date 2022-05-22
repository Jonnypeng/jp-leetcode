/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    store: number[];
    constructor() {
        this.store = [];
    }

    push(val: number): void {
        const n = this.store.length;
        const { store } = this;
        store.push(val);
    }

    pop(): void {
        this.store.pop();
    }

    top(): number {
        const n = this.store.length;
        return this.store[n - 1];
    }

    getMin(): number {
        const n = this.store.length;
        let min: number = Number.MAX_VALUE;
        for (let i = 0; i < n; i++) {
            min = Math.min(min, this.store[i])
        }
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

