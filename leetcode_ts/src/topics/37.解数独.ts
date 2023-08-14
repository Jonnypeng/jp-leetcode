/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */



function solveSudoku(board: string[][]): void {


  function isVoild(v: number, i: number, j: number): boolean {
    const rows: string[] = [];
    const cols: string[] = [];
    const girds: string[] = [];

    for (let i = 0; i < 9; i++) {
      rows[i] = "";
      cols[i] = "";
      girds[i] = "";
      for (let j = 0; j < 9; j++) {
        rows[i]+=board[i][j]
        cols[i]+=board[j][i]
        girds[i]+=board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i * 3) % 9 + j % 3];
      }
    }

    if (rows[i].indexOf(`${v}`) !== -1) {
      return false;
    }
    if (cols[j].indexOf(`${v}`)!== - 1) {
      return false;
    }
    if (girds[Math.floor(i / 3) * 3 + Math.floor(j / 3)].indexOf(`${v}`) !== -1) {
      return false;
    }
    return true;
  }


  function backtrack(): boolean {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== ".") {
          continue;
        }
        for (let v = 1; v <= 9; v++) {
          if (isVoild(v, i, j)) {
            board[i][j] = `${v}`;
            if (backtrack()) {
              return true;
            }
            board[i][j] = `.`;
          }
        }
        return false;
      }
    }
    return true;
  }

  backtrack();


};
// @lc code=end

solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]);

