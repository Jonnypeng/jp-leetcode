/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const res: string[][] = [];
  let resStr:string = '';

  let x: number = 0;
  let y: number = 0;
  let index: number = 0;
  let upDown:string = 'down';

  while (index <= s.length - 1) {
    if(!res[y]){
      res[y] = [];
    }

    res[y][x] = s[index];
    index+=1;

    if(upDown === 'down'){
      y+=1;
    }

    if(upDown === 'up'){
      x+=1;
      y-=1;
    }

    if(y===numRows - 1){
      upDown = 'up';
    }

    if(y === 0){
      upDown = 'down';
    }
  }

  
  for(let i = 0;i<res.length;i++){
    for(let j = 0;j<res[i].length;j++){
      let val = res[i][j];
      if(val){
        resStr+=val;
      }
    }
  }


  return resStr;

};
// @lc code=end

// convert('abcdefg',3);
//  convert("PAYPALISHIRING",3);