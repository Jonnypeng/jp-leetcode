/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
	let res = true;
	const n = s.length;
	const s_map = new Map<string, string>();
	const t_map = new Map<string, string>();
	for (let i = 0; i < n; i++) {
		const s_char = s[i];
		const t_char = t[i];
		let s_val = `${i}`;
		let t_val = `${i}`;
		if (s_map.has(s_char)) {
			let v = s_map.get(s_char);
			s_val = `${v}-${s_val}`;
		}
		if (t_map.has(t_char)) {
			let v = t_map.get(t_char);
			t_val = `${v}-${t_val}`;
		} 
		s_map.set(s_char, s_val);
		t_map.set(t_char, t_val);
		if (s_map.get(s_char) !== t_map.get(t_char)) {
			res = false;
			break;
		}
	}
	return res;
};
// @lc code=end

