/*
 * @lc app=leetcode.cn id=169 lang=csharp
 *
 * [169] 多数元素
 */

// @lc code=start
public class Solution
{
  public int MajorityElement(int[] nums)
  {
    Dictionary<int, int> maxMap = new Dictionary<int, int>();
    int[2] maxValue = new int[2] { nums[0], 1 };

    for (int i = 0; i < nums.Length; i++)
    {
      int v = nums[i];
      if (maxMap.ContainsKey(v))
      {
        int currentValue = maxMap[v] + 1;
        maxMap[v] = currentValue;
        if (currentValue > maxValue[1])
        {
          maxValue[1] = currentValue;
          maxValue[0] = v;
        }
      }
      else
      {
           maxMap[v] = 1;
      }
    }

    return maxValue[0];

  }
}
// @lc code=end

