--
-- @lc app=leetcode.cn id=620 lang=mysql
--
-- [620] 有趣的电影
-- https://leetcode.cn/problems/not-boring-movies/

Create table If Not Exists cinema (id int, movie varchar(15), description varchar(15), rating float(2, 1))
insert into cinema (id, movie, description, rating) values (1, 'War', 'great 3D', 8.9);
insert into cinema (id, movie, description, rating) values (2, 'Science', 'fiction', 8.5);
insert into cinema (id, movie, description, rating) values (3, 'irish', 'boring', 6.2);
insert into cinema (id, movie, description, rating) values (4, 'Ice song', 'Fantacy', 8.6);
insert into cinema (id, movie, description, rating) values (5, 'House card', 'Interesting', 9.1);

-- @lc code=start
# Write your MySQL query statement below
SELECT cinema.* FROM cinema WHERE cinema.description != "boring" AND cinema.id % 2 != 0 ORDER BY cinema.rating desc;
-- @lc code=end

