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

function getSubstrPos(s: string, subString: string): number[] {
  let regex = RegExp(subString, "g");
  let isMatch;
  const res: number[] = [];
  while ((isMatch = regex.exec(s)) !== null) {
    const { index } = isMatch;
    res.push(index);
  }
  return res;
}


function findSubstring(s: string, words: string[]): number[] {
  if (words.length === 1) {
    let index = s.indexOf(s);
    if (index === -1) {
      return [];
    }
    return [index];
  }

  let wordsCountMap: Record<string, number> = {};

  // 计算所有单词的覆盖数
  words.forEach(word => {
    if (wordsCountMap[word]) {
      wordsCountMap[word]++;
    } else {
      wordsCountMap[word] = 1;
    }
  })

  const res: number[] = [];
  let wl = words.length;
  let owl = words[0].length;
  let sl = s.length;
  let rightBorder = sl - wl * owl;


  let start = 0;
  let i = 0;

  // 窗口滑动
  while (start <= rightBorder) {
    let subStr = s.slice(i);
    let tempMap: Record<string, number> = {}; // 临时的单词计数集合
    let indexs: number[] = []; // 单词的索引集合
    let flag: boolean = true;  // 代表符合条件

    // 遍历所有单词
    for (let j = 0; j < wl; j++) {
      const word = words[j];
      tempMap[word] = tempMap[word] ?? 0;
      if (tempMap[word] === wordsCountMap[word]) {
        break;
      }
      const pos: number[] = getSubstrPos(subStr, word);
      if (wordsCountMap[word] > 1) {
        pos.forEach(p => {
          if (tempMap[word] < wordsCountMap[word]) {
            indexs.push(i + p);
            tempMap[word]++;
          }
        })
      } else {
        indexs.push(i + pos[0]);
        tempMap[word]++;
      }
    }

    // 遍历是否所有单词都已经被覆盖
    for (let j = 0; j < wl; j++) {
      const key = words[j];
      if (wordsCountMap[key] !== tempMap[key]) {
        flag = false;
        break;
      }
    }

    indexs.sort((x, y) => x - y);

    if (flag && indexs.length === wl && indexs[0] - i === 0 && getIsArithmeticSequence(indexs) === owl && !(res.includes(indexs[0]))) {
      res.push(indexs[0]);
    }

    if (i > rightBorder) {
      start += 1;
      i = start;
    } else {
      i += owl;
    }
  }

  return res;
};
// @lc code=end

// test
// findSubstring("barfoothefoobarman", ["foo", "bar"]) //[0,9]
// findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]); // [8]
// findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake",["fooo","barr","wing","ding","wing"]); //[13]
findSubstring("ababababab", ["ababa", "babab"]); //[0]
// findSubstring("foobarfoobars", ["foo", "bar"]) //[0,3,6]
// findSubstring("aaa",["a","a"]);


