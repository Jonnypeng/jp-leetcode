/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
	const n = nums.length;
	const res: number[] =[];
	const dict:Record<number,boolean> = {};
	for (let i = 0; i < n; i++){
		const v = nums[i];
		dict[v] ??= true;
	}
	for (let i = 1; i <= n ; i++) {
		if(dict[i]){
			continue;
		}
		res.push(i)	
	}
	return res;
};
// @lc code=end

findDisappearedNumbers([4,3,2,7,8,2,3,1])
