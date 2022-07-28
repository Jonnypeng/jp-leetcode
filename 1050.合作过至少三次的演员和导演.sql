--
-- @lc app=leetcode.cn id=1050 lang=mysql
--
-- [1050] 合作过至少三次的演员和导演
--

Create table If Not Exists ActorDirector (actor_id int, director_id int, timestamp int);
Truncate table ActorDirector;
insert into ActorDirector (actor_id, director_id, timestamp) values (1, 1, 0);
insert into ActorDirector (actor_id, director_id, timestamp) values (1, 1, 1);
insert into ActorDirector (actor_id, director_id, timestamp) values (1, 1, 2);
insert into ActorDirector (actor_id, director_id, timestamp) values (1, 2, 3);
insert into ActorDirector (actor_id, director_id, timestamp) values (1, 2, 4);
insert into ActorDirector (actor_id, director_id, timestamp) values (2, 1, 5);
insert into ActorDirector (actor_id, director_id, timestamp) values (2, 1, 6);

-- @lc code=start
# Write your MySQL query statement below
SELECT SUBSTRING_INDEX(Main.V,"-",1) as actor_id,SUBSTRING_INDEX(Main.V,"-",-1) as director_id  from (SELECT CONCAT(actor_id,"-",director_id) as V,COUNT(ActorDirector.timestamp) as C from ActorDirector GROUP By V) as Main WHERE Main.C >=3;
-- @lc code=end

