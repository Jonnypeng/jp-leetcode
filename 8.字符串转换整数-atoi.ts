/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start

/**
 * 读入字符串并丢弃无用的前导空格
 */
function s1(str:string):string{
  return str.replace(/^\s+/,"");
}

/**
 * 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 */
function s2(str:string):string{
  if(/^\+{1}\d+/.test(str)){
    return str.replace(/^\+{1}/,"");
  }
  return str;
}

/**
 * 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略
 */
function s3(str:string):string{
  const m = str.match(/^-?\d+/);
  if(m){
    str = m[0];
    return str;
  }
  return "";
}

/**
 * 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）
 */
function s4(str:string):number{
  let num = Number(str);
  if(!num){
    return 0
  }
  return num;
}

/**
 * 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 */
function s5(num: number):number{
  const abs = Math.pow(2,31);
  const min = abs * -1;
  const max = abs - 1;
  if(num < min){
    return min;
  }
  if(num > max){
    return max;
  }
  return num;
}

function myAtoi(s: string): number {
  let str = s;
  str = s1(str);
  str = s2(str);
  str = s3(str);
  let num = s4(str);
  num = s5(num);
  return num;
};
// @lc code=end
 // myAtoi("words and 987");

 // myAtoi("   -42"); // -42
// myAtoi("+11e530408314"); // 11 