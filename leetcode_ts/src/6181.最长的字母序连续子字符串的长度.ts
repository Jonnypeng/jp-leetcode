/**
 * 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

 

示例 1：

输入：s = "abacaba"
输出：2
解释：共有 4 个不同的字母序连续子字符串 "a"、"b"、"c" 和 "ab" 。
"ab" 是最长的字母序连续子字符串。
示例 2：

输入：s = "abcde"
输出：5
解释："abcde" 是最长的字母序连续子字符串。
 */


function longestContinuousSubstring(s: string): number {
	let ans: number[][] = [];
	let queue: number[] = [];
	let res = 0

	for (let i = 0; i < s.length; i++) {
		let ch = s[i].codePointAt(0) as number;
		if (queue.length == 0) {
			queue.push(ch)
			continue;
		}
		if (queue.length > 0 && ch - queue[queue.length - 1] == 1) {
			queue.push(ch)
			continue;
		}
		if (queue.length > 0 && ch - queue[queue.length - 1] != 1) {
			ans.push([...queue]);
			queue = [];
			queue.push(ch);

			continue;
		}
	}

	ans.push([...queue]);

	for (let index = 0; index < ans.length; index++) {
		const n = ans[index].length;
		if(n > res){
			res = n;
		}
	}

	return res
};

longestContinuousSubstring("abcdiefguvwxyz")