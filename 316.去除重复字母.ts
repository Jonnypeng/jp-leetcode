/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
	let stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		let ch = s[i];

		if(stack.indexOf(ch) > -1){
			continue;
		}

		while(stack.length > 0 && stack[stack.length - 1] > ch && s.indexOf(stack[stack.length - 1],i) > -1){
			stack.pop();
		}

		stack.push(ch);
	}

	return stack.join("");

};
// @lc code=end

removeDuplicateLetters("bcabc");