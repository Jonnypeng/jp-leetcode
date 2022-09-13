#
# @lc app=leetcode.cn id=195 lang=bash
#
# [195] 第十行
#

# @lc code=start
# Read from the file file.txt and output the tenth line to stdout.
cat file.txt | tail -n +10 | head -n 1
# @lc code=end

