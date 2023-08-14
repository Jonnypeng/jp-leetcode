/*
 * @lc app=leetcode.cn id=381 lang=typescript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start
class RandomizedCollection {
    store: number[];
    constructor() {
        this.store = [];
    }

    insert(val: number): boolean {
        const { index, hasVal } = this.findVal(val);
        this.store.splice(index, 0, val);
        if (hasVal) {
            return false;
        }
        return true;
    }

    remove(val: number): boolean {
        const { index, hasVal } = this.findVal(val);
        if (!hasVal) {
            return false;
        }
        this.store.splice(index, 1);
        return true;
    }

    getRandom(): number {
        const n = this.store.length;
        let index = Math.floor(Math.random() * n);
        return this.store[index];
    }

    /**
     * 搜索最佳插入位置，如果已有值，则返回-1
     */
    findVal(target: number): { hasVal: boolean; index: number } {
        const nums = this.store;
        const n = nums.length;
        let left = 0;
        let right = n - 1;
        let index = 0;
        let hasVal: boolean = false;

        if (this.store.length === 0) {
            return {
                hasVal,
                index
            };
        }

        if (target > this.store[right]) {
            return {
                hasVal,
                index: n
            }
        }

        if (target < this.store[left]) {
            return {
                hasVal,
                index: 0
            }
        }

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const val = nums[mid];
            let lv = nums[mid - 1] ?? Number.MIN_SAFE_INTEGER;
            let rv = nums[mid + 1] ?? Number.MAX_SAFE_INTEGER;
            if (target === val) {
                index = mid;
                hasVal = true;
                break;
            } else if (target < val) {
                if (mid === 0 || target > lv) {
                    index = mid;
                    break;
                }
                right = mid - 1;
            } else if (target > val) {
                if (mid === n - 1 || target < rv) {
                    index = mid + 1;
                    break;
                }
                left = mid + 1;
            }
        }

        return {
            hasVal,
            index
        };
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

