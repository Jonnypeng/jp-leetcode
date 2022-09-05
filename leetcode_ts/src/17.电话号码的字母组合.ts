/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

function backtrack(curStr: string, res: string[], index: number, digits: string, dict: Record<string, string[]>) {
  if(index === digits.length){
    res.push(curStr);
  }

  for(let i in dict[digits[index]]){
    const ch = dict[digits[index]][i];
    backtrack(curStr+ch,res,index+1,digits,dict);
  }

}

function letterCombinations(digits: string): string[] {
  const dict: Record<string, string[]> = {
    '0': ["0"],
    '1': ["1"],
    '2': ["a", "b", "c"],
    '3': ["d", "e", "f"],
    '4': ["g", "h", "i"],
    '5': ["j", "k", "l"],
    '6': ["m", "n", "o"],
    '7': ["p", "q", "r", "s"],
    '8': ["t", "u", "v"],
    '9': ["w", "x", "y", "z"]
  }

  const res: string[] = [];

  if (digits === "") {
    return res;
  }

  backtrack("",res,0,digits,dict);

  return res;
};
// @lc code=end

letterCombinations("234");