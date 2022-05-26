/*
 * @lc app=leetcode.cn id=30 lang=typescript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * 判断数组是不是一个等差数列,如果是输出差值，如果不是，则输出false
 */
function getIsArithmeticSequence(nums: number[]): null | number {
  let r = true;
  const _nums = [...nums];
  for (let i = 1; i < _nums.length - 1; i++) {
    if (_nums[i] - _nums[i - 1] !== _nums[i + 1] - _nums[i]) {
      r = false;
    }
  }
  if (r) {
    return _nums[1] - _nums[0];
  } else {
    return null;
  }
}


function getSubstringIsInS(s: string, words: string[], wordsCountMap: Record<string, number>) {
  let oneWordLength = words[0].length;
  let sl = s.length;
  // let start: number = 0;
  const res: number[] = [];


  for (let start = 0; sl - start >= words.length * oneWordLength; start += oneWordLength) {
    const subString = s.slice(start);
    // let count = 0;
    let indexs: number[] = [];
    let tempMap: Record<string, number> = {};

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let index = subString.indexOf(word);
      if (index !== -1) {
        tempMap[word] = tempMap[word] ? tempMap[word] + 1 : 1;
        if (tempMap[word] <= wordsCountMap[word]) {
          indexs.push(index);
        }
      }
    }

    indexs.sort((x,y)=>x-y);

    if (indexs.length === words.length && indexs[0] === 0 && getIsArithmeticSequence(indexs) === oneWordLength) {
      res.push(start);
    }



  }

  return res;
}

function findSubstring(s: string, words: string[]): number[] {
  let wordsCountMap: Record<string, number> = {};

  words.forEach(word => {
    if (wordsCountMap[word]) {
      wordsCountMap[word]++;
    } else {
      wordsCountMap[word] = 1;
    }
  })

  const res = getSubstringIsInS(s, words, wordsCountMap);

  return res;
};
// @lc code=end

// test
findSubstring("barfoothefoobarman",["foo","bar"])


