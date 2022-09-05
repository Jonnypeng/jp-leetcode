/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // 最终结果
  let res = 0;
  // 临时的比较结果
  let num = 0;
  // 临时的字符串保存
  let m = '';
  // 遍历字符串的全部
  for(let n of s){
    // 在临时保存的字符串中查找 每一个字符的位置并判断是否存在
    const index = m.indexOf(n);
    // 不重复，自增1
    if(index === -1){
      m+=n;
      num+=1;
      res = Math.max(num,res);
    }else{
    // 重复，临时字符串需要进行低位切片
      m+=n;
      m = m.slice(index + 1);
      num = m.length;
    }
  }
  // 返回结果
  return res;
};
// @lc code=end

