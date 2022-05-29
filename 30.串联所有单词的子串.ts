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

  let start = 0;
  let owl = subString.length;
  let sl = s.length;
  let rightBorder = sl - owl;
  let i = 0;
  while (start <= rightBorder) {
    let subStr = s.slice(i);
    while ((isMatch = regex.exec(subStr)) !== null) {
      let { index } = isMatch;
      index += i;
      if (!(res.includes(index))) {
        res.push(index);
      }
    }
    if (i > rightBorder) {
      start += 1;
      i = start;
    } else {
      i += owl;
    }
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
  let resMap: number[][] = []


  let start = 0;
  let i = 0;

  // 窗口滑动
  let subStr = s.slice(i);
  let indexs: number[] = []; // 单词的索引集合
  let flag: boolean = true;  // 代表符合条件

  // 遍历所有单词
  for (let j = 0; j < wl; j++) {
    const word = words[j];
    const pos: number[] = getSubstrPos(s, word);
    resMap.push(pos);
  }


  // let rsl = resMap.length;
  // let j = 0;
  // let temp:number[] = []

  // for (let i = 0; i < rsl; i++) {
  //   let p = resMap[i].pop();
  //   if(p){
  //     temp.push(p);
  //   }
  // }
  // console.log(temp);




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


