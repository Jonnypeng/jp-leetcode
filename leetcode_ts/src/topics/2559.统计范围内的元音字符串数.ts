/*
 * @lc app=leetcode.cn id=2559 lang=typescript
 *
 * [2559] 统计范围内的元音字符串数
 */

// @lc code=start
function vowelStrings(words: string[], queries: number[][]): number[] {
  const pattern = /[aeiou]/;
  const wn = words.length;
  const qn = queries.length;
  const res: number[] = new Array(qn).fill(0);
  const wordsAnswer: boolean[] = new Array(wn).fill(false);

  for (let i = 0; i < wn; i++) {
    const word = words[i];
    const head = word[0];
    const tail = word[word.length - 1];
    wordsAnswer[i] = pattern.test(head) && pattern.test(tail);
  }

  for (let i = 0; i < qn; i++) {
    const [l, r] = queries[i];
    for (let j = l; j < r + 1; j++) {
      if(wordsAnswer[j]){
        res[i]++; 
      }
    }
  }

  return res;
};
// @lc code=end

