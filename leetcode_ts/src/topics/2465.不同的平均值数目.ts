/*
 * @lc app=leetcode.cn id=2465 lang=typescript
 *
 * [2465] 不同的平均值数目
 */

// @lc code=start
function getMinMax(nums: number[]): number[]{
  const head = nums.shift() as number;
  const tail = nums.pop() as number;
  return [head, tail];
}

function getAvg(x: number, y: number): number {
  return (x + y) * 0.5;
}

function distinctAverages(nums: number[]): number {
  nums = nums.sort((x, y) => x - y);
  const setData = new Set<number>();

  while (nums.length >= 2) {
    const [x, y] = getMinMax(nums);
    const value = getAvg(x,y);
    setData.add(value);
  }

  const { size } = setData;

  return size;
};
// @lc code=end

distinctAverages([1,100]);

