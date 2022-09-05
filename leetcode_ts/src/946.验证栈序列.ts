/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
	// 两个数组不相等，则表明不具备元素一致性
	if (pushed.length !== popped.length) {
		return false;
	}

	let pushedPoint = 0;  // pused指针
	let poppedPoint = 0;  // popped指针
	let n = pushed.length;  // 边界
	let isError = false;   // 错误的flag
	let tempArr: number[] = [];  // 临时数组

	while (pushedPoint < n || poppedPoint < n) {
		// 错误边界守卫
		if (isError) {
			break;
		}

		// 当pushed的指针小于n时，临时数组的栈顶与popped的指针不一致时，则直接入push新元素
		if (pushedPoint < n && tempArr[tempArr.length - 1] !== popped[poppedPoint]) {
			tempArr.push(pushed[pushedPoint]);
			pushedPoint++;
			continue;
		}
		// 当pushed的指针小于n时，临时数组的栈顶与popped的指针一致时，则弹出栈
		if (tempArr[tempArr.length - 1] === popped[poppedPoint]) {
			tempArr.pop();
			poppedPoint++;
			continue;
		}
		// 兜底，不能满足条件
		isError = true;
		break;
	}

	return !isError;

};
// @lc code=end

// validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);