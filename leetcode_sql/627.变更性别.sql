--
-- @lc app=leetcode.cn id=627 lang=mysql
--
-- [627] 变更性别
--

Create table If Not Exists Salary (id int, name varchar(7), sex char(1), salary int);
Truncate table Salary;
insert into Salary (id, name, sex, salary) values (1, 'A', 'm', 2500);
insert into Salary (id, name, sex, salary) values (2, 'B', 'f', 1500);
insert into Salary (id, name, sex, salary) values (3, 'C', 'm', 5500);
insert into Salary (id, name, sex, salary) values (4, 'D', 'f', 500);

-- @lc code=start
# Write your MySQL query statement below
UPDATE Salary SET sex = CASE sex WHEN "f" THEN "m" ELSE "f" END;
-- @lc code=end

