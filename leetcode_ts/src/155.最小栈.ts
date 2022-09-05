/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */


// @lc code=start
type StackNode = {
    val: number;
    min: number;
}

class MinStack {
    store: StackNode[];
    constructor() {
        this.store = [];
    }

    // 入栈
    push(val: number): void {
        const { store } = this;
        let topNode = this.getTopNode();
        let topMin = Number.MAX_SAFE_INTEGER;
        if (topNode) {
            topMin = topNode.min;
        }
        let min = Math.min(val, topMin);
        store.push({
            val,
            min
        });
    }

    // 出栈
    pop(): void {
        this.store.pop();
    }


    top(): number {
        const topNode = this.getTopNode();
        if (topNode) {
            return topNode.val;
        } else {
            throw new Error("栈顶没有数据");
        }
    }

    // 返回栈顶
    getTopNode(): StackNode | null {
        const n = this.store.length;
        return this.store[n - 1];
    }

    // 最小值
    getMin(): number {
        const topNode = this.getTopNode();
        if (topNode) {
            return topNode.min;
        } else {
            throw new Error("栈顶没有数据");
        }
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

// test

let s = new MinStack();
s.push(-2);
s.push(0);
s.push(-1);

console.log(s);