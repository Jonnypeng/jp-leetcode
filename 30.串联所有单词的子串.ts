/*
 * @lc app=leetcode.cn id=30 lang=typescript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  const res: number[] = [];
  const dict: Map<string, number> = new Map();
  const owl: number = words[0].length;
  const wl: number = words.length;
  const sl: number = s.length;

  for (let i = 0; i < wl; i++) {
    const word = words[i];
    const hasVal = dict.has(word);
    if (!hasVal) {
      dict.set(word, 0);
    }
    let num = dict.get(word) as number;
    dict.set(word, num + 1)
  }

  for (let start = 0; start <= owl; start++) {
    let count: number = 0;
    const tempDict: Map<string, number> = new Map();

    for (let arr of dict) {
      tempDict.set(`${arr[0]}`, Number(`${arr[1]}`));
    }

    for (let j = start; j <= sl - owl; j += owl) {
      let currentWord = s.slice(j, j + owl);
      let currentWordVal: number = tempDict.get(currentWord) as number ?? 0;
      tempDict.set(currentWord, currentWordVal - 1);

      if (tempDict.get(currentWord) as number >= 0) {
        count += 1;
      }

      const popStart = j - owl * wl;
      if (popStart >= 0) {
        const popWord: string = s.slice(popStart, popStart + owl);
        let popWordVal = tempDict.get(popWord) ?? 0;
          tempDict.set(popWord, popWordVal + 1);
          if (tempDict.get(popWord) as number > 0) {
            count -= 1;
          }
      }

      if (count === wl) {
        res.push(popStart + owl);
      }
    }
  }

  return res;

};
// @lc code=end


// test
// findSubstring("barfoothefoobarman", ["foo", "bar"]) //[0,9]
// findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]) // [8]
