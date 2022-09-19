/*
 * @lc app=leetcode.cn id=1636 lang=typescript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
interface DateType {
	value: number;
	count: number;
}



function frequencySort(nums: number[]): number[] {
	
	const sortMyObj = (arr: DateType[]): DateType[] => {
		let sort = function (arr: DateType[]): DateType[] {
			if (arr.length <= 1) {
				return arr;
			}
			var pivotIndex = Math.floor(arr.length / 2);
			let obj = arr.splice(pivotIndex, 1)[0];
			let count: number = obj.count;
			let value: number = obj.value;
			let leftArr: DateType[] = [];
			let rightArr: DateType[] = [];
			arr.forEach(v => {
				if (v.count < count) {
					leftArr.push(v);
				}
				if (v.count > count) {
					rightArr.push(v);
				}
				if (v.count === count) {
					if (v.value > value) {
						leftArr.push(v);
					} else {
						rightArr.push(v);
					}
				}
			})
			return sort(leftArr).concat(obj, sort(rightArr));
		}
		const res = sort(arr);
		return res;
	};

	const dict: Map<number, DateType> = new Map();
	let ans: DateType[] = [];
	let res: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		const v = nums[i];
		if (!(dict.has(v))) {
			dict.set(v, {
				value: v,
				count: 1
			})
			continue;
		}
		const { count } = dict.get(v) as DateType;
		dict.set(v, {
			value: v,
			count: count + 1
		})
	};

	dict.forEach((value) => {
		ans.push(value)
	})

	ans = sortMyObj(ans)

	ans.forEach(v => {
		let tempArr: number[] = [];
		for (let i = 0; i < v.count; i++) {
			tempArr[i] = v.value;
		}
		res.push(...tempArr)
	})

	return res;
}
// @lc code=end

frequencySort([1, 1, 2, 2, 2, 3, 3]);
