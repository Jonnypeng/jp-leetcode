/**
 * 给你一个由正整数组成的数组nums 。 如果nums的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，则称该子数组为 优雅 子数组。 返回 最长 的优雅子数组的长度。 子数组 是数组中的一个 连续 部分。
	注意：长度为 1 的子数组始终视作优雅子数组。
	示例 1：
	输入：nums = [1,3,8,48,10]
	输出：3
	解释：最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：
		- 3 AND 8 = 0
		- 3 AND 48 = 0
		- 8 AND 48 = 0
	可以证明不存在更长的优雅子数组，所以返回 3 。
	示例 2：
	输入：nums = [3,1,5,11,13]
	输出：1
	解释：最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。
	提示：
	1 <= nums.length <= 105
	1 <= nums[i] <= 109
 */

function jung(nums: number[]): boolean {
	let res = true;
	for (let i = 0; i < nums.length; i++) {
		if (!res) {
			break;
		}
		for (let j = 0; j < nums.length; j++) {
			if (i === j) {
				continue
			}
			if ((nums[i] & nums[j]) !== 0) {
				res = false;
				break;
			}
		}
	}
	return res;
}

function longestNiceSubarray(nums: number[]): number {
	let resLength: number[] = [];
	let stack: number[] = []

	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		while (stack.length > 0 && jung([...stack, value]) === false) {
			resLength.push(stack.length);
			console.log(stack);
			stack.shift();
		}
		stack.push(value);
		if (i === nums.length - 1) {
			resLength.push(stack.length);
			console.log(stack);
		}
	}

	let res = Math.max(...resLength);
	return res;
};

// longestNiceSubarray([1, 3, 8, 48, 10]);
// longestNiceSubarray([84139415, 693324769, 614626365, 497710833, 615598711, 264, 65552, 50331652, 1, 1048576, 16384, 544, 270532608, 151813349, 221976871, 678178917, 845710321, 751376227, 331656525, 739558112, 267703680]); //8 

