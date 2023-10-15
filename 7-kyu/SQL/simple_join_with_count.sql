-- 7 kyu
-- SQL Basics: Simple JOIN with COUNT
-- https://www.codewars.com/kata/580918e24a85b05ad000010c

-- DESCRIPTION:
-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table, 
-- and join to the toys table so that you can return the COUNT of the toys.
-- You should return all people fields as well as the toy count as "toy_count".

-- people table schema
-- id
-- name

-- toys table schema
-- id
-- name
-- people_id

-- Description: query retrieves name, id and total count of toys grouped for the person id
SELECT p.id, p.name, COUNT(t.name) as toy_count
FROM people p
JOIN toys t
ON p.id = t.people_id
GROUP BY p.id;
