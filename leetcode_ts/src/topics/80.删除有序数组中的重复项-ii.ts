/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	const dict: Record<string, number> = {};
	let n = nums.length;
	let p0 = 0;
	let p1 = 1;
	// let end = false;
	while (p1 <= n) {
		let a = nums[p0];
		let b = nums[p1];
		if (b === undefined) {
			b = Number.NaN;
		}
		if (a === b) {
			dict[a] = dict[a] ? dict[a] + 1 : 2;
			p1++;
		}
		if (a !== b) {
			if (dict[a] > 2) {
				let count = dict[a] - 2;
				nums.splice(p0, count);
				p1 -= count;
				p1++;
				p0 = p1 - 1;
			} else {
				p1++;
				p0 = p1;
			}
		}
	}
	n = nums.length;
	return n;
};
// @lc code=end

//removeDuplicates([0,1, 1, 1, 1, 2, 2, 3, 3, 3, 4,6,6,6])
// removeDuplicates([1, 1, 1])
removeDuplicates([1, 2, 3,3])

