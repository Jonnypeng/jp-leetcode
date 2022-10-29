/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    data: Map<number, number> = new Map();
    qu: number[] = [];
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const index = this.qu.indexOf(key);
        if (index === -1) {
            return -1;
        }
        const value = this.data.get(key) as number;
        this.qu.splice(index, 1);
        this.qu.push(key);
        return value;
    }

    put(key: number, value: number): void {
        const index = this.qu.indexOf(key);
        const isFlow = this.qu.length === this.capacity;
        if (index !== -1) {
            this.qu.splice(index, 1);
            this.qu.push(key);
            this.data.set(key, value);
            return;
        }

        if (isFlow) {
            const head = this.qu.shift() as number;
            this.data.delete(head);
            this.qu.push(key);
            this.data.set(key, value);
            return;
        }

        this.qu.push(key);
        this.data.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

let a = new LRUCache(2);
a.get(2)
a.put(2, 6)
a.get(1)
a.put(1, 5)
a.put(1, 2)
a.get(1)
a.get(2)